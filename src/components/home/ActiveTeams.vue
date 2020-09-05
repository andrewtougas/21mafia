<template>
  <section class="uk-section uk-section-small home-active-teams">
    <div class="uk-card uk-card-secondary uk-card-small uk-card-body">
      <h2 class="uk-card-title">Teams</h2>
        <ul uk-accordion>
          <li :key="team.id" v-for="team in activeTeams">
            <a class="uk-accordion-title" href="">{{ team.name }}</a>
            <div class="uk-accordion-content">
              <small>{{ team.owners.map(owner => owner.name).join(', ') }}</small>
              <a href="#off-canvas" class="uk-icon-button uk-float-right" @click="showOffCanvas(team)" uk-icon="icon: more; ratio: 0.7;" uk-toggle></a>
            </div>
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
import teams from "@/json/teams.json";

export default {
  name: "ActiveTeams",
  data() {
    return {
      teams: teams
    }
  },
  computed: {
    activeTeams() {
      return this.teams.filter(team => team.active);
    }
  },
  methods: {
    showOffCanvas(team) {
      this.$emit('home-toggle-off-canvas', team);
    }
  }
}
</script>

<style scoped lang="scss">
.home-active-teams {
  .uk-accordion-title {
    font-size: 1rem;
  }
  .uk-accordion-content {
    .uk-icon-button {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
