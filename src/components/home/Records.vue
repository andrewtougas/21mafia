<template>
  <section class="uk-section uk-section-small home-records">
    <h2>League Records</h2>
    <div class="home-records__wrapper">
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th @click="sort('name')">Name</th>
            <th @click="sort(`year-${year}`)" :key="year" v-for="year in years">{{ year }}</th>
            <th @click="sort('total.wins')">Total</th>
            <th @click="sort('winPercentage')" class="uk-text-right">Win %</th>
            <th @click="sort('total.ptsFor')" class="uk-text-right"><span uk-tooltip="title: Points For; pos: top-right">PF</span></th>
            <th @click="sort('total.ptsAgainst')" class="uk-text-right"><span uk-tooltip="title: Points Against; pos: top-right">PA</span></th>
            <th @click="sort('ptsDiff')" class="uk-text-right"><span uk-tooltip="title: Points Differential; pos: top-right">+/-</span></th>
            <th @click="sort('playoffAppearances')" class="uk-text-right"><span uk-tooltip="title: Playoff Appearances; pos: top-right">PlA</span></th>
            <th @click="sort('avgRank')" class="uk-text-right">Avg. Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="team.id" v-for="team in compiledStats">
            <td>
              <a href="#off-canvas" @click="showOffCanvas(team)" uk-toggle>{{ team.name }}</a>
            </td>
            <td :key="year" v-for="year in years">
              {{ getTeamRecordForYear(team.id, year) }}
            </td>
            <td>{{ `${team.total.wins}-${team.total.losses}` }}</td>
            <td class="uk-text-right">{{ team.winPercentage}} </td>
            <td class="uk-text-right">{{ team.total.ptsFor.toFixed(1) }}</td>
            <td class="uk-text-right">{{ team.total.ptsAgainst.toFixed(1) }}</td>
            <td class="uk-text-right" :class="{ 'uk-text-success': team.ptsDiff > 0, 'uk-text-danger': team.ptsDiff < 0 }">
              {{ (team.ptsDiff > 0) ? `+${team.ptsDiff.toFixed(1)}` : team.ptsDiff.toFixed(1) }}
            </td>
            <td class="uk-text-right">{{ team.playoffAppearances }}</td>
            <td class="uk-text-right">{{ team.avgRank.toFixed(3) }}</td>
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
  name: "homeRecords",
  props: ["years"],
  data() {
    return {
      currentSort: "winPercentage",
      currentSortDir: "desc",
      teams: teams
    }
  },
  computed: {
    compiledStats() {
      // Filter just active teams
      const activeTeams = this.teams.filter(team => team.active);
      activeTeams.forEach(team => {
        // Calculate total wins, losses, rank for each team
        const teamTotals = team.history.reduce((acc, cur) => {
          return {
            wins: acc.wins + cur.wins,
            losses: acc.losses + cur.losses,
            ptsFor: acc.ptsFor + cur.ptsFor,
            ptsAgainst: acc.ptsAgainst + cur.ptsAgainst
          }
        });

        // Calculate win percentage for each team
        let winPercentage = (teamTotals.wins / (teamTotals.wins + teamTotals.losses)).toFixed(3);
        winPercentage = (winPercentage.charAt(0) == '0') ? winPercentage.substring(1) : winPercentage;

        // Calculate total playoff appearances for each team
        const playoffAppearances = team.history.filter(year => year.playoffs).length;

        // Calculate average rank for each team
        const totalRank = team.history.reduce((acc, cur) => acc + cur.rank, 0);
        const avgRank = totalRank / team.history.length;

        // Calculate points differential
        const ptsDiff = teamTotals.ptsFor - teamTotals.ptsAgainst;

        // Add new compiled stats to team object
        team.total = teamTotals;
        team.winPercentage = winPercentage;
        team.playoffAppearances = playoffAppearances;
        team.avgRank = avgRank;
        team.ptsDiff = ptsDiff;
      });

      if (this.currentSort.indexOf('year') === 0) {
        const sortYear = parseInt(this.currentSort.substr(5));
        return _.orderBy(activeTeams, function(item) {
          const sortYearArr = item.history.filter(year => year.year === sortYear);
          return (sortYearArr.length) ? sortYearArr[0].wins : 0;
        }, [this.currentSortDir]);
      }
      return _.orderBy(activeTeams, [this.currentSort], [this.currentSortDir]);
    }
  },
  methods: {
    getTeamRecordForYear(teamID, year) {
      const team = this.teams.filter(team => team.id == teamID)[0];
      const yearStats = team.history.filter(stats => stats.year === year)[0];
      return (typeof yearStats !== 'undefined') ? `${yearStats.wins}-${yearStats.losses}` : '';
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

<style scoped lang="scss">
.home-records {
  &__wrapper {
    max-width: 100%;
    overflow-x: scroll;
    table {
      width: 160%;
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
