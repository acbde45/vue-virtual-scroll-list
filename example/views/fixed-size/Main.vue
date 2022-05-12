<template>
  <div class="example">
    <VirtualScrollList
      class="list scroll-touch"
      :data-key="'id'"
      :data-sources="items"
      :data-component="itemComponent"

      :estimate-size="50"
      :item-class="'list-item-fixed'"
    />
  </div>
</template>

<script>
import { shallowRef, defineComponent } from "vue";
import { Random } from 'mockjs'
import Item from './Item.vue'
import genUniqueId from '../../common/gen-unique-id'

const TOTAL_COUNT = 10000
const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
  })
}

export default defineComponent({
  name: 'FixedSize',
  data () {
    return {
      total: TOTAL_COUNT.toLocaleString(),
      items: DataItems,
      itemComponent: shallowRef(Item),
    }
  },
});
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
 :deep(.list-item-fixed) {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>
