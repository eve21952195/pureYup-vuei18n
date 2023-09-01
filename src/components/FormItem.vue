<script setup>
import { ref, reactive, inject } from "vue";
import * as yup from "yup";

//inject
const t = inject("t")

// 表单数据
const formData = reactive({
  name: "",
  email: "",
});

// 验证规则
const validationSchema = yup.object().shape({
  name: yup.string().required().label(t("page1.name")),
  email: yup.string().required().email().label(t("page1.email")),
});

// 验证错误消息
const errors = reactive({});

// 提交表单
const submitForm = () => {
  console.log("提交表单");
  validationSchema
    .validate(formData, { abortEarly: false })
    .then(() => {
      // 表单验证通过，执行提交操作
      console.log("表单验证通过，提交表单");
    })
    .catch((validationErrors) => {
      // 表单验证未通过，显示错误消息
      console.log("验证失败 .errors--->", validationErrors.errors);
      console.log("验证失败 .inner", validationErrors.inner);
      validationErrors.inner.forEach((error, index) => {
        errors[error.path] = error.message;
        // errors = {...errors, [error.path]:error.message}
        console.log(`遍历第${index + 1} erros--->`, errors);
      });
    });
};

</script>

<template>
  <div class="greetings">
    <h3>子元件表格01~~~</h3>
    <form @submit.prevent="submitForm">
      <div>
        <label>{{ t("page1.name") }}</label>
        <input v-model="formData.name" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div>
        <label>{{ t("page1.email") }}</label>
        <input v-model="formData.email" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>

      <button type="submit">提交</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
