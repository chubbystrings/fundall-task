<template>
  <login-component></login-component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginComponent from "@/components/LoginComponent.vue";

export default defineComponent({
  components: {
    LoginComponent,
  },
  setup() {
    //
  },
});
</script>
<style scoped></style>
