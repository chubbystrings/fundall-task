<template>
  <template-wrapper>
    <div class="signup--wrapper">
      <div class="first--grid">
        <div class="header">
          <img src="/img/others/logo.svg" />
        </div>
        <div class="img--wrapper">
          <img src="/img/others/login.svg" />
        </div>

        <div class="text--wrapper">
          <h3><span>Welcome Back!</span> We miss you.</h3>
        </div>
      </div>
      <div class="second--grid">
        <div class="card--wrapper">
          <div class="card">
            <div class="input--wrapper">
              <div class="login-text-wrapper">
                <h2>Holla</h2>
                <small>Sign in to vibe!</small>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="second--input">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    v-model="state.email"
                  />
                  <label htmlFor="email">Email or Username</label>
                </div>
                <div class="second--input">
                  <input
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    v-model="state.password"
                    type="password"
                  />
                  <label htmlFor="lastname">Password</label>
                </div>
                <div>
                  <button :disabled="formIsInvalid || isPending">LOG IN</button>
                </div>
                <div class="login--text">
                  <small
                    >Don't have an account?
                    <span
                      ><router-link to="/signup"
                        >Register Here</router-link
                      ></span
                    ></small
                  >
                </div>
              </form>
            </div>
            <small class="error-message" v-if="error"
              >check your credentials!!</small
            >
          </div>
          <p class="terms">
            By clicking on Login, you agree to our
            <span>Terms & Conditions and Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  </template-wrapper>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import TemplateWrapper from "@/template/Template.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import useLogin from "@/composables/useLogin";
import { useRouter } from "vue-router";
import { setUser } from "@/store/actions";
import useReducer from "@/store";
import { CURRENT_USER } from "@/types";

export default defineComponent({
  components: {
    TemplateWrapper,
  },
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const formIsInvalid = computed(() => !state.email || !state.password);
    const { error, isPending, login, data } = useLogin();
    const router = useRouter();
    const { dispatch } = useReducer();

    const handleSubmit = async () => {
      await login(state.email, state.password);

      if (!error.value) {
        localStorage.setItem("ExpenseTrackerUser", JSON.stringify(data.value));
        dispatch(setUser(data.value as CURRENT_USER));
        router.replace({ name: "Dashboard" });
      } else {
        console.log(error);
      }
    };

    const rules = computed(() => {
      return {
        email: { required }, // Matches state.contact.email
        password: { required },
      };
    });

    const v = useVuelidate(rules, state);

    return { state, v, formIsInvalid, isPending, handleSubmit, error };
  },
});
</script>
<style scoped>
.signup--wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

.first--grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding-top: 100px;
}

.first--grid .header {
  position: absolute;
  top: 5px;
  left: 10px;
}

.first--grid .img--wrapper {
  width: 200px;
  height: 200px;
}

.img--wrapper img {
  width: 100%;
  height: 100%;
}
.text--wrapper {
  height: 102px;
  width: 369px;
}
.text--wrapper p {
  font-family: "Circular Std";
  font-size: 21px;
  line-height: 27px;

  color: #000000;
}

.text--wrapper h3 {
  font-family: "Circular Std";
  font-size: 40px;
  line-height: 51px;

  color: black;
}

.text--wrapper span {
  color: var(--button);
}

.second--grid {
  width: 100%;
  height: 100%;
}

.card--wrapper {
  display: flex;
  flex-direction: column;
}

.card--wrapper .card {
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  height: 535px;
  width: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 40px;
  position: relative;
}

.login-text-wrapper {
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
}

.card .input--wrapper form {
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  padding: 10px 20px;
}

form input:focus {
  border: 1px solid var(--button);
}

form input:focus + label {
  color: var(--button);
}

form label {
  font-size: 14px;
  margin-bottom: 5px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: 0 0 0 30px white inset !important;
}

::placeholder {
  /* Edge */
  font-family: "Nunito Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height */

  color: #30443c;

  mix-blend-mode: normal;
  opacity: 0.5;
}

form button {
  width: 100%;
  padding: 18px 0px;
  background: #4de897;
  box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
  border-radius: 3px;
  border: none;
  outline: none;
}

form button:disabled {
  background: #f1f1f1;
  cursor: not-allowed;
  box-shadow: none;
}

.login--text small {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  height: 22px;
  width: 287px;
  color: #1b2420;
  text-align: center;
  font-weight: bolder;
  padding: 0;
  margin: 0;
}
.login--text {
  text-align: center;
}

.input--wrapper input {
  background: #ffffff;
  border: 1px solid #cad0c9;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
}

.first--input {
  display: flex;
  justify-content: space-between;
}

.first--input > div,
.second--input {
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
}

.card--wrapper p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #97a19d;
  width: 406px;
  margin: 25px auto;
  overflow-wrap: break-word;
  word-break: break-all;
}

.card--wrapper span {
  color: var(--button);
}

.login-text-wrapper {
  display: flex;
  flex-direction: column;
}

.login-text-wrapper h2 {
  font-family: "Circular Std";
  font-size: 34px;
  line-height: 43px;
  /* identical to box height */

  color: #1b2420;
}

.login-text-wrapper small {
  font-family: "Circular Std";
  font-size: 18px;
  line-height: 25px;
  text-align: left;
  color: #30443c;
  margin-bottom: 30px;
  padding: 0;
}

.error-message {
  position: absolute;
  bottom: 15px;
  color: red;
  font-size: 12px;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 1200px) {
  .card--wrapper .card {
    padding: 10px 5px;
    width: 100%;
  }
  .card--wrapper p {
    margin: 5px auto;
    font-size: 10px;
  }
}

@media screen and (max-width: 987px) {
  .signup--wrapper {
    display: flex;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;
  }

  .first--grid {
    display: none;
  }

  .card--wrapper .card {
    max-width: 450px;
    margin: 10px auto;
    padding: 10px;
  }

  .card--wrapper p {
    font-size: 10px;
    width: auto;
    line-height: 12px;
  }

  .first--input {
    flex-direction: column;
    gap: 5px;
  }
  .login-text-wrapper {
    padding: 0px;
    margin: 40px 0px;
  }

  .card .input--wrapper form {
    margin: 5px auto;
    gap: 10px;
    padding: 0px;
  }
}

@media screen and (max-width: 325px) {
  .card--wrapper .card {
    padding: 2px;
  }
}
</style>
