<template>
  <div class="item-inner">
    <div class="head">
      <span># {{ source.index }}</span>
      <span>{{ source.name }}</span>
    </div>
    <div class="desc">{{ source.desc }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'DynamicSizeItem',
  props: {
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.item-inner {
  .head {
    font-weight: 500;
  }
  span:first-child {
    margin-right: 1em;
  }
  .desc {
    padding-top: .5em;
    text-align: justify;
  }
}
</style>