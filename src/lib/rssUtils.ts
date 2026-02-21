export interface BeehiivPost {
    title: string;
    link: string;
    pubDate: string;
    isoDate: string;
    description: string;
    content: string;
    image?: string;
}

export async function fetchBeehiivFeed(
    url: string = import.meta.env.VITE_BEEHIIV_FEED_URL,
    limit: number = 9
): Promise<BeehiivPost[]> {
    try {
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch RSS feed");
        }

        const xmlContent = await response.text();

        if (!xmlContent) {
            console.error("Empty response from beehiiv proxy");
            return [];
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

        const parserError = xmlDoc.getElementsByTagName("parsererror");
        if (parserError.length > 0) {
            console.error("XML Parse Error:", parserError[0].textContent);
            return [];
        }

        const items = xmlDoc.querySelectorAll("item");

        const posts: BeehiivPost[] = Array.from(items).slice(0, limit).map((item, index) => {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const description = item.querySelector("description")?.textContent || "";

            let content = item.querySelector("encoded")?.textContent ||
                item.querySelector("content\\:encoded")?.textContent ||
                "";

            if (!content) {
                const contentNodes = item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded");
                if (contentNodes.length > 0) {
                    content = contentNodes[0].textContent || "";
                }
            }

            const enclosure = item.querySelector("enclosure");
            const imageUrl = enclosure?.getAttribute("url") || "";

            return {
                title,
                link,
                pubDate: new Date(pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }),
                isoDate: new Date(pubDate).toISOString(),
                description: description.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
                content,
                image: imageUrl || "https://picsum.photos/800/600?random=" + (index + 100)
            };
        });

        return posts;
    } catch (error) {
        console.error("Error fetching Beehiiv feed:", error);
        return [];
    }
}
