<template>
  <div id="app">
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
  </div>
</template>

<style>

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
.noselect {
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
