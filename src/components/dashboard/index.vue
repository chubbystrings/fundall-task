<template>
  <template-wrapper>
    <div class="dashboard--wrapper">
      <div class="grid--one">
        <div class="header">
          <div class="logo--wrapper">
            <img src="/img/others/logo.svg" />
          </div>
        </div>
        <div class="avatar--section">
          <div class="avatar--wrapper">
            <div class="avatar">
              <img src="/img/others/avatar.svg" alt="avatar" />
            </div>
            <div class="username">
              <p>Babatunde Fashola</p>
              <small>e@gmail.com</small>
            </div>
          </div>
          <div class="monthly--expenses">
            <p>Target Monthly</p>
            <h4>&#x20A6;560,000</h4>
            <div class="progress--wrapper">
              <img src="/img/others/progress.svg" alt="progress" />
            </div>
          </div>
        </div>
        <div class="summary--section">
          <div class="card">
            <div class="table--wrapper">
              <small>Daily Expenses Summary</small>
              <div class="table">
                <table>
                  <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td><div class="green--circle--small"></div></td>
                    <td>30 Nov 2018</td>
                    <td>30, 000</td>
                  </tr>
                  <tr>
                    <td><div class="green--circle--small"></div></td>
                    <td>30 Nov 2018</td>
                    <td>30, 000</td>
                  </tr>
                  <tr>
                    <td><div class="green--circle--small"></div></td>
                    <td>30 Nov 2018</td>
                    <td>30, 000</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="pagination">
              <div>
                <p>1</p>
                <p>of 5</p>
              </div>
              <div>
                <img src="/img/others/arrow-left.svg" />
                <img src="/img/others/arrow-right.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid--two">
        <div class="welcome--bar">
          <div class="welcome--text">
            <p><span>Welcome back,</span> Babatunde</p>
            <small>Now, let’s get your expenses for this month</small>
          </div>
          <div class="dashboard-img--wrapper">
            <img src="/img/others/dashboard-img.svg" alt="welcome image" />
          </div>
        </div>
        <div class="form--wrapper">
          <div class="first-form--wrapper">
            <div>
              <input
                placeholder="Target"
                type="text"
                id="target"
                name="target"
              />
              <label htmlFor="target">Target Monthly Expenses</label>
            </div>
            <div>
              <input type="date" id="date" name="date" placeholder="date" />
              <label htmlFor="date">Date</label>
            </div>
          </div>
          <div class="todays--expenses">
            <div>
              <input type="text" name="" placeholder="pizza" />
              <label htmlFor="">Todays Expenses</label>
            </div>
            <div>
              <input type="text" id="" name="" placeholder="10,000" />
            </div>
            <div>
              <input type="text" id="" name="" placeholder="Text Book" />
            </div>
            <div>
              <input type="text" id="date" name="date" placeholder="10,000" />
            </div>
            <div>
              <input type="text" id="date" name="" placeholder="Tution Fee" />
            </div>
            <div>
              <input type="text" name="" placeholder="20,000" />
            </div>
          </div>
          <div class="total--expenses">
            <small>Total Actual Expenses: &#x20A6;</small>
            <input type="text" readonly placeholder="40,000" />
          </div>
        </div>
        <div class="save-btn--wrapper">
          <button>Save Today's Expenses</button>
        </div>
        <div class="mobile-display-btn">
          <div class="total--expenses-mobile">
            <small>Total Actual Expenses: &#x20A6;</small>
            <input type="text" readonly placeholder="40,000" />
          </div>
          <div>
            <button>Save Today's Expenses</button>
          </div>
        </div>
      </div>
    </div>
  </template-wrapper>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import TemplateWrapper from "@/template/Template.vue";
import useReducer from "@/store";
export default defineComponent({
  components: {
    TemplateWrapper,
  },
  setup() {
    const { state } = useReducer();

    const avatar = computed(() => state.currentUser?.avatar);

    return { avatar };
  },
});
</script>
<style scoped>
.dashboard--wrapper {
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  position: relative;
}

.dashboard--wrapper .grid--one {
  width: 90%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1.5fr 3fr;
  padding: 50px 20px 0px 20px;
  box-sizing: border-box;
  gap: 10px;
  /* border: 1px solid red; */
}
.dashboard--wrapper .grid--two {
  width: 100%;
  height: 100%;
  background: var(--primary-background);
  padding: 35px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
}

.grid--one .header {
  position: absolute;
  top: 0px;
  left: 25px;
}

.header .logo--wrapper {
  width: 40px;
  height: 40px;
}

.logo--wrapper img {
  width: 100%;
  height: 100%;
}

.avatar--section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}

.avatar--section .avatar--wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.avatar--wrapper .avatar {
  background: #c4c4c4;
  border-radius: 20px;
  display: grid;
  place-items: center;
  height: 69px;
  width: 73px;
}

.avatar img {
  width: 20px;
  height: 20px;
}

.avatar--wrapper .username {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
}

