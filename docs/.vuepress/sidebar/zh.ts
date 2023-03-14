import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    "project",
    "quick-start",
    {
      icon: "discover",
      text: "部署",
      prefix: "/deploy",
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
      text: "高级",
      prefix: "/advanced",
      children: [
        "faqs.md",
        "dev.md",
        "swagger.md",
      ]
    },
  ],
});
