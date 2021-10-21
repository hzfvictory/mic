<template>
  <el-container id="content" style="min-height: 100vh">
    <el-header class="el-header-new">
      <div class="header_l">
        <div class="login"></div>
      </div>
      <el-dropdown>
        <div class="dropdown">
          <img
            alt="logo"
            src="data:image/png;base64,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"
          />
          <span>admin</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-s-home">首页</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: #191a23">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          background-color="#191a23"
          text-color="#fff"
          router
          active-text-color="#ffd04b"
        >
          <el-menu-item v-for="item of menus" :key="item.key" :index="item.path">
            <i :class="item.icon" />
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              组件
            </template>
            <el-menu-item-group>
              <template slot="title">table</template>
              <el-menu-item v-for="item of tableMenu" :key="item.key" :index="item.path">
                <i :class="item.icon" />
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              微应用
            </template>

            <el-menu-item v-for="item of newMenus" :key="item.key" :index="item.path">
              <i :class="item.icon" />
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el--main class="main">
        <keep-alive :include="includes" exclude="" max="1">
          <router-view v-if="isRouterAlive" />
        </keep-alive>
        <!--TODO: 微前端  微应用-->
        <div id="wrapper-vue"></div>
        <div id="wrapper"></div>
      </el--main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import actions from '@/shared/actions';

  const menus = [
    // {
    //   title: 'welcome',
    //   key: '1',
    //   icon: 'el-icon-user-solid',
    //   path: '/wel'
    // },
    {
      title: '首页',
      key: '2',
      icon: 'el-icon-s-home',
      path: '/home',
    },
    {
      title: '临时',
      key: '6',
      icon: 'el-icon-platform-eleme',
      path: '/temp',
    },
  ];
  const tableMenu = [
    {
      title: '原汁原味',
      key: '3',
      icon: 'el-icon-message-solid',
      path: '/test',
    },
    {
      title: '加工生产',
      key: '4',
      icon: 'el-icon-s-goods',
      path: '/table-list',
    },
    {
      title: '表格拖拽',
      key: '5',
      icon: 'el-icon-rank',
      path: '/sort-table',
    },
  ];
  const newMenus = [
    {
      title: 'react微应用',
      key: '7',
      icon: 'el-icon-s-opportunity',
      path: '/mic/react/list',
    },
    {
      title: 'vue微应用',
      key: '8',
      icon: 'el-icon-video-camera-solid',
      path: '/mic/vue/list',
    },
    {
      title: 'static微应用',
      key: '9',
      icon: 'el-icon-s-platform',
      path: '/static',
    },
  ];

  export default {
    name: 'app',
    data() {
      return {
        obj: {},
        isRouterAlive: true,
        menus,
        tableMenu,
        newMenus,
      };
    },
    provide() {
      // 通过provide传递给子代，谁需要谁获取下就OK了
      return {
        reload: this.reload,
      };
    },
    created() {},
    mounted() {
      actions.onGlobalStateChange((state, prevState) => {
        // state: 变更后的状态; prevState: 变更前的状态
        console.log('主应用观察者：改变前的 ', prevState);
        console.log('主应用观察者：改变后的 ', state);
        if (state.scen_id) {
          console.log(
            '跳转到详情页',
            this.$router.history.push(`/mic/react/detail/${state.scen_id}`)
          );
        }
      });

      // /*TODO: 基于浏览器原生事件做通信*/
      // window.evt = document.createEvent("HTMLEvents");
      // window.evt.initEvent("handleData", false, false);
      // document.addEventListener('handleData', this.handelData, false);

      /*TODO: 基于浏览器原生事件做通信 可传值 */
      function createEvent(params, eventName = 'emit') {
        return new CustomEvent(eventName, { detail: params });
      }

      window.cEvt = createEvent({ handelData: this.handelData, jumpUrl: this.jumpUrl });
    },
    computed: {
      activeMenu() {
        return this.$route.path;
      },
      ...mapGetters(['getRouter']),
      ...mapState({
        num: (state) => state.router.list,
        includes: (state) => state.router.includes,
      }),
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => (this.isRouterAlive = true));
      },
      jumpUrl(url) {
        this.$router.history.push(url);
      },
      handelData(...opt) {
        this.obj = Object.assign(this.obj, ...opt);
        return this.obj;
      },
    },
  };
</script>

<style type="text/scss" scoped>
  .el-header {
    text-align: right;
    font-size: 12px;
    background-color: #191a23;
    color: #000;
    height: 50px !important;
    line-height: 50px;
  }

  .el-header-new {
    background-color: #ffffff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    padding-left: 0 !important;
    font-weight: 500;
    font-size: 14px;
  }

  .header_l {
    width: 200px;
    height: 100%;
    float: left;
    background-color: rgb(25, 26, 35);
    box-sizing: border-box;
    border-bottom: 1px solid #454b61;
    transition: width 0.3s;
    overflow: hidden;
  }

  .dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login {
    width: 150px;
    height: 30px;
    background: #38383d;
    margin: 10px auto 0;
  }

  .el-aside {
    color: #333;
  }

  .el-menu {
    border: 0 !important;
  }

  .main {
    width: calc(100% - 200px);
    padding: 20px;
    box-sizing: border-box;
  }
</style>
