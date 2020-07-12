<template>
  <div class="container">
    <h1>About us</h1>

    <br />
    <br />
    <div class="six columns">
      <div class="SubTitle">
        <h3>What is Cura?</h3>
        <p>
          Researchers worldwide are working around the clock to find a vaccine against SARS-CoV-2, the virus causing the COVID-19 pandemic. A fast-tracked vaccine development process could speed a successful candidate to market in approximately 12-18 months.
          When a vaccine is available though, it’s going to be chaotic. Hospitals and camps will get crowded and that could lead to a lot of problems.
          Another issue would be the fact that currently, people are scared of visiting public places due to the fear of crowds. This creates a lot of problems as people need to go out to get daily nessecities.
          To tackle both these problems, we present Cura.
          An app that will help you gain immunity against covid, as well as return to the normal life you had to abandon due to this pandemic.
        </p>
      </div>
      <br />
      <div class="SubTitle">
        <h3>How the website Works</h3>
        <p>
          This website has been built using VueJS with registration via Firebase. It features a register page where you can register users to login via the app (you can also register via the app itself).
          While registering, you have the option of selecting whether you’re vaccinated or not. Depending on what you select, your dashboard on the app will toggle the certified badge.
        </p>
      </div>
      <br />
      <div class="SubTitle">
        <h3>How the App Works</h3>
        <p>
          Cura has been built using React based Ionic, with authentication going through Google's Firebase.
          The app features a registration page, followed by a login page. Once registered, users can log in to view their dashboard. Based on whether they registered themselves as vaccinated or not, their dashboard will toggle the cura certified badge.
          The users are registered to our database. For your convenience, we have displayed all users on
        </p>
        <a href="https://api.arhaanb.co/cura/users">api.arhaanb.co/cura/users</a>.
        <p>Feel free to register a new user and view it on the link.</p>
        <p>
          On the hospitals page, the user can see various hospitals across India, along with the number of vaccines they have. This way the user can decide which hospital they wish to visit.
          The data for the hospitals is received from our API, which was built using MongoDB and NodeJS and ExpressJS.
          The admin account on our app:
        </p>
        <p>
          Username: minet
          <br />Password: minettime
        </p>The admin account offers a page where you can register hospitals. We’d recommend you register one and view it on the hospitals page, as well as on
        <a
          href="https://api.arhaanb.co/cura/hospitals"
        >api.arhaanb.co/cura/hospitals</a>.
      </div>
      <br />
      <div class="SubTitle">
        <h3>Other Assets</h3>
        <p>
          The promotion video for Cura was made on
          <a
            href="https://www.adobe.com/in/products/aftereffects.html?gclid=CjwKCAjwxqX4BRBhEiwAYtJX7XZaZ_pSqzNe83D8lhErWjiGeuYcBiko8GWpcWagXYXbab48VR2GkBoC7LgQAvD_BwE&sdid=STLMM87Z&mv=search&ef_id=CjwKCAjwxqX4BRBhEiwAYtJX7XZaZ_pSqzNe83D8lhErWjiGeuYcBiko8GWpcWagXYXbab48VR2GkBoC7LgQAvD_BwE:G:s&s_kwcid=AL!3085!3!248207268690!e!!"
          >Adobe After Effects</a>.
          <br />The music used is titled Trampoline, by artist
          <a
            href="https://www.youtube.com/channel/UCXCD1xqaiH1SFiTO-Wuztjg"
          >SHAED</a>.
          <br />The 3D model of the vaccine has been made on
          <a href="www.blender.org">Blender</a>.
        </p>
      </div>
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
        <img src="@/assets/ap.jpg" alt="Aditya Pramar" draggable="false" />
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