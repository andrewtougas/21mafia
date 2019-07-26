<template>
  <section class="uk-section uk-section-small history-champions">
    <h2>Jamieson Memorial Trophy Winners</h2>
    <table class="uk-table uk-table-striped uk-table-small">
      <thead>
        <tr>
          <th>Year</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="champion.year" v-for="champion in champions">
          <td>{{ champion.year }}</td>
          <td>{{ champion.team }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import champions from "@/json/champions.json";

export default {
  name: "historyChampions",
  data() {
    return {
      champions: champions.reverse()
    }
  }
};
</script>
