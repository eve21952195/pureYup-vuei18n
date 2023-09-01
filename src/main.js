import { createApp } from "vue";
import App from "./App.vue";

// 引入創建好的 i18n 實例
import i18n from "./i18n";

// 引入 composable
import { useSetLocale } from "./composables/useSetLocale";

const { setAllLocale } = useSetLocale();

setAllLocale("ja");


// 全局註冊 i18n
createApp(App).use(i18n).mount("#app");
