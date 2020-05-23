<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="foo" exact class="nav-link" :to="{name: 'Home'}">
              <img src="./assets/build-a-bot-logo.png" alt="logo" class="logo" />
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="foo" exact class="nav-link" :to="{name: 'Build'}">Build</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style scoped>
#app {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
main {
  margin: 0 auto;
  background-color: #fff;
  width: 1024px;
  min-height: 300px;
  padding: 6rem 0;
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
.nav-link {
  text-decoration: none;
  color: inherit;
}
.foo {
  color: #fff;
}
</style>