.summary--section {
  width: 100%;
  height: 100%;
}

.summary--section .card {
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
  border-radius: 10px;
  height: 100%;
  width: 90%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 10px;
  font-family: "Circular Std";
  position: relative;
}

.progress--wrapper {
  box-sizing: border-box;
  width: 90%;
}

.progress--wrapper img {
  width: 100%;
}

.table--wrapper {
  overflow-x: auto;
}
.table--wrapper small {
  font-size: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table th {
  padding: 20px 5px;
  text-align: left;
  font-size: 14px;
}

table td {
  padding: 30px 5px;
  text-align: left;
  font-size: 12px;
}

table tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
table tr:first-child,
tr:last-child {
  border: none;
}

table td:last-child {
  color: var(--button);
}

table .green--circle--small {
  width: 10px;
  height: 10px;
  padding: 0;
  margin: 0;
  background: var(--button);
  border-radius: 50%;
}

.card .pagination {
  position: absolute;
  bottom: 10px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  gap: 10px;
  box-sizing: border-box;
}

.pagination div {
  display: flex;
  gap: 2px;
  align-items: center;
}

.pagination div img {
  width: 15px;
  height: 15px;
}
.pagination p {
  margin: 0;
  padding: 0;
  font-size: 12px;
}

.pagination div p:first-of-type {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0px 10px;
  border-radius: 3px;
}

.welcome--bar {
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome--text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.welcome--text p {
  font-family: "Circular Std";
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */
}

.welcome--text span {
  color: var(--button);
}

.welcome--text small {
  font-family: "Founders Grotesk";
  font-size: 10px;
  line-height: 18px;
  /* identical to box height */

  color: #30443c;
}

.dashboard-img--wrapper {
  width: 150px;
  height: 100px;
  margin-top: -55px;
  margin-right: 30px;
}

.dashboard-img--wrapper img {
  width: 100%;
  height: 100%;
}

.form--wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  padding: 10px 25px;
  position: relative;
}

.first-form--wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 65%;
}

.first-form--wrapper div,
.todays--expenses div {
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
}

.grid--two input {
  background: #ffffff;
  border: 1px solid #cad0c9;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  outline: none;
  padding: 0 10px;
}

::placeholder {
  font-family: "Nunito Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;

  color: #30443c;

  mix-blend-mode: normal;
  opacity: 0.5;
}

.grid--two input:focus {
  border: 1px solid var(--button);
}

.grid--two input:focus {
  color: var(--button);
}

.grid--two label {
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

.todays--expenses {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
}

.total--expenses {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: 2px;
  position: absolute;
  right: 20px;
  max-width: 300px;
  bottom: -45px;
}

.total--expenses small {
  text-align: right;
  font-family: "Circular Std";
  font-size: 14px;
  line-height: 20px;
}

.save-btn--wrapper {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.save-btn--wrapper button {
  background: #4de897;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 15px;
  height: 40px;
  max-width: 222px;
  padding: 0 10px;

  border-radius: 15px;
}

.mobile-display-btn {
  display: none;
}

@media screen and (max-width: 1200px) {
  .save-btn--wrapper {
    position: absolute;
    bottom: 10px;
    left: 40px;
    transform: translateX(0);
  }
}

@media screen and (max-width: 987px) {
  .dashboard--wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: scroll;
  }

  .save-btn--wrapper {
    bottom: 20px;
  }

  .dashboard--wrapper .grid--one {
    width: 100%;

    padding: 50px 0px;
  }

  .dashboard--wrapper .grid--two {
    height: 700px;
    padding: 35px 20px 65px 20px;
  }

  .summary--section .card {
    width: 100%;
  }

  .grid--one .header {
    left: 0px;
  }
}

@media screen and (max-width: 725px) {
  .mobile-display-btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
  }
  .total--expenses {
    display: none;
  }

  .save-btn--wrapper {
    display: none;
  }

  .mobile-display-btn button {
    background: #4de897;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 15px;
    height: 40px;
    max-width: 222px;
    padding: 0 10px;

    border-radius: 15px;
  }
}

@media screen and (max-width: 500px) {
  .welcome--text p {
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
  }

  .dashboard-img--wrapper {
    width: 100px;
    height: 100px;
    margin-top: -55px;
    margin-right: -20px;
  }
}

@media screen and (max-width: 327px) {
  .grid--two label {
    font-size: 9px;
    margin-bottom: 5px;
  }

  .form--wrapper {
    padding: 5px;
  }

  .first-form--wrapper {
    max-width: 100%;
  }

  .dashboard-img--wrapper {
    display: none;
  }

  .todays--expenses {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .dashboard--wrapper .grid--two {
    padding: 35px 5px 65px 5px;
  }

  .username p,
  .monthly--expenses p {
    font-size: 10px;
  }

  .username small {
    font-size: 9px;
  }

  .monthly--expenses h4 {
    font-size: 12px;
  }
}
</style>
