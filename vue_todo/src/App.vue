<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
import "./assets/styles/global.styl";

import MainHeader from "./components/MainHeader.vue";
import MainTodo from "./components/MainTodo/MainTodo.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "app",
  components: {
    // 组件名：组件对象
    MainHeader: MainHeader,
    MainTodo,
    MainFooter
  }
};
</script>

<style lang='stylus' scoped></style>