<template>
  <div class="uk-container uk-container-expand scoring">
    <HighTeamScores />
    <HighGameScores />
    <HighTotalScores />
    <LowTeamScores />
    <LowTotalScores />
  </div>
</template>

<script>
import HighTeamScores from "@/components/scoring/HighTeamScores.vue";
import HighGameScores from "@/components/scoring/HighGameScores.vue";
import HighTotalScores from "@/components/scoring/HighTotalScores.vue";
import LowTeamScores from "@/components/scoring/LowTeamScores.vue";
import LowTotalScores from "@/components/scoring/LowTotalScores.vue";

export default {
  name: "scoring",
  components: {
    HighTeamScores,
    HighGameScores,
    HighTotalScores,
    LowTeamScores,
    LowTotalScores
  }
};
</script>
