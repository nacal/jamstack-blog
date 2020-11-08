<template>
  <div>
    <transition name="button">
      <button v-show="buttonActive" @click="returnTop">
        <span class="u-screenReaderText">Topへ戻る</span>
      </button>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0
    };
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
  }
});
</script>

<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity 0.5s;
}
.button-enter,
.button-leave-to {
  opacity: 0;
}

button {
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  background: #5bc8ac;
  appearance: none;
  cursor: pointer;
  border-style: outset;
  // border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  // border-image: initial;
}
</style>
