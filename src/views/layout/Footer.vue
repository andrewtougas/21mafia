<template>
  <footer class="footer">
    <div class="uk-section uk-section-secondary uk-section-small">
      <div class="uk-container uk-container-expand">
        <h3>21 Mafia</h3>
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <ul class="footer__links">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/teams">Teams</router-link>
              </li>
              <li>
                <router-link to="/history">History</router-link>
              </li>
              <li>
                <router-link to="/scoring">Scoring</router-link>
              </li>
              <li>
                <router-link to="/teams-vs-opponents">Teams vs Opponents</router-link>
              </li>
              <li>
                <a href="/Finger_Puppet_Mafia_By-Laws_v2019.pdf" target="_blank">21 Mafia By-laws <span uk-icon="arrow-right"></span></a>
              </li>
            </ul>
          </div>
          <div class="uk-flex-bottom footer__copyright">
            <p>
              Developed by <a href="#">andrewtougas.com</a> 
              <span class="uk-label uk-margin-small-left">{{ version }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "appFooter",
  data() {
    return {
      version: process.env.VUE_APP_VERSION
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .uk-section-secondary {
    background: linear-gradient(to right, #313175, #1c1c40);
  }
  &__links {
    list-style: none;
    padding-left: 0;
  }
  &__copyright {
    p {
      text-align: right;
      .uk-label {
        background: #1e87f0;
        color: #fff;
      }
    }
  }
}
</style>
