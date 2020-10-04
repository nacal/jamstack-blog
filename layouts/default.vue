<template>
  <div class="p-body">
    <header class="l-header">
      <div class="p-header">
        <div class="l-container">
          <h1 class="p-header__title p-blogTitle u-flexCentering">
            <!-- <span class="u-screenReaderText" lang="en">Blog title</span> -->
            <a href="./">
              <p class="p-blogTitle__text" lang="en">NKTech</p>
            </a>
          </h1>
        </div>
        <!-- /.l-container -->
      </div>
      <!-- /.p-header -->
    </header>
    <main class="l-container l-main">
      <nuxt />
    </main>
    <footer class="l-footer">
      <div class="p-footer">
        <article class="p-footer__copyright c-copyright u-flexCentering">
          <small lang="en">&copy; 2020 Hikaru Nakata.</small>
        </article>
      </div>
    </footer>
  </div>
</template>
