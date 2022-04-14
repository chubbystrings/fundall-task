<template>
  <div class="wrapper">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding: 40px 5px;
  box-sizing: border-box;
  background: transparent;
}

.wrapper .container {
  background: var(--secondary-background);
  border: 10px solid #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 40px;
  padding: 20px 40px;
  box-sizing: border-box;
  width: 95%;
  height: 84vh;
  margin: 20px auto;
  display: grid;
  position: relative;
}

@media screen and (max-width: 435px) {
  .wrapper .container {
    padding: 20px;
  }
}

@media screen and (max-width: 325px) {
  .wrapper {
    padding: 40px 0px;
    box-sizing: border-box;
  }
  .wrapper .container {
    padding: 0px;
  }
}
</style>
