import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    "project",
    "quick-start",
    {
      icon: "discover",
      text: "Deploy",
      prefix: "/en/deploy",
      children: [
        "front.md",
        "proxy.md",
        "database.md",
        "backend.md",
        "free.md",
      ]
    },
    {
      icon: "discover",
      text: "Manual",
      prefix: "/en/manual",
      children: [
        "local.md",
        "onedrive.md",
        "AmazonS3.md",
        "alioss.md",
      ]
    },
    {
      icon: "discover",
      text: "Advanced",
      prefix: "/en/advanced",
      children: [
        "faqs.md",
        "dev.md",
        "swagger.md",
      ]
    },
  ],
});
