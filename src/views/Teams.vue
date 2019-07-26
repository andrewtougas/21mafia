<template>
  <div class="uk-container uk-container-expand teams">
    <form class="uk-search uk-search-default teams__search" @submit.prevent>
      <span uk-search-icon></span>
      <input class="uk-search-input" type="search" placeholder="Search teams..." v-model="search">
    </form>
    <div class="teams__output" v-if="filteredTeams.length">
      <Team :team="team" :key="team.id" v-for="team in filteredTeams" />
    </div>
    <section v-else class="uk-section uk-section-small">
      <p class="uk-text-large teams__no-results">No teams found.</p>
    </section>
  </div>
</template>

<script>
import Team from "@/components/teams/Team.vue";
import teams from "@/json/teams.json";
import settings from "@/json/settings.json";

export default {
  name: "teams",
  components: {
    Team
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    activeTeams() {
      return teams.filter(team => team.active);
    },
    filteredTeams() {
      return this.activeTeams.filter(team => team.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    }
  }
};
</script>

<style lang="scss" scoped>
.teams {
  &__search {
    width: 100%;
    margin: 40px 0 0;
  }
  &__no-results {
    font-weight: 200;
  }
}
</style>
