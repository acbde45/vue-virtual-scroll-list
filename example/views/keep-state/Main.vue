<template>
  <div class="example">
    {{ selectNames }}
    <VirtualScrollList
      class="list-keep scroll-touch"
      :data-key="'id'"
      :data-sources="items"
      :data-component="itemComponent"
      :estimate-size="60"
      :item-class="'list-item-keep'"
    />
  </div>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import emitter from "tiny-emitter/instance";
import Item from "./Item.vue";

import { Random } from "mockjs";
import genUniqueId from "../../common/gen-unique-id";

const TOTAL_COUNT = 1000;

const DataItems = [];
let count = TOTAL_COUNT;
while (count--) {
  const index = TOTAL_COUNT - count;
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    checked: false,
  });
}

export default defineComponent({
  name: "KeepState",

  data() {
    return {
      items: DataItems,
      itemComponent: shallowRef(Item),
    };
  },

  computed: {
    selectNames() {
      return this.items
        .map((item) => {
          if (item.checked) {
            return item.name;
          }
        })
        .filter((item) => !!item);
    },
  },

  created() {
    // detecting change checked value from item component event.
    emitter.on("KeepState/checkBoxValueChange", (id, value) => {
      const targetItem = this.items.find((item) => item.id === id);
      if (targetItem) {
        targetItem.checked = value;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.selects {
  margin-bottom: 1em;
  font-size: 14px;
}
.list-keep {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  :deep(.list-item-keep) {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
