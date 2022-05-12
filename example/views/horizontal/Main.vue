<template>
  <div class="example">
    <VirtualScrollList
      class="list-horizontal scroll-touch"
      :data-key="'id'"
      :data-sources="items"
      :data-component="itemComponent"
      :estimate-size="110"
      :direction="'horizontal'"
      :wrap-class="'wrapper'"
      :item-class="'list-item-horizontal'"
    />
  </div>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import { Random } from "mockjs";
import Item from "./Item.vue";
import genUniqueId from "../../common/gen-unique-id";

const TOTAL_COUNT = 10000;
const sizes = [60, 80, 100, 150, 180];
const DataItems = [];
let count = TOTAL_COUNT;
while (count--) {
  const index = TOTAL_COUNT - count;
  DataItems.push({
    index,
    id: genUniqueId(index),
    size: Random.pick(sizes),
  });
}

export default defineComponent({
  name: "Horizontal",
  data() {
    return {
      items: DataItems,
      itemComponent: shallowRef(Item),
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.list-horizontal) {
  width: 100%;
  border: 2px solid;
  border-radius: 3px;
  overflow-x: auto;
  border-color: dimgray;
  display: flex; // when using scrollToBottom()
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .list-item-horizontal {
    border-right: 1px solid #dfdfdf;
  }
}
</style>
