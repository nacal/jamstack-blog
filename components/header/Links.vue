<template>
  <div class="links c-flex">
    <Icon
      v-for="(icon, index) in icons"
      :key="index"
      :fa="icon.fa"
      :class="'-main'"
      :link="icon.link"
      :aria-label="icon.label" />
    <nuxt-link
      to="/contact"
      class="links__item"
    >
      <fa
        :icon="faEnvelope"
        aria-label="お問い合わせのアイコン"
      />
    </nuxt-link>
  </div>
</template>

<script>
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/utility/Icon.vue";

export default {
  components: {
    Icon,
  },
  data: function() {
    return {
      icons: [
        {
          fa: faTwitter,
          link: "https://twitter.com/nkthkr_",
          label: "Twitterのアイコン"
        },
        {
          fa: faGithub,
          link: "https://github.com/nkthkr",
          label: "GitHubのアイコン"
        },
      ]
    };
  },
    computed: {
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
    faEnvelope() {
      return faEnvelope;
    },
  },
}
</script>

<style lang="scss" scoped>
.links {
  &__item {
    margin-left: .5rem;
    font-size: 1.5rem;
    line-height: 1;
    transition: .25s all ease-out 0s;

    &:hover {
      color: $icon-hover-color;
      transition: .25s all ease-out 0s;
    }

    @include mq(tab) {
      margin-left: 1rem;
    }
  }
}
</style>
