<template>
  <PageMode />
</template>

<script setup>
import DynamicSize from "./views/dynamic-size/Main.vue";
import FixedSize from "./views/fixed-size/Main.vue";
import Horizontal from "./views/horizontal/Main.vue";
import InfiniteLoading from "./views/infinite-loading/Main.vue";
import KeepState from "./views/keep-state/Main.vue";
import PageMode from "./views/page-mode/Main.vue";
</script>

<style lang="scss">
.example {
  margin: 0 auto;
  padding: 0 2em;
  width: 776px;
  padding-top: 3em;
}
</style>
