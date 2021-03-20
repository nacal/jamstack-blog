<template>
  <div class="p-share u-flexCentering -lr c-flex -fxd-c">
    <h2
      class="p-share__title u-uppercase"
      lang="en">
      Share
    </h2>
    <ul class="p-shareButton c-flex">
      <li class="p-shareButton__item -twitter">
        <a
          :href="twitterUrl()"
          class=" u-flexCentering -fd"
          target="_blank"
          aria-label="Twitterで共有">
          <fa
            :icon="faTwitter"
            aria-label="Twitterのアイコン"
            class="p-sns__item -share" />
        </a>
      </li>
      <li class="p-shareButton__item -facebook">
        <a
          :href="facebookUrl()"
          class=" u-flexCentering -fd"
          target="_blank"
          aria-label="Facebookで共有">
          <fa
            :icon="faFacebookF"
            aria-label="Facebookのアイコン"
            class="p-sns__item -share" />
        </a>
      </li>
      <li class="p-shareButton__item -copy">
        <a
          class=" u-flexCentering -fd"
          target="_blank"
          aria-label="URLをクリップボードにコピー"
          @click="writeToClipboard(url)">
          <fa
            :icon="faLink"
            aria-label="Linkのアイコン"
            class="p-sns__item -share" />
        </a>
        <p class="p-sns__message">{{ message }}</p>
      </li>
    </ul>
  </div>

</template>

<script>
import { faTwitter, faFacebookF} from "@fortawesome/free-brands-svg-icons";
import { faLink} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Share",
  data() {
    return {
      url: `https://www.nkteck.jp${this.$route.path}`,
      twitter_url: "https://twitter.com/intent/tweet?url={0}",
      facebook_url: "https://www.facebook.com/dialog/share?app_id=687848492118283&href={0}",
      message: ''
    };
  },
  computed: {
    faTwitter() {
      return faTwitter;
    },
    faFacebookF() {
      return faFacebookF;
    },
    faLink() {
      return faLink;
    },
  },
  methods: {
    formatByArr(msg) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k];
      });
    },
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url);
    },
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url);
    },
    writeToClipboard(text) {
      navigator.clipboard.writeText(text).catch((e) => {
        console.error(e)
      }),
      this.message = "copied!";
    },
  },
}
</script>
