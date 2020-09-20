<template>
  <div>
    <header>
      <h1 class="title">いい感じのSPAブログ</h1>
    </header>
    <main class="container">
      <nuxt />
    </main>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: 'Source Sans Pro', 游ゴシック体, 'Yu Gothic', YuGothic,
  'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo,
  sans-serif;
}
h1,
h2,
h3 {
  font-weight: normal;
}
.title {
  margin: 100px 0 30px;
  color: #35495e;
  text-align: center;
}
.container {
  margin: 0 auto;
  width: 80%;
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(2000px);
}
.slide-left-enter-active {
  transition: all .3s linear;
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-2000px);
}
.slide-left-leave-active {
  transition: all .3s linear;
}

</style>
