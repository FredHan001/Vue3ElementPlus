<template>
  <!-- <el-row>
    <el-col :span="24"><top-nav /></el-col>
  </el-row>
  <el-row>
    <el-col :span="4"><left-nav /></el-col>
    <el-col :span="20"
      ><div class="grid-content bg-purple-light">
        <router-view />
      </div>
    </el-col>
  </el-row> -->

    <div class="common-layout">

    <el-container>
      <el-header>
        <top-nav />
      </el-header>
      <el-container>
        <el-aside width="240px">
          <left-nav />
        </el-aside>
        <el-container>
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
      <el-container>
          <el-footer>Footer</el-footer>
      </el-container>
    </el-container>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopNav from "./components/TopNav.vue";
import LeftNav from "./components/LeftNav.vue";

@Options({
  components: {
    TopNav,
    LeftNav,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 950px;
  min-width: 1500px;
  width: 100%;
}

// .el-menu-item {
//   a {
//     text-decoration: none;
//   }
// }

.el-menu {
  --el-menu-border-color: 0px;
}

.common-layout {
  .el-header,
  .el-footer {
    background-color: #2c3e50;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 45px;
    height: 45px;
  }

   .el-header{
      line-height: 65px;
      height: 65px;
   }

  .el-footer {
    line-height: 60px;
  }

  .el-aside {
    // background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
