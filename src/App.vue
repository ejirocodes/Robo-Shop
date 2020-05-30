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
          <li class="nav-item cart">
            <router-link active-class="foo" exact class="nav-link" to="/cart">Cart</router-link>
            <div class="cart-items">{{cart.length}}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
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
  background-color: #fff;
  width: 964px;
  min-height: 300px;
  padding: 6rem 0;
}
header {
  background-color: #999;
  width: 1184px;
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
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.foo {
  color: #fff;
}
.container {
  display: flex;
  margin: 10px auto 0 10px;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: darkorange;
}
</style>
