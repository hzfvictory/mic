<template>
    <div>
        <table-list v-loading="loading" @hook:mounted="listenMounted" ref="table" :multiple="true"
                    :otherTableParams="otherTableParams"
                    :tableColumn="column"/>
    </div>
</template>
<script>
  export default {
    name: 'tableLists',
    props: ['id'],
    data() {
      return {
        loading: true,
        otherTableParams: { // table的参数
          props: {
            border: true,
            stripe: true,
            size: 'small',
            'default-sort': {prop: 'createTime', order: 'ascending'}
          },
          on: {}
        },
        otherPaginationParams: {},// 分页的参数
        column: [  // table的列
          {
            prop: "roleId",
            label: "序号",
            width: 100,
          },
          {
            prop: 'roleName',
            label: "角色名称",
            'width': "110"
          },
          {
            prop: "createTime",
            label: "创建时间",
            sortable: true
          },
          {
            prop: 'roleName',
            label: "角色名称",
          },
          { // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: "设置",
            list: [
              {title: '查看', disabled: false, styles: {color: 'red'}, cb: this.seeHandle},
              {title: '弹框', cb: this.editHandle},
            ],
          }
        ],
        hasFirst: true,
        isRouterAlive: true,
        ddd: ''

      }
    },
    inject: ["reload"],
    created() {
      console.log('我第一次进来');
      this.$nextTick(this.queryList);
    },
    methods: {
      async queryList() { // 子组件默认的请求名称
        this.loading = true
        // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
        const {paginationOptions: {pageSize, currentPage}, handlePageData} = this.$refs.table; // 获取子组件mixins里面的参数
        const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${pageSize}&pageNum=${currentPage}`, {
          headers: {
            Authentication: this.$store.getters.token
          },
        });
        this.hasFirst = false
        this.loading = false

        handlePageData(items, totalRecord); // mixin里面统一处理
      },
      editHandle(...options) {
        console.log(options, '编辑');

        // this.reload();

        this.$mymessage({
          type: 'warning',
          content: '你好坏啊，我好喜欢',
          duration: 6000
        })


      },
      seeHandle(...options) {
        // let newpage = this.$router.resolve({
        //   name: 'messageInfo',
        //   path: 'home',
        //   query: {
        //     objectType: 1,
        //     infoId: 111
        //   }
        // })
        // window.open(newpage.href, '_blank');
        console.log(options, '查看');
        this.$router.push('/table-detail')
      },
      listenMounted() {
        console.log('@hooks 侦查 ');
      }
    },
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>


<!--
多选框不生效，是因为数据请求的数据更新了
-->