import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "DiyFile",
      description: "一款好看的在线文件列表程序",
    },
    "/en/": {
      lang: "en-US",
      title: "DiyFile",
      description: "A good-looking online file listing program.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
