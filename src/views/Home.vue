<template>
  <div class="uk-container uk-container-expand">
    <div uk-grid>
      <div class="uk-width-3-4@m">
        <Records :years="years" />
        <Standings :years="years" />
      </div>
      <div class="uk-width-1-4@m">
        <ActiveTeams />
      </div>
    </div>
  </div>
</template>

<script>
import Records from "@/components/home/Records.vue";
import Standings from "@/components/home/Standings.vue";
import ActiveTeams from "@/components/home/ActiveTeams.vue";
import settings from "@/json/settings.json";

export default {
  name: "home",
  components: {
    Records,
    Standings,
    ActiveTeams
  },
  computed: {
    years() {
      let years = [];
      for (let year = settings.startYear; year <= settings.endYear; year++) {
        years.push(year);
      }
      return years;
    }
  }
};
</script>
