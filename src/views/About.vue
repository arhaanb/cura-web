<template>
  <div class="container">
    <!-- <h1>About us</h1> -->

    <br />
    <br />
    <div class="seven columns">
      <div class="SubTitle">
        <h3>What is Cura?</h3>
        <p>
          Researchers worldwide are working around the clock to find a vaccine against SARS-CoV-2, the virus causing the COVID-19 pandemic. A fast-tracked vaccine development process could speed a successful candidate to market in approximately 12-18 months.
          When a vaccine is available though, it’s going to be chaotic. Hospitals and camps will get crowded and that could lead to a lot of problems.
          Another issue would be the fact that currently, people are scared of visiting public places due to the fear of crowds. This creates a lot of problems as people need to go out to get daily nessecities.
          To tackle both these problems, we present Cura.
        </p>
        <p>An app that will help you gain immunity against covid, as well as return to the normal life you had to abandon due to this pandemic.</p>
      </div>
      <p>On the hospitals page, the user can see various hospitals across India, along with the number of vaccines they have. This way the user can decide which hospital they wish to visit.</p>
      <br />
    </div>
    <div class="u-cf"></div>
    <br />
    <br />

    <h3 class="zero">Recent stats</h3>
    <h5>India</h5>
    <h5 v-if="loading">Loading</h5>
    <div class="data" v-if="info">
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
      class="zero top"
      v-if="date"
    >Last update on: {{date.getDate()}}/{{date.getMonth()}}/{{date.getFullYear()}} {{date.getHours()}}:{{date.getMinutes()}}:{{date.getSeconds()}}</p>
    <p class="zero">Updates automatically via the Covid API.</p>

    <br />
    <br />
    <br />
    <br />

    <h3>The team</h3>
    <div class="team">
      <div class="box six columns">
        <img src="@/assets/arhaan.jpg" alt="Arhaan Bahadur" draggable="false" />
        <div class="info">
          <h4>Arhaan Bahadur</h4>
          <p>Co-Founder</p>
        </div>
      </div>

      <div class="box six columns">
        <img src="@/assets/ap.png" alt="Aditya Pramar" draggable="false" />
        <div class="info">
          <h4>Aditya Pramar</h4>
          <p>Co-Founder</p>
        </div>
      </div>
      <div class="u-cf"></div>
    </div>
    <p class="center">
      <img src="@/assets/minte.png" alt="MINET hot" class="minte" draggable="false" />
    </p>
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
    this.loading = false;
  }
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
}

.box img {
  width: 8em;
  border-radius: 100%;
  margin-right: 2em;
}

.box .info {
  margin-bottom: 2em;
}

.box h4,
.box p {
  margin: 0;
}

.zero {
  margin: 0;
}
.top {
  margin-top: 1.5em;
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
  border-color: #c975e6;
}

a {
  color: #c975e6;
}

.deaths {
  border-color: red;
}

.recovered {
  border-color: rgb(79, 161, 110);
}

.minte {
  width: 10em;
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