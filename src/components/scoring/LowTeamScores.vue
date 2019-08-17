<template>
  <section class="uk-section uk-section-small low-scores">
    <h2>Lowest Team Scores</h2>
    <div class="low-scores__wrapper">
      <table class="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th class="uk-text-right">Points</th>
            <th class="uk-text-right">Year</th>
            <th class="uk-text-right">Week</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(score, index) in orderedScores">
            <td>{{ index + 1 }}</td>
            <td>{{ score.team.name }}</td>
            <td class="uk-text-right">{{ score.score }}</td>
            <td class="uk-text-right">{{ score.year }}</td>
            <td class="uk-text-right">{{ score.week }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import scores from "@/json/lowestScores.json";
import _ from "lodash";

export default {
  name: "scoringLowTeamScores",
  data() {
    return {
      scores: scores
    };
  },
  computed: {
    orderedScores() {
      return _.orderBy(this.scores, ["score"], ["asc"]);
    }
  }
};
</script>

<style lang="scss">
.low-scores {
  &__wrapper {
    max-height: 500px;
    overflow-y: scroll;
  }
}
</style>
