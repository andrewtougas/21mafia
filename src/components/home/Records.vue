<template>
  <section class="uk-section uk-section-small home-records">
    <h2>League Records</h2>
    <div class="home-records__wrapper">
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>Name</th>
            <th :key="year" v-for="year in years">{{ year }}</th>
            <th>Total</th>
            <th class="uk-text-right">Win %</th>
            <th class="uk-text-right" uk-tooltip="title: Points For; pos: top-right">PF</th>
            <th class="uk-text-right" uk-tooltip="title: Points Against; pos: top-right">PA</th>
            <th class="uk-text-right" uk-tooltip="title: Points Differential; pos: top-right">+/-</th>
            <th class="uk-text-right" uk-tooltip="title: Playoff Appearances; pos: top-right">PlA</th>
            <th class="uk-text-right">Avg. Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="team.id" v-for="team in compiledStats">
            <td>
              <a href="#">{{ team.name }}</a>
            </td>
            <td :key="year" v-for="year in years">
              {{ getTeamRecordForYear(team.id, year) }}
            </td>
            <td>{{ `${team.total.wins}-${team.total.losses}` }}</td>
            <td class="uk-text-right">{{ team.winPercentage}} </td>
            <td class="uk-text-right">{{ team.total.ptsFor.toFixed(1) }}</td>
            <td class="uk-text-right">{{ team.total.ptsAgainst.toFixed(1) }}</td>
            <td class="uk-text-right" :class="{ 'uk-text-success': team.ptsDiff > 0, 'uk-text-danger': team.ptsDiff < 0 }">
              {{ (team.ptsDiff > 0) ? `+${team.ptsDiff}` : team.ptsDiff }}
            </td>
            <td class="uk-text-right">{{ team.playoffAppearances }}</td>
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
  name: "homeRecords",
  props: ["years"],
  data() {
    return {
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
        const avgRank = (totalRank / team.history.length).toFixed(3);

        // Calculate points differential
        const ptsDiff = (teamTotals.ptsFor - teamTotals.ptsAgainst).toFixed(1);

        // Add new compiled stats to team object
        team.total = teamTotals;
        team.winPercentage = winPercentage;
        team.playoffAppearances = playoffAppearances;
        team.avgRank = avgRank;
        team.ptsDiff = ptsDiff;
      });
      return _.orderBy(activeTeams, ['winPercentage'], ['desc']);
    }
  },
  methods: {
    getTeamRecordForYear(teamID, year) {
      const team = this.teams.filter(team => team.id == teamID)[0];
      const yearStats = team.history.filter(stats => stats.year === year)[0];
      return (typeof yearStats !== 'undefined') ? `${yearStats.wins}-${yearStats.losses}` : '';
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
      width: 150%;
    }
  }
  table {
    font-size: .875rem;
  }
}
</style>
