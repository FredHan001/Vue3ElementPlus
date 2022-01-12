<template>
  <div id="topnav">
    <!-- <h1>Top Nav Here</h1> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class TopNav extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#topnav {
  width: 100%;
  display: block;
  float: left;
  background-color: #2c3e50;
}

</style>
