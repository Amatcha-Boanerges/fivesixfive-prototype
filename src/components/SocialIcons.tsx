interface SocialIconsProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'primary';
  showLabels?: boolean;
  socialLinks?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    x?: string;
  };
}

export default function SocialIcons({
  className = '',
  iconSize = 'md',
  variant = 'light',
  showLabels = false,
  socialLinks = {}
}: SocialIconsProps) {
  const sizeClasses = {
    sm: 'w-[18px] h-[18px]',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const variantClasses = {
    light: {
      container: 'border-white/60 hover:bg-primary/80',
      icon: 'text-white'
    },
    dark: {
      container: 'border-gray-600 hover:bg-gray-800',
      icon: 'text-gray-700 hover:text-gray-900'
    },
    primary: {
      container: '',
      icon: 'text-background/70'
    }
  };

  const currentVariant = variantClasses[variant];

  const defaultLinks = {
    facebook: 'https://web.facebook.com/fivesixfiveghana/?_rdc=1&_rdr#',
    linkedin: 'https://www.linkedin.com/company/fivesixfive/',
    instagram: 'https://www.instagram.com/fivesixfive_/',
    x: 'https://x.com/fivesixfive_'
  };

  const links = { ...defaultLinks, ...socialLinks };

  const socialPlatforms = [
    {
      name: 'Facebook',
      href: links.facebook,
      icon: (
        <svg className={sizeClasses[iconSize]} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: links.linkedin,
      icon: (
        <svg className={sizeClasses[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: links.instagram,
      icon: (
        <svg className={sizeClasses[iconSize]} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'X',
      href: links.x,
      icon: (
        <svg className={sizeClasses[iconSize]} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
          aria-label={platform.name}
        >
          <div className={currentVariant.icon}>
            {platform.icon}
          </div>
        </a>
      ))}
    </div>
  );
}

