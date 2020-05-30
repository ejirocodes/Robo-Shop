<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
          <img :src="robot.head.src" :alt="robot.head.title" />
        </tr>
      </tbody>
    </table>
    <h1 class="sale-item">You've saved money on these robots:</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
          <img :src="robot.head.src" :alt="robot.head.title" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartSaleItems() {
        return this.$store.getters.cartSaleItems;
    }
  }
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
img {
  width: 12rem;
}
.sale-item {
    margin-top: 50px;
    font-size: 18px;
    color: orange;
}
</style>