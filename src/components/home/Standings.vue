<template>
  <section class="uk-section uk-section-small home-standings">
    <h2>League Standings</h2>
    <div class="home-standings__wrapper">
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th @click="sort('name')">Name</th>
            <th @click="sort(`year-${year}`)" :key="year" v-for="year in years">{{ year }}</th>
            <th @click="sort('avgRank')" class="uk-text-right">Avg. Rank</th>
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
      currentSort: "avgRank",
      currentSortDir: "asc",
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

      if (this.currentSort.indexOf('year') === 0) {
        const sortYear = parseInt(this.currentSort.substr(5));
        return _.orderBy(activeTeams, function(item) {
          const sortYearArr = item.history.filter(year => year.year === sortYear);
          return (sortYearArr.length) ? sortYearArr[0].rank : 0;
        }, [this.currentSortDir]);
      }
      return _.orderBy(activeTeams, [this.currentSort], [this.currentSortDir]);
    }
  },
  methods: {
    getTeamRankForYear(teamID, year) {
      const team = this.teams.filter(team => team.id == teamID)[0];
      const yearStats = team.history.filter(stats => stats.year === year)[0];
      return (typeof yearStats !== 'undefined') ? yearStats.rank : '';
    },
    sort(col) {
      if (col === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.currentSortDir = 'asc';
      }
      this.currentSort = col;
    },
    showOffCanvas(team) {
      this.$emit('home-toggle-off-canvas', team);
    }
  }
}
</script>

<style lang="scss" scoped>
.home-standings {
  &__wrapper {
    max-width: 100%;
    overflow-x: scroll;
    table {
      width: 120%;
    }
  }
  table {
    font-size: .875rem;
    th {
      cursor: pointer;
    }
  }
}
</style>

