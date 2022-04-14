<template>
  <dashboard-component></dashboard-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardComponent from "@/components/dashboard/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    DashboardComponent,
  },

  setup() {
    //
  },
});
</script>
