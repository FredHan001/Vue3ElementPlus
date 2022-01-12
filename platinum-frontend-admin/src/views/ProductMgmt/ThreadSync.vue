<template>
<el-row>
    <el-col :span="24">
      <!-- {{$route.meta.breadcrumb}} -->
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta.breadcrumb" :key="index"  :to="item.toLowerCase()">
          {{item}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <div>
    <h1>Thread Sync Page</h1>
  </div>
</template>
