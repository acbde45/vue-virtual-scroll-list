<template>
  <div class="example">
    <VirtualScrollList
      class="list-dynamic scroll-touch"
      data-key="id"
      :data-sources="items"
      :data-component="itemComponent"

      :estimate-size="80"
      :item-class="'list-item-dynamic'"
    />
  </div>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import { Random } from 'mockjs'
import getSentences from './common/sentences'
import genUniqueId from './common/gen-unique-id'
import Item from './components/Item.vue'

const TOTAL_COUNT = 10000
const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    desc: getSentences()
  })
}

export default defineComponent({
  name: 'DynamicSize',
  data () {
    return {
      total: TOTAL_COUNT.toLocaleString(),
      items: DataItems,
      itemComponent: shallowRef(Item),
    }
  },
})
</script>

<style lang="scss">
.example {
  margin: 0 auto;
  padding: 0 2em;
  width: 776px;
  padding-top: 3em;
}
.list-dynamic {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  .list-item-dynamic {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
</style>