<template>
  <div id="app">
    <h1>純 yup 国际化 + 原生 input 標籤 + vue-i18n(整個文本)</h1>
    <h3>注意 yup setLocale() 的問題</h3>
    <FormItem></FormItem>
    <!-- 切换语言按钮 -->
    <div>
      <button @click="setLocaleApp('zh-TW')">切换为简体中文</button>
      <button @click="setLocaleApp('ja')">切换为日文</button>
    </div>
  </div>
</template>

<script setup>

import { ref, reactive, provide } from "vue";
// 引入註冊子元件
import FormItem from "./components/FormItem.vue";

// 引入composable
import { useSetLocale } from "./composables/useSetLocale";
const { setAllLocale, t } = useSetLocale();

// provide
provide("t", t)

// 切换语言
const setLocaleApp = (newval) => {
  console.log("切换语言");
  setAllLocale(newval);
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
