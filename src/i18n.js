// 引入 createi18n 函数
import { createI18n } from "vue-i18n";

// 引入 i18n 轉用語言包
import zh from "./i18nlanguage/zh";
import ja from "./i18nlanguage/ja";

//创建并设置 i18n 实例
const i18n = createI18n({
  legacy: false, // false 讓你可以在 composition API 中使用
  locale: "zh-TW", // 预设语言
  fallbackLocale: "zh-TW", // 如果当前语言文件缺失，默认回退到的语言
  messages: {
    "zh-TW": zh,
    ja: ja
  }
});

// 導出實例
export default i18n;
