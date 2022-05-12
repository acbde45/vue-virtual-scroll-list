/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time
 */

import { h, defineComponent } from "vue";
import emitter from "tiny-emitter/instance";
import { ItemProps, SlotProps } from "./props";

const Wrapper = {
  created() {
    this.shapeKey = this.horizontal ? "offsetWidth" : "offsetHeight";
  },

  mounted() {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(() => {
        this.dispatchSizeChange();
      });
      this.resizeObserver.observe(this.$el);
    }
  },

  // since componet will be reused, so disptach when updated
  updated() {
    this.dispatchSizeChange();
  },

  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  },

  methods: {
    getCurrentSize() {
      return this.$el ? this.$el[this.shapeKey] : 0;
    },

    // tell parent current size identify by unqiue key
    dispatchSizeChange() {
      emitter.emit(
        this.event,
        this.uniqueKey,
        this.getCurrentSize(),
        this.hasInitial
      );
    },
  },
};

// wrapping for item
export const Item = defineComponent({
  mixins: [Wrapper],

  props: ItemProps,

  render() {
    const {
      tag,
      component,
      extraProps = {},
      index,
      source,
      slots = {},
      uniqueKey,
      slotComponent,
    } = this;
    const props = {
      ...extraProps,
      source,
      index,
    };

    return h(
      tag,
      {
        key: uniqueKey,
        attrs: {
          role: "listitem",
        },
      },
      {
        default: () => [
          slotComponent
            ? h(
                "div",
                slotComponent({ item: source, index: index, scope: props })
              )
            : h(component, {
                ...props,
                slots,
              }),
        ],
      }
    );
  },
});

// wrapping for slot
export const Slot = defineComponent({
  mixins: [Wrapper],

  props: SlotProps,

  render() {
    const { tag, uniqueKey } = this;

    return h(
      tag,
      {
        key: uniqueKey,
        attrs: {
          role: uniqueKey,
        },
      },
      { default: this.$slots.default }
    );
  },
});
