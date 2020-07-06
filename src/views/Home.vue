<template>
  <div class="container">
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
      <img src="@/assets/iphone-min.png" alt class="seven columns floating" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* Animation */
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
}

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
