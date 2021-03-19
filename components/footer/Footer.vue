<template>
  <footer>
    <div class="footer">
      <article class="footer__copyright c-flex -ai-fe -jc-fe">
        <small lang="en">&copy; 2020 Hikaru Nakata.</small>
      </article>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 100%;
  clip-path: polygon(0 calc(100vw / 5.37), 100% 0, 100% 101%, 0 101%);
  background-color: $main-color;

  &__copyright {
    height: 100%;
    padding: .5rem 1rem;
    font-size: .75rem;
  }
}
</style>
