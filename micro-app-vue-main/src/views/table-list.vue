<template>
  <div>
    <div>{{ ddd }}</div>
    <counter></counter>

    <div>
      12
      <div id="message"></div>
    </div>

    <my-alert title="成功提示的文案" type="success"></my-alert>

    <input v-model="ddd" type="text" />
    <table-list
      @hook:mounted="listenMounted"
      ref="table"
      :multiple="true"
      :otherTableParams="otherTableParams"
      :tableColumn="column"
    />
  </div>
</template>
<script>
  export default {
    name: 'tableLists',
    props: ['id'],
    data() {
      return {
        otherTableParams: {
          // table的参数
          props: {
            border: true,
            stripe: true,
            size: 'small',
            'default-sort': { prop: 'createTime', order: 'ascending' },
          },
          on: {},
        },
        otherPaginationParams: {}, // 分页的参数
        column: [
          // table的列
          {
            prop: 'roleId',
            label: '序号',
            width: 100,
          },
          {
            prop: 'roleName',
            label: '角色名称',
            width: '110',
          },
          {
            prop: 'createTime',
            label: '创建时间',
            sortable: true,
          },
          {
            prop: 'roleName',
            label: '角色名称',
            //formatter  完全可以用render代替
            // render: (text, record) => {
            // console.log(record);
            // return <el-progress percentage="50"/>
            // },
          },
          {
            // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: '设置',
            list: [
              { title: '查看', disabled: false, styles: { color: 'red' }, cb: this.seeHandle },
              { title: '编辑', cb: this.editHandle },
            ],
            // handleButtons: () => (<div>111</div>)  // 自定义的内容
          },
        ],
        hasFirst: true,
        isRouterAlive: true,
        ddd: '',
      };
    },
    inject: ['reload'],
    created() {
      console.log('我第一次进来');
      this.$nextTick(this.queryList);
    },
    mounted() {
      // console.log(this.$options.data())
      console.log(this);
      // this.timer = setInterval(() => {
      //   console.log(Date.now())
      // }, 1000)
      // this.$once('hook:beforeDestroy', () => {
      //   clearInterval(this.timer);
      // })
    },

    activated() {
      if (this.hasFirst) return;
      this.queryList();
    },
    beforeRouteEnter(to, from, next) {
      window._store.dispatch('changeList', ['tableLists']);
      next();
      // next(vm => {})
    },
    beforeRouteLeave(to, from, next) {
      from.meta.scrollTop = document.documentElement.scrollTop;
      if (to.name !== 'table-detail') {
        this.$store.dispatch('changeList', []);
      }
      next();
    },
    // beforeRouteLeave(to, from, next) {
    //   if (to.name === 'table-detail') {
    //     if (!from.meta.keepAlive) {
    //       from.meta.keepAlive = true;
    //     }
    //   } else {
    //     from.meta.keepAlive = false;
    //     this.$destroy(); //销毁类页表页的实例，有坑
    //   }
    //   next()
    // }
    methods: {
      async queryList() {
        // 子组件默认的请求名称
        // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
        const {
          paginationOptions: { pageSize, currentPage },
          handlePageData,
        } = this.$refs.table; // 获取子组件mixins里面的参数
        const {
          data: {
            items,
            page: { totalRecord },
          },
        } = await this.$fetch(
          `http://123.57.68.113:8064/role?pageSize=${pageSize}&pageNum=${currentPage}`,
          {
            headers: {
              Authentication: this.$store.getters.token,
            },
          }
        );
        this.hasFirst = false;

        handlePageData(items, totalRecord); // mixin里面统一处理
      },
      editHandle(...options) {
        console.log(options, '编辑');

        // this.reload();

        this.$mymessage({
          type: 'warning',
          content: '你好坏啊，我好喜欢',
          duration: 6000,
        });
      },
      seeHandle(...options) {
        let newpage = this.$router.resolve({
          name: 'messageInfo',
          path: 'home',
          query: {
            objectType: 1,
            infoId: 111,
          },
        });
        // window.open(newpage.href, '_blank');
        console.log(options, '查看');
        this.$router.push('/table-detail');
      },
      listenMounted() {
        console.log('@hooks 侦查 ');
      },
    },
  };
</script>

<style type="text/scss" lang="scss" scoped></style>

<!--
多选框不生效，是因为数据请求的数据更新了
-->
