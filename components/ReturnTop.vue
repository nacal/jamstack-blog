<template>
  <div>
    <transition name="button">
      <button
        v-show="buttonActive"
        class="p-returnTop"
        @click="returnTop">
        <fa
          :icon="faAngleUp"
          class="p-returnTop__icon" />
        <span class="u-screenReaderText">Topへ戻る</span>
      </button>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0
    };
  },
  computed: {
    faAngleUp() {
      return faAngleUp;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollWindow() {
      const top = 1000;
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    }
  },
});
</script>

<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity .5s;
}

.button-enter,
.button-leave-to {
  opacity: 0;
}
</style>
