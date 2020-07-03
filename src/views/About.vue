<template>
  <div class="container">
    <h1>About us</h1>
    <h5 v-if="loading">Loading</h5>
    <div class="data">
      <div class="card confirmed three columns">
        <h3>{{info.confirmed.value}}</h3>
        <h5>Confirmed</h5>
      </div>
      <div class="card recovered three columns">
        <h3>{{info.recovered.value}}</h3>
        <h5>Recovered</h5>
      </div>
      <div class="card deaths three columns">
        <h3>{{info.deaths.value}}</h3>
        <h5>Deaths</h5>
      </div>
    </div>
    <p
      class="zero"
    >Last update on: {{date.getDate()}}/{{date.getMonth()}}/{{date.getFullYear()}} {{date.getHours()}}:{{date.getMinutes()}}:{{date.getSeconds()}}</p>
    <p class="zero">This data is for the country - India</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      loading: true,
      date: ""
    };
  },
  async mounted() {
    await axios
      .get("https://covid19.mathdro.id/api/countries/india")
      .then(response => (this.info = response.data));
    var timebro = this.info.lastUpdate;
    this.date = new Date(timebro);
    // datevalues = [
    //   date.getFullYear(),
    //   date.getMonth() + 1,
    //   date.getDate(),
    //   date.getHours(),
    //   date.getMinutes(),
    //   date.getSeconds()
    // ];
    // console.log(datevalues);
    this.loading = false;
  }
};
</script>

<style scoped>
.zero {
  margin: 0;
}
.data {
  display: flex;
  justify-content: center;
}
.card {
  text-align: center;
  padding: 2em;
  background: rgba(255, 255, 255, 0.3);
  /* margin: 0 2em; */
  border-radius: 1em;
  border-style: solid;
  border-width: 0.1em;
  /* width: 15%; */
}

.confirmed {
  border-color: yellow;
}

.deaths {
  border-color: red;
}

.recovered {
  border-color: green;
}

@media (max-width: 550px) {
  .data {
    flex-direction: column;
  }
  .card {
    width: 100%;
    margin: 2em 0;
  }
}
</style>