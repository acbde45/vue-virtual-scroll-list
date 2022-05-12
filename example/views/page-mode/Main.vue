<template>
  <div class="example">
    <VirtualScrollList class="list-page scroll-touch" ref="vsl"
      :data-key="'id'"
      :data-sources="items"
      :data-component="itemComponent"
      :estimate-size="135"
      :keeps="15"
      :item-class="'list-item-page'"
      :page-mode="true"
      v-on:totop="totop"
      v-on:tobottom="tobottom"
    />
    <div class="bottom">
      <h2>This is page footer</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent, shallowRef } from "vue"
import Item from './Item.vue'

import { Random } from 'mockjs'
import getSentences from '../../common/sentences'
import genUniqueId from '../../common/gen-unique-id'

const TOTAL_COUNT = 1000

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
  name: 'PageMode',

  components: {
  },

  data () {
    return {
      items: DataItems,
      itemComponent: shallowRef(Item),
    }
  },

  methods: {
    totop () {
      console.log('reach totop')
    },
    tobottom () {
      console.log('reach tobottom')
    }
  }
});
</script>

<style lang="scss" scoped>
.list-page {
  width: 100%;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;

  :deep(.list-item-page) {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }
}
.bottom {
  padding: 2em 0;
}
</style>
