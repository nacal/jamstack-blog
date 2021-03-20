<template>
  <transition name="button">
    <button
      v-show="buttonActive"
      class="returnTop"
      aria-label="Topへ戻る"
      @click="returnTop" >
      <fa
        :icon="faAngleUp"
        class="returnTop__icon"
        aria-label="上矢印のアイコン" />
    </button>
  </transition>
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

.returnTop {
  position: fixed;
  right: 16px;
  bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  cursor: pointer;
  background-color: $main-color;
  border-radius: 50%;
  transition: .2s all ease-out 0s;

  @include mq(tab) {
    right: 32px;
    bottom: 32px;
  }

  &__icon {
    font-size: 2rem;
  }

  &:hover {
    transition: .5s all ease-out 0s;
    transform: scale(.9);
  }
}
</style>
