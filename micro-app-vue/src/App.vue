<template>
    <el-container>
        <el-header>
            <h2 class="experimentalStyleIsolation">查看样式沙箱</h2>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="列表页" name="/list"></el-tab-pane>
                <el-tab-pane label="列表详情页" name="/table-detail"></el-tab-pane>
                <el-tab-pane label="拖拽列表页" name="/table-sort-list"></el-tab-pane>
            </el-tabs>
        </el-header>

        <br>

        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '/table-list'
      };
    },
    created() {
      this.activeName = this.$route.path
    },
    methods: {
      handleClick() {
        this.$router.push(this.activeName)
      }
    }
  };
</script>
<style>
    .experimentalStyleIsolation {
        color: orangered;
        font-size: 16px;
    }
</style>