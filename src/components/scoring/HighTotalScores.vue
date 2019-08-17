<template>
  <section class="uk-section uk-section-small">
    <h2>Total High Scoring Games</h2>
    <div uk-grid>
      <div class="uk-width-1-3@m">
        <h4>By Year</h4>
        <table class="uk-table uk-table-striped uk-table-small">
          <thead>
            <tr>
              <th>Year</th>
              <th class="uk-text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="year.year" v-for="year in totalsByYear">
              <td>{{ year.year }}</td>
              <td class="uk-text-right">{{ year.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="uk-width-1-3@m">
        <h4>By Point Range</h4>
        <table class="uk-table uk-table-striped uk-table-small">
          <thead>
            <tr>
              <th>Range</th>
              <th class="uk-text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="range.label" v-for="range in totalsByRange">
              <td>{{ range.label }}</td>
              <td class="uk-text-right">{{ range.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="uk-width-1-3@m">
        <h4>By Team</h4>
        <table class="uk-table uk-table-striped uk-table-small">
          <thead>
            <tr>
              <th>Team</th>
              <th class="uk-text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="team.team" v-for="team in totalsByTeam">
              <td>{{ team.team }}</td>
              <td class="uk-text-right">{{ team.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import scores from "@/json/highestScores.json";
import teams from "@/json/teams.json";
import settings from "@/json/settings.json";
import _ from "lodash";

export default {
  name: "scoringHighTeamScores",
  data() {
    return {
      scores: scores
    };
  },
  computed: {
    totalsByYear() {
      const totals = [];
      const allYears = _.range(settings.startYear, settings.endYear + 1);
      allYears.forEach(year => {
        totals.push({
          year: year,
          total: this.scores.filter(score => score.year === year).length
        });
      });
      return totals;
    },
    totalsByRange() {
      const totals = [];
      const ranges = [150, 160, 170, 180, 190];
      ranges.forEach(range => {
        totals.push({
          label: "Above " + range,
          total: this.scores.filter(score => score.score >= range).length
        });
      });
      return totals;
    },
    totalsByTeam() {
      const totals = [];
      const activeTeams = teams.filter(team => team.active).map(team => team.name);
      const uniqueTeams = activeTeams.filter((team, index) => activeTeams.indexOf(team) >= index);
      uniqueTeams.forEach(team => {
        totals.push({
          team: team,
          total: this.scores.filter(score => score.team.name === team).length
        });
      });
      return _.orderBy(totals, ["total"], ["desc"]);
    }
  }
};
</script>
