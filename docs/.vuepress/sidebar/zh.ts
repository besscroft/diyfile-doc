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
      text: "手册",
      prefix: "/manual",
      children: [
        "local.md",
        "onedrive.md",
        "AmazonS3.md",
        "alioss.md",
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
    "remember-us",
  ],
});
