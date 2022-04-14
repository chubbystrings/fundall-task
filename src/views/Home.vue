<template>
  <home-component></home-component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useReducer from "@/store";
import HomeComponent from "@/components/HomeComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeComponent,
  },

  setup() {
    const { state } = useReducer();

    const isAuth = computed(() => state.isLoading);

    return { isAuth };
  },
});
</script>
