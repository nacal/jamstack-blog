<template>
  <div class="p-body">
    <header class="l-header">
      <div class="p-header">
        <div class="l-container u-flexCentering -tb">
          <h1 class="p-header__title">
            <!-- <span class="u-screenReaderText" lang="en">Blog title</span> -->
            <span class="u-screenReaderText" lang="en">NKTech</span>
            <a href="./" class="c-logo c-logo--primary">
              <img
                src="../assets/images/common/logo-primary.png"
                srcset="
                  ../assets/images/common/logo-primary.png    1x,
                  ../assets/images/common/logo-primary@2x.png 2x
                "
                alt="NKTech"
              />
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
        <article class="p-footer__copyright c-copyright u-flexCentering -fd">
          <small lang="en">&copy; 2020 Hikaru Nakata.</small>
        </article>
      </div>
    </footer>
  </div>
</template>
