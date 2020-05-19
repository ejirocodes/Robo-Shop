<template>
  <div class="content">
    <button @click="addToCart()" class="add-to-cart">Add to Cart</button>
    <div>
      <div class="top-row">
        <div :class="[saleBorderClass, 'top', 'part']">
          <div class="robot-name">
            <h2>
              {{selectedRobot.head.title}}
              <span
                v-show="selectedRobot.head.onSale"
                class="sale"
              >Sale!</span>
            </h2>
          </div>
          <PartSelector />
        </div>
      </div>
      <div class="middle-row">
        <div class="left part">
          <PartSelector />
        </div>
        <div class="center part">
          <PartSelector />
        </div>
        <div class="right part">
          <PartSelector />
        </div>
      </div>
      <div class="bottom-row">
        <PartSelector />
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from "../data/parts";
import createdHookMixin from "./created-hook-mixin";
import PartSelector from "./PartSelector.vue";

export default {
  name: "RobotBuilder",
  components: { PartSelector },
  mixins: [createdHookMixin],
  beforeCreate() {
    console.log("component before created");
  },
  mounted() {
    console.log("component mounted");
  },
  data() {
    return {
      availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {}
      }
    };
  },
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? "onSale" : "";
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
    }
  }
};
</script>

<style scoped lang="scss">
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -70px;
  text-align: center;
  width: 100%;
  font-weight: 500;
  font-family: "DM Mono", monospace;
  h2 {
    margin: 0;
    font-size: 1rem;
  }
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 2px;
  font-family: "DM Mono", monospace;
  font-size: 1rem;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.onSale {
  border: 2px solid orangered;
  border-radius: 0.4rem;
}
</style>