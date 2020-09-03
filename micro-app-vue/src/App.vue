<template>
    <el-container>
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="列表页" name="/table-list"></el-tab-pane>
                <el-tab-pane label="列表详情页" name="/table-detail"></el-tab-pane>
                <el-tab-pane label="拖拽列表页" name="/table-sort-list"></el-tab-pane>
            </el-tabs>
        </el-header>

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