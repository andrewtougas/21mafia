<template>
  <div id="app">
    <div class="uk-offcanvas-content">
      <Header />
      <main>
        <router-view @app-toggle-off-canvas="toggleOffCanvas" />
      </main>
      <Footer />
    </div>
    <OffCanvas :team="offCanvasTeam" />
  </div>
</template>

<script>
import Header from '@/views/layout/Header.vue';
import Footer from '@/views/layout/Footer.vue';
import OffCanvas from '@/components/OffCanvas.vue';

export default {
  name: "app",
  components: {
    Header,
    Footer,
    OffCanvas
  },
  data() {
    return {
      offCanvasTeam: {}
    }
  },
  methods: {
    toggleOffCanvas(team) {
      this.offCanvasTeam = team;
    }
  }
}
</script>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  font-weight: 200;
}
.uk-notification-message {
  background: #1e87f0;
  color: #fff;
  font-size: .825rem;
  font-weight: 200;
}
</style>
