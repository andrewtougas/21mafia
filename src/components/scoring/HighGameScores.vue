<template>
  <section class="uk-section uk-section-small">
    <h2>Highest Game Scores</h2>
    <table class="uk-table uk-table-striped uk-table-small">
      <thead>
        <tr>
          <th>Winning Team</th>
          <th class="uk-text-right">Score</th>
          <th>Losing Team</th>
          <th class="uk-text-right">Score</th>
          <th class="uk-text-right">Total</th>
          <th class="uk-text-right">Year</th>
          <th class="uk-text-right">Week</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(score, index) in orderedScores">
          <td>{{ score.winningTeam.name }}</td>
          <td class="uk-text-right">{{ score.winningTeam.score }}</td>
          <td>{{ score.losingTeam.name }}</td>
          <td class="uk-text-right">{{ score.losingTeam.score }}</td>
          <td class="uk-text-right">{{ score.totalScore }}</td>
          <td class="uk-text-right">{{ score.year }}</td>
          <td class="uk-text-right">{{ score.week }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import scores from "@/json/highestGameScores.json";
import _ from "lodash";

export default {
  name: "scoringHighGameScores",
  data() {
    return {
      scores: scores
    };
  },
  computed: {
    orderedScores() {
      this.scores.forEach(game => {
        // Calculate game total score
        game.totalScore = game.winningTeam.score + game.losingTeam.score;
      });
      return _.orderBy(this.scores, ["totalScore"], ["desc"]);
    }
  }
};
</script>
