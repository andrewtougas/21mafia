<template>
  <div class="uk-container uk-container-expand">
    <section class="uk-section uk-section-small teams-vs-opp">
      <h2>Teams vs. Opponents</h2>
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th></th>
            <th>Brewers</th>
            <th>Doom</th>
            <th>Flush</th>
            <th>Ross</th>
            <th>Raiders</th>
            <th>Steamers</th>
            <th>Bloods</th>
            <th>Strong</th>
            <th>Pipeline</th>
            <th>Shockers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="team-name">Brewers</td>
            <td></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.brewers.doom.playedThisSeason }"><span :uk-tooltip="teams.brewers.doom.tooltip">{{ teams.brewers.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.brewers.flush.playedThisSeason }"><span :uk-tooltip="teams.brewers.flush.tooltip">{{ teams.brewers.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.brewers.ross.playedThisSeason }"><span :uk-tooltip="teams.brewers.ross.tooltip">{{ teams.brewers.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.brewers.raiders.playedThisSeason }"><span :uk-tooltip="teams.brewers.raiders.tooltip">{{ teams.brewers.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.brewers.steamers.playedThisSeason }"><span :uk-tooltip="teams.brewers.steamers.tooltip">{{ teams.brewers.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.brewers.bloods.playedThisSeason }"><span :uk-tooltip="teams.brewers.bloods.tooltip">{{ teams.brewers.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.brewers.strong.playedThisSeason }"><span :uk-tooltip="teams.brewers.strong.tooltip">{{ teams.brewers.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.brewers.pipeline.playedThisSeason }"><span :uk-tooltip="teams.brewers.pipeline.tooltip">{{ teams.brewers.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.brewers.shockers.playedThisSeason }"><span :uk-tooltip="teams.brewers.shockers.tooltip">{{ teams.brewers.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Doom</td>
            <td :class="{ unplayed: !teams.doom.brewers.playedThisSeason }"><span :uk-tooltip="teams.doom.brewers.tooltip">{{ teams.doom.brewers.record }}</span></td> <!-- Brewers -->
            <td></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.doom.flush.playedThisSeason }"><span :uk-tooltip="teams.doom.flush.tooltip">{{ teams.doom.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.doom.ross.playedThisSeason }"><span :uk-tooltip="teams.doom.ross.tooltip">{{ teams.doom.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.doom.raiders.playedThisSeason }"><span :uk-tooltip="teams.doom.raiders.tooltip">{{ teams.doom.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.doom.steamers.playedThisSeason }"><span :uk-tooltip="teams.doom.steamers.tooltip">{{ teams.doom.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.doom.bloods.playedThisSeason }"><span :uk-tooltip="teams.doom.bloods.tooltip">{{ teams.doom.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.doom.strong.playedThisSeason }"><span :uk-tooltip="teams.doom.strong.tooltip">{{ teams.doom.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.doom.pipeline.playedThisSeason }"><span :uk-tooltip="teams.doom.pipeline.tooltip">{{ teams.doom.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.doom.shockers.playedThisSeason }"><span :uk-tooltip="teams.doom.shockers.tooltip">{{ teams.doom.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Flush</td>
            <td :class="{ unplayed: !teams.flush.brewers.playedThisSeason }"><span :uk-tooltip="teams.flush.brewers.tooltip">{{ teams.flush.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.flush.doom.playedThisSeason }"><span :uk-tooltip="teams.flush.doom.tooltip">{{ teams.flush.doom.record }}</span></td> <!-- Doom -->
            <td></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.flush.ross.playedThisSeason }"><span :uk-tooltip="teams.flush.ross.tooltip">{{ teams.flush.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.flush.raiders.playedThisSeason }"><span :uk-tooltip="teams.flush.raiders.tooltip">{{ teams.flush.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.flush.steamers.playedThisSeason }"><span :uk-tooltip="teams.flush.steamers.tooltip">{{ teams.flush.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.flush.bloods.playedThisSeason }"><span :uk-tooltip="teams.flush.bloods.tooltip">{{ teams.flush.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.flush.strong.playedThisSeason }"><span :uk-tooltip="teams.flush.strong.tooltip">{{ teams.flush.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.flush.pipeline.playedThisSeason }"><span :uk-tooltip="teams.flush.pipeline.tooltip">{{ teams.flush.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.flush.shockers.playedThisSeason }"><span :uk-tooltip="teams.flush.shockers.tooltip">{{ teams.flush.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Ross</td>
            <td :class="{ unplayed: !teams.ross.brewers.playedThisSeason }"><span :uk-tooltip="teams.ross.brewers.tooltip">{{ teams.ross.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.ross.doom.playedThisSeason }"><span :uk-tooltip="teams.ross.doom.tooltip">{{ teams.ross.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.ross.flush.playedThisSeason }"><span :uk-tooltip="teams.ross.flush.tooltip">{{ teams.ross.flush.record }}</span></td> <!-- Flush -->
            <td></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.ross.raiders.playedThisSeason }"><span :uk-tooltip="teams.ross.raiders.tooltip">{{ teams.ross.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.ross.steamers.playedThisSeason }"><span :uk-tooltip="teams.ross.steamers.tooltip">{{ teams.ross.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.ross.bloods.playedThisSeason }"><span :uk-tooltip="teams.ross.bloods.tooltip">{{ teams.ross.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.ross.strong.playedThisSeason }"><span :uk-tooltip="teams.ross.strong.tooltip">{{ teams.ross.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.ross.pipeline.playedThisSeason }"><span :uk-tooltip="teams.ross.pipeline.tooltip">{{ teams.ross.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.ross.shockers.playedThisSeason }"><span :uk-tooltip="teams.ross.shockers.tooltip">{{ teams.ross.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Raiders</td>
            <td :class="{ unplayed: !teams.raiders.brewers.playedThisSeason }"><span :uk-tooltip="teams.raiders.brewers.tooltip">{{ teams.raiders.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.raiders.doom.playedThisSeason }"><span :uk-tooltip="teams.raiders.doom.tooltip">{{ teams.raiders.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.raiders.flush.playedThisSeason }"><span :uk-tooltip="teams.raiders.flush.tooltip">{{ teams.raiders.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.raiders.ross.playedThisSeason }"><span :uk-tooltip="teams.raiders.ross.tooltip">{{ teams.raiders.ross.record }}</span></td> <!-- Ross -->
            <td></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.raiders.steamers.playedThisSeason }"><span :uk-tooltip="teams.raiders.steamers.tooltip">{{ teams.raiders.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.raiders.bloods.playedThisSeason }"><span :uk-tooltip="teams.raiders.bloods.tooltip">{{ teams.raiders.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.raiders.strong.playedThisSeason }"><span :uk-tooltip="teams.raiders.strong.tooltip">{{ teams.raiders.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.raiders.pipeline.playedThisSeason }"><span :uk-tooltip="teams.raiders.pipeline.tooltip">{{ teams.raiders.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.raiders.shockers.playedThisSeason }"><span :uk-tooltip="teams.raiders.shockers.tooltip">{{ teams.raiders.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Steamers</td>
            <td :class="{ unplayed: !teams.steamers.brewers.playedThisSeason }"><span :uk-tooltip="teams.steamers.brewers.tooltip">{{ teams.steamers.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.steamers.doom.playedThisSeason }"><span :uk-tooltip="teams.steamers.doom.tooltip">{{ teams.steamers.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.steamers.flush.playedThisSeason }"><span :uk-tooltip="teams.steamers.flush.tooltip">{{ teams.steamers.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.steamers.ross.playedThisSeason }"><span :uk-tooltip="teams.steamers.ross.tooltip">{{ teams.steamers.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.steamers.raiders.playedThisSeason }"><span :uk-tooltip="teams.steamers.raiders.tooltip">{{ teams.steamers.raiders.record }}</span></td> <!-- Raiders -->
            <td></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.steamers.bloods.playedThisSeason }"><span :uk-tooltip="teams.steamers.bloods.tooltip">{{ teams.steamers.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.steamers.strong.playedThisSeason }"><span :uk-tooltip="teams.steamers.strong.tooltip">{{ teams.steamers.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.steamers.pipeline.playedThisSeason }"><span :uk-tooltip="teams.steamers.pipeline.tooltip">{{ teams.steamers.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.steamers.shockers.playedThisSeason }"><span :uk-tooltip="teams.steamers.shockers.tooltip">{{ teams.steamers.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Bloods</td>
            <td :class="{ unplayed: !teams.bloods.brewers.playedThisSeason }"><span :uk-tooltip="teams.bloods.brewers.tooltip">{{ teams.bloods.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.bloods.doom.playedThisSeason }"><span :uk-tooltip="teams.bloods.doom.tooltip">{{ teams.bloods.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.bloods.flush.playedThisSeason }"><span :uk-tooltip="teams.bloods.flush.tooltip">{{ teams.bloods.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.bloods.ross.playedThisSeason }"><span :uk-tooltip="teams.bloods.ross.tooltip">{{ teams.bloods.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.bloods.raiders.playedThisSeason }"><span :uk-tooltip="teams.bloods.raiders.tooltip">{{ teams.bloods.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.bloods.steamers.playedThisSeason }"><span :uk-tooltip="teams.bloods.steamers.tooltip">{{ teams.bloods.steamers.record }}</span></td> <!-- Steamers -->
            <td></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.bloods.strong.playedThisSeason }"><span :uk-tooltip="teams.bloods.strong.tooltip">{{ teams.bloods.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.bloods.pipeline.playedThisSeason }"><span :uk-tooltip="teams.bloods.pipeline.tooltip">{{ teams.bloods.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.bloods.shockers.playedThisSeason }"><span :uk-tooltip="teams.bloods.shockers.tooltip">{{ teams.bloods.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Strong</td>
            <td :class="{ unplayed: !teams.strong.brewers.playedThisSeason }"><span :uk-tooltip="teams.strong.brewers.tooltip">{{ teams.strong.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.strong.doom.playedThisSeason }"><span :uk-tooltip="teams.strong.doom.tooltip">{{ teams.strong.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.strong.flush.playedThisSeason }"><span :uk-tooltip="teams.strong.flush.tooltip">{{ teams.strong.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.strong.ross.playedThisSeason }"><span :uk-tooltip="teams.strong.ross.tooltip">{{ teams.strong.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.strong.raiders.playedThisSeason }"><span :uk-tooltip="teams.strong.raiders.tooltip">{{ teams.strong.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.strong.steamers.playedThisSeason }"><span :uk-tooltip="teams.strong.steamers.tooltip">{{ teams.strong.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.strong.bloods.playedThisSeason }"><span :uk-tooltip="teams.strong.bloods.tooltip">{{ teams.strong.bloods.record }}</span></td> <!-- Bloods -->
            <td></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.strong.pipeline.playedThisSeason }"><span :uk-tooltip="teams.strong.pipeline.tooltip">{{ teams.strong.pipeline.record }}</span></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.strong.shockers.playedThisSeason }"><span :uk-tooltip="teams.strong.shockers.tooltip">{{ teams.strong.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Pipeline</td>
            <td :class="{ unplayed: !teams.pipeline.brewers.playedThisSeason }"><span :uk-tooltip="teams.pipeline.brewers.tooltip">{{ teams.pipeline.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.pipeline.doom.playedThisSeason }"><span :uk-tooltip="teams.pipeline.doom.tooltip">{{ teams.pipeline.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.pipeline.flush.playedThisSeason }"><span :uk-tooltip="teams.pipeline.flush.tooltip">{{ teams.pipeline.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.pipeline.ross.playedThisSeason }"><span :uk-tooltip="teams.pipeline.ross.tooltip">{{ teams.pipeline.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.pipeline.raiders.playedThisSeason }"><span :uk-tooltip="teams.pipeline.raiders.tooltip">{{ teams.pipeline.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.pipeline.steamers.playedThisSeason }"><span :uk-tooltip="teams.pipeline.steamers.tooltip">{{ teams.pipeline.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.pipeline.bloods.playedThisSeason }"><span :uk-tooltip="teams.pipeline.bloods.tooltip">{{ teams.pipeline.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.pipeline.strong.playedThisSeason }"><span :uk-tooltip="teams.pipeline.strong.tooltip">{{ teams.pipeline.strong.record }}</span></td> <!-- Strong -->
            <td></td> <!-- Pipeline -->
            <td :class="{ unplayed: !teams.pipeline.shockers.playedThisSeason }"><span :uk-tooltip="teams.pipeline.shockers.tooltip">{{ teams.pipeline.shockers.record }}</span></td> <!-- Shockers -->
          </tr>
          <tr>
            <td class="team-name">Shockers</td>
            <td :class="{ unplayed: !teams.shockers.brewers.playedThisSeason }"><span :uk-tooltip="teams.shockers.brewers.tooltip">{{ teams.shockers.brewers.record }}</span></td> <!-- Brewers -->
            <td :class="{ unplayed: !teams.shockers.doom.playedThisSeason }"><span :uk-tooltip="teams.shockers.doom.tooltip">{{ teams.shockers.doom.record }}</span></td> <!-- Doom -->
            <td :class="{ unplayed: !teams.shockers.flush.playedThisSeason }"><span :uk-tooltip="teams.shockers.flush.tooltip">{{ teams.shockers.flush.record }}</span></td> <!-- Flush -->
            <td :class="{ unplayed: !teams.shockers.ross.playedThisSeason }"><span :uk-tooltip="teams.shockers.ross.tooltip">{{ teams.shockers.ross.record }}</span></td> <!-- Ross -->
            <td :class="{ unplayed: !teams.shockers.raiders.playedThisSeason }"><span :uk-tooltip="teams.shockers.raiders.tooltip">{{ teams.shockers.raiders.record }}</span></td> <!-- Raiders -->
            <td :class="{ unplayed: !teams.shockers.steamers.playedThisSeason }"><span :uk-tooltip="teams.shockers.steamers.tooltip">{{ teams.shockers.steamers.record }}</span></td> <!-- Steamers -->
            <td :class="{ unplayed: !teams.shockers.bloods.playedThisSeason }"><span :uk-tooltip="teams.shockers.bloods.tooltip">{{ teams.shockers.bloods.record }}</span></td> <!-- Bloods -->
            <td :class="{ unplayed: !teams.shockers.strong.playedThisSeason }"><span :uk-tooltip="teams.shockers.strong.tooltip">{{ teams.shockers.strong.record }}</span></td> <!-- Strong -->
            <td :class="{ unplayed: !teams.shockers.pipeline.playedThisSeason }"><span :uk-tooltip="teams.shockers.pipeline.tooltip">{{ teams.shockers.pipeline.record }}</span></td> <!-- Pipeline -->
            <td></td> <!-- Shockers -->
          </tr>
        </tbody>
      </table>

      <div class="uk-card uk-card-secondary uk-card-body">
        <h3 class="uk-card-title">Info</h3>
        <ul>
          <li>Record depicted for left team versus top team</li>
          <li>Records in <span class="unplayed">green</span> denote teams that have not played each other yet this season</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import rawTeamsVsOpponents from "@/json/teamsVsOpponents.json";

export default {
  name: "teamsVsOpponents",
  computed: {
    teams() {
      const teams = rawTeamsVsOpponents;
      for (const teamName in teams) {
        for (const opponentName in teams[teamName]) {
          let winPercentage = (teams[teamName][opponentName].wins / (teams[teamName][opponentName].wins + teams[teamName][opponentName].losses)).toFixed(3);
          winPercentage = (winPercentage.charAt(0) == '0') ? winPercentage.substring(1) : winPercentage;
          teams[teamName][opponentName].winPercentage = winPercentage;
          teams[teamName][opponentName].tooltip = `title: ${winPercentage}; pos: top-right`;
          teams[teamName][opponentName].record = `${teams[teamName][opponentName].wins}-${teams[teamName][opponentName].losses}`;
        }
      }
      return rawTeamsVsOpponents;
    }
  }
};
</script>

<style lang="scss" scoped>
.teams-vs-opp td:not(.team-name),
.teams-vs-opp th {
  text-align: right;
}
.team-name {
  font-size: .875rem;
  font-weight: 400;
  color: #999;
  text-transform: uppercase;
}
.unplayed {
  color: #32d296;
}
</style>

