<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="row section1">
      <div class="five columns text">
        <h1>Cura.</h1>
        <p>
          Let us guide you on your way towards a future immune to COVID-19. Check out our mobile 
					app for more dynamic content.
        </p>
        <div class="block noselect">
          <button>Download</button>
          <router-link to="/about" class="more">
            Learn more
            <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </div>
      </div>
      <img src="https://gh.arhaanb.co/v1/img/ponder.png" alt class="seven columns" draggable="false"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.mock {
  width: 50%;
}
.section1 {
  margin-top: 7em;
}
.row {
  display: flex;
  align-items: center;
}
button {
  background: rgb(187, 104, 212);
  color: #fff;
  border: none;
  font-family: "raleway";
}
button:hover {
  background: rgb(150, 79, 172);
  color: #fff;
}
button:active {
	color: #fff;
}
a {
  color: rgb(187, 104, 212);
  text-decoration: none;
}
a:hover {
  color: rgb(150, 79, 172);
}
.more {
  margin-left: 1.5em;
}
@media (max-width: 550px) {
	.row {
		flex-direction: column;
	}
	.section1 {
		margin-top: 4em;
	}
	.text {
		margin-bottom: 2em;
	}
}
</style>
