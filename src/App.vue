<template>
  <div id="app" class="APP">
    <div class="everything">
      <div class="container">
        <div id="nav">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/cura.png" alt="Cura" class="cura" />
            </router-link>
          </div>
          <div class="right">
            <router-link to="/about">About</router-link>
            <router-link to="/register">Register</router-link>
          </div>
        </div>
      </div>
      <main class="App__main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
      <footer class="container noselect">
        <div class="flex">
          <div class="socials">
            <a href="//github.com/arhaanb/cura" class="link" target="_blank">Source</a>
            <a href="//arhaanb.co" class="link" target="_blank">Arhaan Bahadur</a>
            <a href="//aditya-pramar.herokuapp.com" class="link" target="_blank">Aditya Pramar</a>
          </div>
          <h6 class="title">
            Made with
            <i class="fa fa-heart heart"></i> by MINET
          </h6>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.heart {
  color: rgb(236, 85, 85);
}
input,
textarea {
  font-family: "raleway";
}
::-moz-selection {
  /* Code for Firefox */
  color: #222;
  background: rgba(187, 104, 212, 0.5);
}

::selection {
  color: #222;
  background: rgba(187, 104, 212, 0.5);
}
img,
.noselect,
button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Transitions */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* ----------- */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
}

#nav .right a {
  margin-left: 1em;
  text-decoration: none;
  font-size: 1.2em;
}

#nav a {
  /* font-weight: bold; */
  color: #222;
}

#nav a.router-link-exact-active {
  color: rgb(171, 84, 197);
}

.right {
  display: flex;
}

.cura {
  width: 7em;
}
</style>
