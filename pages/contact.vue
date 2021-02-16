<template>
  <article>
    <section>
      <div class="u-flexCentering -lr">
        <h2 class="p-category__title c-flex -fxd-c">
          <span
            lang="en"
            class="u-uppercase -en">
            Contact
          </span>
          <span class="u-uppercase -ja">
            お問い合わせ
          </span>
        </h2>
      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        data-netlify="true"
        name="contact"
        method="POST"
        action="/success"
        class="contact"
      >
        <v-text-field
          :rules="nameRules"
          v-model="name"
          label="お名前"
          required
          class="contact__text"
          name="name"
        />
        <v-text-field
          :rules="emailRules"
          v-model="email"
          label="メールアドレス"
          required
          class="contact__text"
          name="email"
        />
        <v-textarea
          :rules="messageRules"
          v-model="message"
          label="お問い合わせ内容"
          required
          class="contact__text"
          name="message"
        />
        <v-btn
          :disabled="!valid"
          class="contact__submit"
          style="background-color: #00aca3;"
          type="submit"
        >
          送信
        </v-btn>
      </v-form>
    </section>
    <ReturnTopPage />
  </article>

</template>

<script>
export default {
  transition: "fade",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'お名前を記入してください。',
    ],
    email: "",
    emailRules: [
      v => !!v || '返信用のメールアドレスを記入してください。',
      v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が正しくありません。',
    ],
    message: "",
    messageRules: [
      v => !!v || 'お問い合わせ内容を記入してください。',
    ],
  }),
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;

  &__text {
    margin-bottom: 16px;
  }

  &__submit {
    display: block;
    margin: 0 auto;
    color: $primary-text-color;
  }
}
</style>
