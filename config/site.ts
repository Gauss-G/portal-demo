export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Gopher Configuration Portal",
  description:
    "Ai Assistant Configuration Portal.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Configuration",
      href: "/configuration",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
