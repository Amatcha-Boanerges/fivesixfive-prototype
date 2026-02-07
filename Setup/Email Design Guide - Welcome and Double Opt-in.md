# Email Design Guide: Welcome & Double Opt-in (fivesixfive)

Use this guide to style your **Welcome Email** and **Double Opt-in (confirmation)** emails in Beehiv (or any editor) so they match the fivesixfive website.

---

## 1. Brand Colors

Use these exact values in your email editor (hex works best for most email clients).

| Role | Hex | Use in emails |
|------|-----|----------------|
| **Primary (magenta)** | `#c62f9d` | Headers, main CTA button, links, accent strip |
| **Primary hover/dark** | `#a0267e` | Button hover (if supported), darker accent |
| **Primary light** | `#e8a8d1` | Light backgrounds, highlights |
| **Secondary (teal)** | `#22a796` | Secondary CTA, icons, footer accent |
| **Secondary hover/dark** | `#1a8a7a` | Teal hover/dark variant |
| **Secondary light** | `#a8e8e0` | Light teal backgrounds |
| **Text primary** | `#1C1C1C` | Body copy, headings |
| **Text secondary** | `#6B7280` | Supporting text, captions |
| **Background light** | `#F7F8FA` | Section backgrounds, cards |
| **Background white** | `#FFFFFF` | Main email body |
| **Border** | `#e5e7eb` | Dividers, card borders |

### HSL (for CSS / advanced editors)

- Primary: `hsl(320, 62%, 48%)` → `#c62f9d`
- Secondary: `hsl(171, 66%, 40%)` → `#22a796`
- Foreground (text): `hsl(240, 10%, 15%)` → ~`#252530`

---

## 2. Gradients (website brand)

The site uses a **primary→secondary** gradient. Many email clients have limited gradient support, so use a **solid fallback** (e.g. primary).

| Use | CSS (when supported) | Fallback |
|-----|------------------------|----------|
| Hero/header strip | `linear-gradient(240deg, #c62f9d 0%, #22a796 100%)` | `#c62f9d` |
| Hero (multi-stop) | `linear-gradient(135deg, #c62f9d 0%, #6b3d7a 50%, #22a796 100%)` | `#c62f9d` |

Use gradients only in clients that support them (e.g. Apple Mail, some web clients); elsewhere use the primary hex.

---

## 3. Typography

| Role | Font stack (website) | Email-safe stack |
|------|----------------------|------------------|
| Headings | Poppins | `Poppins, Helvetica Neue, Arial, sans-serif` |
| Body | Inter | `Inter, Arial, sans-serif` |
| UI / labels | Montserrat | `Montserrat, Helvetica Neue, Arial, sans-serif` |

- **Font sizes:** Heading 1 ~24–28px, Heading 2 ~20–22px, body 16px, small 14px.
- **Line height:** 1.5–1.6 for body.
- **Weights:** Headings 600 (semibold), body 400, labels 500.

If your editor doesn’t support web fonts, use: `Helvetica Neue, Arial, sans-serif`.

---

## 4. Layout & Spacing

- **Max width:** 600px (single column).
- **Padding:** 24–32px horizontal, 16–24px vertical for sections.
- **Border radius:** 8–12px for buttons and cards (where supported).
- **Button:** Primary color background, white text, padding ~12px 24px, border-radius 8px.

---

## 5. Welcome Email – Content & Structure

1. **Header**
   - Logo or “fivesixfive” wordmark.
   - Optional thin strip: brand gradient or solid `#c62f9d`.

2. **Greeting**
   - Short line: e.g. “You’re in” / “Welcome to fivesixfive.”

3. **Body**
   - 2–3 short sentences: what they get (e.g. monthly insights, exclusive tips).
   - One clear CTA: e.g. “Read the latest” or “Visit our website” → link to site.

4. **Footer**
   - Unsubscribe + link to Privacy Policy.
   - Company line: e.g. “fivesixfive – [tagline]”.
   - Optional small accent in teal `#22a796`.

**Tone:** Professional, concise, on-brand (no long paragraphs).

---

## 6. Double Opt-in (Confirmation) Email – Content & Structure

1. **Subject line**
   - Clear and short: e.g. “Confirm your subscription to fivesixfive” or “One click to confirm.”

2. **Header**
   - Same as Welcome: logo/wordmark + optional brand strip.

3. **Main message**
   - One short sentence: e.g. “Click the button below to confirm your subscription.”
   - Single primary CTA button: “Confirm my email” / “Yes, subscribe me.”
   - Button link: Beehiv’s confirmation link (do not replace with your own URL).

4. **Fallback**
   - “If the button doesn’t work, copy and paste this link: [confirmation URL].”

5. **Footer**
   - Same as Welcome: unsubscribe, Privacy Policy, company name.
   - Optional: “If you didn’t sign up, you can ignore this email.”

**Design:** Same colors and typography as Welcome; emphasis on one clear CTA.

---

## 7. Quick Reference – Styling Checklist

- [ ] Header/logo area: primary `#c62f9d` or gradient with fallback `#c62f9d`.
- [ ] Headings: `#1C1C1C`, Poppins (or fallback).
- [ ] Body text: `#1C1C1C`, 16px, line-height 1.5–1.6.
- [ ] Primary button: bg `#c62f9d`, text white, rounded.
- [ ] Links: `#c62f9d` or `#22a796`, underlined or bold.
- [ ] Footer/secondary accent: `#22a796` or `#6B7280` for small print.
- [ ] Background: `#FFFFFF` body, `#F7F8FA` for sections if needed.

---

## 8. Can You Code These Emails?

**Beehiv (Welcome & Double opt-in)**  
- These are managed in **Beehiv’s dashboard**: Settings → Emails → Preset Emails.  
- You **edit content and design in their UI** (drag-and-drop or their template editor).  
- Some plans allow **custom HTML**; if so, you can paste HTML/CSS that follows this guide.  
- You **don’t run or deploy code** for these; Beehiv sends them when users subscribe/confirm.

**Your own app (Nodemailer)**  
- **Yes, you can code these.**  
- The site already sends **coded HTML emails** (e.g. contact form, RSVP) from `src/app/api/contact/route.ts` and `src/services/emailService.ts` using Nodemailer.  
- For **newsletter Welcome / Double opt-in**, the flow is: user signs up on site → Beehiv sends the confirmation and welcome emails. So those stay in Beehiv.  
- If you ever want **custom transactional emails** (e.g. “You’re subscribed” sent from your server), you can add a new Nodemailer template in the codebase and re-use the same colors and structure from this guide (and from the contact/RSVP HTML).

**Summary**

| Email type | Where it’s sent from | Can you “code” it? |
|------------|----------------------|--------------------|
| Welcome | Beehiv | Edit in Beehiv (or custom HTML if available). |
| Double opt-in | Beehiv | Same as above. |
| Contact form / RSVP | Your app (Nodemailer) | Yes – already coded in the repo; you can align with this guide. |

Use this doc to **update your Beehiv Welcome and Double opt-in designs** to match the site, and to **keep any coded (Nodemailer) emails** consistent with the same colors and patterns.
