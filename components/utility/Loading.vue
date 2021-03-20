<template>
  <div>
    <transition name="loading">
      <div
        v-show="loading"
        class="fullScreen"/>
    </transition>
    <transition name="loading-logo">
      <img
        v-show="loadingLogo"
        src="@/assets/images/common/logo-primary.png"
        srcset="
              @/assets/images/common/logo-primary.png    1x,
              @/assets/images/common/logo-primary@2x.png 2x
            "
        alt="NKTech"
        class="loading__logo"
      >
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: true,
      loadingLogo: false,
    };
  },
  mounted() {
    this.loadingLogo = true
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
        this.loadingLogo = false
      },(2000)
    )
    })
  }
}
</script>

<style lang="scss">
.fullScreen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: $main-color;
}

.loading__logo {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 320px;
  max-width: 80%;
  transform: translate(-50%, -50%);
}

.loading-logo-enter-active {
  transition: all 1s ease-out;
}

.loading-leave-active {
  transition: all .5s ease-out;
}

.loading-logo-leave-active {
  transition: all .2s ease-out;
}

.loading-logo-enter {
  opacity: 0;
}

.loading-logo-leave-to {
  opacity: 0;
}

.loading-leave-to {
  transform: translateY(-100%);
}
</style>
