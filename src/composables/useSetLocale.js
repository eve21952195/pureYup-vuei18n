import { ref, reactive } from "vue";
import { setLocale } from "yup";

// 引入創建好的 i18n 實例
import i18n from "../i18n";

import zh from "../i18nlanguage/zh";
import ja from "../i18nlanguage/ja";

export function useSetLocale() {
  // 語言包
  const data = reactive({
    ja: ja,
    "zh-TW": zh
  });
  console.log("data--->", data);

  // i18n  方法、屬性
  const { t, locale } = i18n.global;


  // 洗資料
  const extractMessages = (origin) => {
    console.log("origin---->", origin);
    return JSON.parse(JSON.stringify(origin)).common.messages;
  };

  // 設定 語言包
  const setAllLocale = (val) => {
    console.log("setAllLocale 改變 val--->", val);
    // 修改 i18n locale
    locale.value = val;
    // 修改 Yup locale
    setLocale(extractMessages(data[val]));

  };

  return {
    setAllLocale,
    t
  };
}
