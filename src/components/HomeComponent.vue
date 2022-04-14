<template>
  <template-wrapper>
    <div class="home--wrapper">
      <header>
        <div class="logo--wrapper">
          <img src="/img/others/logo.svg" />
        </div>
        <div class="btn-wrapper">
          <button>
            <router-link to="/login">LOG IN</router-link>
          </button>
          <button><router-link to="/signup">SIGN UP</router-link></button>
        </div>
      </header>
      <div class="content-wrapper">
        <div class="img-wrapper">
          <img src="/img/others/main.svg" alt="logo" />
        </div>
        <div class="heading">
          <p>Fundall Expense Tracker</p>
          <p>Mini Project Frontend</p>
        </div>
        <div>
          <small>By Babatunde Fashola</small>
        </div>
      </div>
    </div>
  </template-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemplateWrapper from "@/template/Template.vue";

export default defineComponent({
  components: {
    TemplateWrapper,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home--wrapper {
  display: grid;
  place-items: center;
  background: transparent;
  display: grid;
  place-items: center;
  row-gap: 40px;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 100%;
  position: relative;
}

header {
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
}

.img-wrapper {
  height: 200px;
  width: 200px;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
}

.heading p {
  font-family: "Circular Std";
  font-size: 40px;
  line-height: 51px;
  color: #000000;
}

.heading p:first-of-type {
  font-weight: 600;
}

.heading p:last-of-type {
  font-weight: initial;
}

.content-wrapper {
  display: grid;
  place-items: center;
  row-gap: 40px;
}

small {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}

.btn-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-wrapper button {
  border: none;
  outline: none;
  padding: 10px;
  width: 100px;
  font-family: "Circular Std";
  font-size: 18px;
  line-height: 23px;
  box-sizing: border-box;

  color: #000000;
}
.btn-wrapper button:first-of-type {
  background: transparent;
}
.btn-wrapper button:last-of-type {
  background: var(--button);
  border-radius: 10px;
}

@media screen and (max-width: 725px) {
  .heading p {
    font-size: 25px;
    line-height: 23px;
  }
  small {
    font-size: 15px;
  }

  .btn-wrapper button {
    font-size: 12px;
    line-height: 13px;
    width: 70px;
  }
}

@media screen and (max-width: 435px) {
  .home--wrapper {
    padding: 5px;
  }
  header {
    padding: 0 10px;
  }
  .img-wrapper {
    width: 150px;
  }

  .heading p {
    font-size: 16px;
    line-height: 23px;
  }

  .logo--wrapper {
    width: 50px;
    height: 20px;
  }

  .logo--wrapper img {
    width: 100%;
    height: 100%;
  }

  .btn-wrapper button {
    font-size: 9px;
    line-height: 13px;
    width: 60px;
    padding: 5px;
  }

  .btn-wrapper {
    gap: 5px;
  }
}

@media screen and (max-width: 280px) {
  .home--wrapper {
    height: 95%;
  }
  header {
    flex-wrap: wrap;
  }
  .btn-wrapper {
    align-items: initial;
    flex-wrap: wrap;
  }
  .btn-wrapper button {
    padding: 0px;
  }
  .btn-wrapper button:first-of-type {
    text-align: left;
  }
  .logo--wrapper {
    width: 30px;
    height: 20px;
  }

  .img-wrapper {
    width: calc(100% - 10px);
  }

  .heading p {
    font-size: 12px;
    line-height: 23px;
  }

  small {
    font-size: 9px;
  }
}
</style>
