<template>
  <header class="header">
    <div class="uk-navbar-container">
      <div class="uk-container uk-container-expand">
        <nav class="uk-navbar uk-navbar-transparent uk-light" uk-navbar="mode: click">
          <div class="uk-navbar-left">
            <router-link class="uk-navbar-item uk-logo" to="/">21 Mafia</router-link>
            <ul class="uk-navbar-nav">
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
            </ul>
            <!-- <ul class="uk-navbar-nav">
              <li>
                <a class="uk-navbar-toggle" href="#">
                  <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                </a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Scoring</a></li>
                    <li><a href="#">Teams vs Opponents</a></li>
                  </ul>
                </div>
              </li>
            </ul> -->
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <a @click="showLatestGames()">
                  <span class="uk-icon" uk-icon="icon: bell"></span>
                </a>
              </li>
              <div class="uk-navbar-item header__last-updated">Last updated: {{ lastUpdated }}</div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import settings from "@/json/settings.json";
import latestGames from "@/json/latestGames.json";

export default {
  name: "appHeader",
  computed: {
    lastUpdated() {
      return settings.updated;
    }
  },
  methods: {
    showLatestGames() {
      latestGames.forEach(game => {
        let awayDetails = `${game.away.team} ${game.away.score}`;
        let homeDetails = `${game.home.team} ${game.home.score}`;
        let awayFormat = (game.away.score > game.home.score) ? `<strong>${awayDetails}</strong>` : awayDetails;
        let homeFormat = (game.home.score > game.away.score) ? `<strong>${homeDetails}</strong>` : homeDetails;
        let message = `${game.week} - Final: ${awayFormat} vs ${homeFormat}`;
        UIkit.notification({message: message, pos: "bottom-right"});
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .uk-navbar-container {
    background: linear-gradient(to right, #ec7130, #dc6c39);
  }
  .uk-navbar {
    .uk-navbar-item.uk-logo {
      font-size: 1.25rem;
    }
  }
  &__last-updated {
    font-size: .75rem;
    text-transform: uppercase;
  }
}
</style>
