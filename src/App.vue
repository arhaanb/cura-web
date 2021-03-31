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
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <df-messenger
      chat-icon="f8dd78d6-1704-4697-a88d-e1f04ce67a54_x.png"
      intent="WELCOME"
      chat-title="Cura"
      agent-id="df5e4bfc-1fb5-45eb-aebd-5c0148aa95e1"
      language-code="en"
    ></df-messenger>
    <footer class="footer noselect">
      <div class="container">
        <div class="flex">
          <div class="socialsy">
            <a href="//github.com/arhaanb/cura" class="link" target="_blank">
              <span>Source</span>
            </a>
            <a
              href="//github.com/AdityaPramar/Cura"
              class="link"
              target="_blank"
            >
              <span>App Source</span>
            </a>
            <a href="/present" class="link" target="_blank">Presentation</a>
            <br class="anti-nvm" />
            <a href="//arhaanb.co" class="link" target="_blank">
              <span>Arhaan Bahadur</span>
            </a>
            <a
              href="//aditya-pramar.herokuapp.com"
              class="link"
              target="_blank"
            >
              <span>Aditya Pramar</span>
            </a>
          </div>
          <h6 class="title text">
            Made with 💖 by MINET
          </h6>
        </div>
      </div>
    </footer>
  </div>
</template>
