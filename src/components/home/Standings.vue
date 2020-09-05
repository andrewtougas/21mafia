<template>
  <section class="uk-section uk-section-small home-standings">
    <h2>League Standings</h2>
    <div>
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>Name</th>
            <th :key="year" v-for="year in years">{{ year }}</th>
            <th class="uk-text-right">Avg. Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="team.id" v-for="team in compiledStats">
            <td>
              <a href="#off-canvas" @click="showOffCanvas(team)" uk-toggle>{{ team.name }}</a>
            </td>
            <td :key="year" v-for="year in years">
              {{ getTeamRankForYear(team.id, year) }}
            </td>
            <td class="uk-text-right">{{ team.avgRank }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import teams from "@/json/teams.json";
import _ from "lodash";

export default {
  name: "homeStandings",
  props: ["years"],
  data() {
    return {
      teams: teams
    }
  },
  computed: {
    activeTeams() {
      return this.teams.filter(team => team.active);
    },
    compiledStats() {
      // Filter just active teams
      const activeTeams = this.teams.filter(team => team.active);
      activeTeams.forEach(team => {
        // Calculate average rank for each team
        const totalRank = team.history.reduce((acc, cur) => acc + cur.rank, 0);
        const avgRank = (totalRank / team.history.length).toFixed(3);
        team.avgRank = avgRank;
      });
      return _.orderBy(activeTeams, ['avgRank'], ['asc']);
    }
  },
  methods: {
    getTeamRankForYear(teamID, year) {
      const team = this.teams.filter(team => team.id == teamID)[0];
      const yearStats = team.history.filter(stats => stats.year === year)[0];
      return (typeof yearStats !== 'undefined') ? yearStats.rank : '';
    },
    showOffCanvas(team) {
      this.$emit('home-toggle-off-canvas', team);
    }
  }
}
</script>

<style lang="scss" scoped>
.home-standings {
  table {
    font-size: .875rem;
  }
}
</style>

