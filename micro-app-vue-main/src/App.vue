<template>
    <div id="content">
        <el-container style="height: 100vh">
            <el-aside width="170px" style="background-color: #191a23">
                <el-menu
                        :default-active="activeMenu"
                        class="el-menu-vertical-demo"
                        background-color="#191a23"
                        text-color="#fff"
                        router
                        active-text-color="#ffd04b">

                    <el-menu-item/>

                    <el-menu-item index="/wel">
                        <i class="el-icon-document"/>
                        <span slot="title">wel</span>
                    </el-menu-item>

                    <el-menu-item index="/home">
                        <i class="el-icon-menu"/>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/test">
                        <i class="el-icon-goods"/>
                        <span slot="title">原汁原味</span>
                    </el-menu-item>
                    <el-menu-item index="/table-list">
                        <i class="el-icon-user"/>
                        <span slot="title">加工生产</span>
                    </el-menu-item>
                    <el-menu-item index="/sort-table">
                        <i class="el-icon-user"/>
                        <span slot="title">表格拖拽</span>
                    </el-menu-item>
                    <el-menu-item index="/temp">
                        <i class="el-icon-user"/>
                        <span slot="title">临时</span>
                    </el-menu-item>

                    <el-menu-item index="/static">
                        <i class="el-icon-user"/>
                        <span slot="title">static</span>
                    </el-menu-item>
                    <el-menu-item index="/menu/react">
                        <i class="el-icon-user"/>
                        <span slot="title">react</span>
                    </el-menu-item>

                    <el-menu-item index="/menu/vue">
                        <i class="el-icon-user"/>
                        <span slot="title">vue</span>
                    </el-menu-item>

                </el-menu>

            </el-aside>
            <el-container>
                <el-header>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px;color:#fff;cursor: pointer"/>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王老虎</span>
                </el-header>

                <keep-alive :include="includes" exclude="" max="1">
                    <router-view v-if="isRouterAlive"/>
                </keep-alive>

                <div id="frame">

                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        a: {b: 2},
        isRouterAlive: true
      }
    },
    provide() {
      // 通过provide传递给子代，谁需要谁获取下就OK了
      return {
        reload: this.reload
      }
    },
    created() {
    },
    mounted() {
      this.$watch('a', val => {
        console.log(val, 'lalaallalal');
      }, () => true)
    },

    computed: {
      activeMenu() {
        return this.$route.path
      },
      ...mapGetters(['getRouter']),
      ...mapState({
        num: state => state.router.list,
        includes: state => state.router.includes,
      }),

    },
    methods: {
      changeStore() {
        this.a.b = 0
      },
      changeStore2() {
        this.$store.dispatch('changeList', 'tableLists');
      },
      reload() {
        this.isRouterAlive = false;

        this.$nextTick(() => (this.isRouterAlive = true))
      }
    }
  }
</script>

<style type="text/scss">

    .el-header {
        text-align: right;
        font-size: 12px;
        background-color: #191a23;
        color: #fff;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-menu {
        border: 0 !important;
    }
</style>