<template>
  <section class="uk-section uk-section-small team">
    <h3 class="team__name">{{ compiledTeam.name }}</h3>
    <p class="team__meta">
      <span class="team__meta--abbr">{{ compiledTeam.abbr }}</span>
      <span class="team__meta--owners">{{ compiledTeam.owners.map(owner => owner.name).join(', ') }}</span>
    </p>
    <table class="uk-table uk-table-striped uk-table-small">
      <thead>
        <tr>
          <th>Year</th>
          <th>Wins</th>
          <th>Losses</th>
          <th class="uk-text-right">Win %</th>
          <th class="uk-text-right">Rank</th>
          <th class="uk-text-right" uk-tooltip="title: Playoff Appearance; pos: top-right">PlA</th>
          <th class="uk-text-right" uk-tooltip="title: Points For; pos: top-right">PF</th>
          <th class="uk-text-right" uk-tooltip="title: Points Against; pos: top-right">PA</th>
          <th class="uk-text-right" uk-tooltip="title: Points Differential; pos: top-right">+/-</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="stats.year" v-for="stats in compiledTeam.history">
          <td>{{ stats.year }}</td>
          <td>{{ stats.wins }}</td>
          <td>{{ stats.losses }}</td>
          <td class="uk-text-right">{{ stats.winPercentage }}</td>
          <td class="uk-text-right">{{ stats.rank }}</td>
          <td class="uk-text-right"><span v-if="stats.playoffs" uk-icon="icon: check;"></span></td>
          <td class="uk-text-right">{{ stats.ptsFor }}</td>
          <td class="uk-text-right">{{ stats.ptsAgainst }}</td>
          <td class="uk-text-right" :class="{ 'uk-text-success': stats.ptsDiff > 0, 'uk-text-danger': stats.ptsDiff < 0 }">
            {{ (stats.ptsDiff > 0) ? `+${stats.ptsDiff}` : stats.ptsDiff }}
          </td>
        </tr>
        <tr class="subtotals">
          <td>Totals</td>
          <td>{{ compiledTeam.total.wins }}</td>
          <td>{{ compiledTeam.total.losses }}</td>
          <td class="uk-text-right">{{ compiledTeam.winPercentage }}</td>
          <td class="uk-text-right">{{ compiledTeam.avgRank }}</td>
          <td class="uk-text-right">{{ compiledTeam.playoffAppearances }}</td>
          <td class="uk-text-right">{{ compiledTeam.total.ptsFor }}</td>
          <td class="uk-text-right">{{ compiledTeam.total.ptsAgainst }}</td>
          <td class="uk-text-right" :class="{ 'uk-text-success': compiledTeam.ptsDiff > 0, 'uk-text-danger': compiledTeam.ptsDiff < 0 }">
            {{ (compiledTeam.ptsDiff > 0) ? `+${compiledTeam.ptsDiff}` : compiledTeam.ptsDiff }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "teamsTeam",
  props: ["years", "team"],
  computed: {
    compiledTeam() {
      const teamStats = {...this.team};
      console.log(teamStats);
      teamStats.history.forEach(year => {
        // Calculate yearly win percentage
        let yearWinPercentage = (year.wins / (year.wins + year.losses)).toFixed(3);
        yearWinPercentage = (yearWinPercentage.charAt(0) == '0') ? yearWinPercentage.substring(1) : yearWinPercentage;
        year.winPercentage = yearWinPercentage;

        // Calculate points differential
        let yearPtsDiff = (year.ptsFor - year.ptsAgainst).toFixed(1);
        year.ptsDiff = yearPtsDiff;
      });

      // Calculate total wins, losses, rank for this team
      const teamTotals = teamStats.history.reduce((acc, cur) => {
        return {
          wins: acc.wins + cur.wins,
          losses: acc.losses + cur.losses,
          ptsFor: acc.ptsFor + cur.ptsFor,
          ptsAgainst: acc.ptsAgainst + cur.ptsAgainst
        }
      });

      // Calculate overall win percentage for this team
      let winPercentage = (teamTotals.wins / (teamTotals.wins + teamTotals.losses)).toFixed(3);
      winPercentage = (winPercentage.charAt(0) == '0') ? winPercentage.substring(1) : winPercentage;

      // Calculate total playoff appearances for this team
      const playoffAppearances = teamStats.history.filter(year => year.playoffs).length;

      // Calculate average rank for this team
      const totalRank = teamStats.history.reduce((acc, cur) => acc + cur.rank, 0);
      const avgRank = (totalRank / teamStats.history.length).toFixed(3);

      // Calculate overall points differential for this team
      const ptsDiff = (teamTotals.ptsFor - teamTotals.ptsAgainst).toFixed(1);

      // Add new compiled stats to this team object
      teamStats.total = teamTotals;
      teamStats.winPercentage = winPercentage;
      teamStats.playoffAppearances = playoffAppearances;
      teamStats.avgRank = avgRank;
      teamStats.ptsDiff = ptsDiff;

      return teamStats;
    }
  },
  methods: {
    calculateWinPercentage(wins, losses) {
      let winPercentage = (wins / (wins + losses)).toFixed(3);
      return (winPercentage.charAt(0) == '0') ? winPercentage.substring(1) : winPercentage;
    },
    calculatePtsDiff(ptsFor, ptsAgainst) {
      return (ptsFor - ptsAgainst).toFixed(1);
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  &__name {
    margin: 0;
  }
  &__meta {
    margin: 0;
    font-size: .9rem;
    color: #999;
    &--abbr {
      font-weight: 700;
      text-transform: uppercase;
    }
    &--owners {
      font-weight: 200;
      padding: 0 10px;
    }
  }
  table {
    tr.subtotals {
      background: #222;
      color: #fff;
    }
  }
}
</style>
