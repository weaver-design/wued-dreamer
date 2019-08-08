<template>
  <div>
    <Header />
    <div class="container">
      <logo />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Header,
    Footer,
    Logo
  }
}
</script>

<style>
// 在这里写首页的样式
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
