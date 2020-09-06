<template>
  <div id="off-canvas" uk-offcanvas="overlay: true; mode: push">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <h3 style="margin-bottom: 0;">{{ team.name }}</h3>
      <h4 class="uk-text-muted" style="margin-top: 0;">{{ team.abbr }}</h4>
      <ul class="uk-list uk-list-divider">
        <li>
          <span class="uk-text-light">Owner(s):</span>
          {{ teamOwners.join(', ') }}
        </li>
        <li>
          <span class="uk-text-light">All-Time Record:</span>
          {{ `${allTimeRecord.wins}-${allTimeRecord.losses}` }}
        </li>
        <li>
          <span class="uk-text-light">Avg. Rank:</span>
          {{ avgRank }}
        </li>
        <li>
          <span class="uk-text-light"># of Championships:</span>
          {{ numOfChampionships }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffCanvas",
  props: ["team"],
  computed: {
    teamOwners() {
      if (this.team && this.team.owners) {
        return this.team.owners.map(owner => owner.name);
      }
      return [];
    },
    allTimeRecord() {
      if (this.team && this.team.history) {
        return this.team.history.reduce((acc, cur) => {
          return {
            wins: acc.wins + cur.wins,
            losses: acc.losses + cur.losses
          }
        });
      }
      return {wins: 0, losses: 0};
    },
    avgRank() {
      if (this.team && this.team.history) {
        const totalRank = this.team.history.reduce((acc, cur) => acc + cur.rank, 0);
        return (totalRank / this.team.history.length).toFixed(3);
      }
      return 0;
    },
    numOfChampionships() {
      if (this.team && this.team.history) {
        return this.team.history.filter(year => year.rank === 1).length;
      }
      return 0;
    }
  }
};
</script>
