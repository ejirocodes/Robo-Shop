<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" alt="logo" class="logo" />
            Build a bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>

<script>
// import HomePage from "./home/HomePage.vue";
import RobotBuilder from "./build/RobotBuilder.vue";

export default {
  name: "App",
  components: {
    RobotBuilder
  }
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
main {
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  width: 1024px;
  min-height: 300px;
  padding: 3rem;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
