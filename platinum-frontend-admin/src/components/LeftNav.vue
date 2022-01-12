<template>
  <div id="leftnav">
    <el-menu 
      router
      default-active="/membermgmt"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @change="handleChange"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><management /></el-icon>
          <span>Product Management</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="tagsmgmt">Tags</el-menu-item>
          <el-menu-item index="threadsync">Sync Threads</el-menu-item> 
          <el-menu-item index="/">Subscription-Query Mapping</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/membermgmt">
        <el-icon><user-filled /></el-icon>
        <span>Member Management</span>
      </el-menu-item>
      <el-menu-item index="permissionmgmt">
        <el-icon><setting /></el-icon>
        <span>Permission Management</span>
      </el-menu-item>
      <el-menu-item index="icm">
        <el-icon><warning-filled /></el-icon>
        <span>Exceptions Management</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import {
  Management,
  Document,
  UserFilled,
  Setting,
  WarningFilled,
} from "@element-plus/icons-vue";

@Options({
  props: {
    msg: String,
  },
  components: { Management, Document, UserFilled, WarningFilled, Setting },
  methods: {
    handleOpen: (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    },
    handleClose: (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    },
    handleChange:(key: string, keyPath: string[])=>{
        console.log("change..");
        console.log(key, keyPath);
    }
  },
})
export default class LeftNav extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#leftnav {
  width: 12%;
  min-width: 225px;
  min-height: 840px;
  display: block;
  float: left;
  background-color: #fff;
  border-right:solid 1px #e6e6e6;
}
</style>
