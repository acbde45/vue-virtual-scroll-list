<template>
  <div class="item-inner">
    <span># {{ source.index }}</span>
    <span>{{ source.name }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'FixedSizeItem',
  props: {
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.item-inner {
  span:first-child {
    margin-right: 1em;
  }
}
</style>
