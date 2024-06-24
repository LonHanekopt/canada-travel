<template>
  <CookiesModal/>
  <!-- <h1>{{ $t('message') }}</h1> -->
  <nav><NavView/></nav>
  <router-view></router-view>
  <footer><FooterView/></footer>
</template>

<script>
import NavView from './components/NavView.vue'
import FooterView from './components/FooterView.vue'
import CookiesModal from './components/modals/cookiesModal.vue';


export default {
  name: 'App',
  components: {
    NavView,
    FooterView,
    CookiesModal
  }
}
</script>

<style>
</style>
