<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" alt="robot" aria-hidden="true" class="robot" />
    </div>
    <div class="get-started">
      <a href>Get started</a> build your first robot
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
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
