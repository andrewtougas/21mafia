<template>
  <div class="uk-container uk-container-expand">
    <div uk-grid>
      <div class="uk-width-1-2@m">
        <Champions />
      </div>
      <div class="uk-width-1-2@m">
        <Burglars />
      </div>
    </div>
  </div>
</template>

<script>
import Champions from "@/components/history/Champions.vue";
import Burglars from "@/components/history/Burglars.vue";

export default {
  name: "history",
  components: {
    Champions,
    Burglars
  }
};
</script>
