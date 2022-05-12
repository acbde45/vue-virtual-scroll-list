<template>
  <div class="item-inner">
    <span class="index"># {{ source.index }}</span>
    <input
      class="checkbox"
      v-bind:checked="source.checked"
      @change="onChange"
      type="checkbox"
    />
    <span class="name" @click="onClickName">{{ source.name }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import emitter from "tiny-emitter/instance";

export default defineComponent({
  name: "KeepStateItem",

  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    onChange(e) {
      emitter.emit(
        "KeepState/checkBoxValueChange",
        this.source.id,
        e.target.checked
      );
    },

    onClickName() {
      emitter.emit(
        "KeepState/checkBoxValueChange",
        this.source.id,
        !this.source.checked
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.item-inner {
  position: relative;
  display: flex;
  align-items: center;
  .index {
    margin-right: 1em;
  }
  .name {
    margin-left: 1em;
    cursor: pointer;
    user-select: none;
  }
  .checkbox {
    text-align: center;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    appearance: none;
    margin: 0;
  }
  .checkbox {
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='-10 -18 100 135'%3E%3Ccircle cx='50' cy='50' r='50' fill='none' stroke='%23ededed' stroke-width='3'/%3E%3C/svg%3E");
  }
  .checkbox:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='-10 -18 100 135'%3E%3Ccircle cx='50' cy='50' r='50' fill='none' stroke='%23c28ce2' stroke-width='3'/%3E%3Cpath fill='%239b4dca' d='M72 25L42 71 27 56l-4 4 20 20 34-52z'/%3E%3C/svg%3E");
  }
}
</style>
