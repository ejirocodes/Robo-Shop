<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" alt="robot" aria-hidden="true" class="robot" />
    </div>
    <div class="get-started">
      <router-link to="build">Get started</router-link> build your first robot
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
a {
  color: #42b983;
}
</style>
