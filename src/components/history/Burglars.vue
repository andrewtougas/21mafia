<template>
  <section class="uk-section uk-section-small history-burglars">
    <h2>Turd Burglars</h2>
    <table class="uk-table uk-table-striped uk-table-small">
      <thead>
        <tr>
          <th>Year</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="burglar.year" v-for="burglar in burglars">
          <td>{{ burglar.year }}</td>
          <td>{{ burglar.team }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import burglars from "@/json/burglars.json";

export default {
  name: "historyBurglars",
  data() {
    return {
      burglars: burglars.reverse()
    }
  }
};
</script>
