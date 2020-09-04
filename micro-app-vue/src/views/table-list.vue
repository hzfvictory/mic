<template>
    <div>
        <table-list
                v-loading="loading"
                @hook:mounted="listenMounted"
                ref="table"
                :multiple="true"
                :otherTableParams="otherTableParams"
                :tableColumn="column"/>
    </div>
</template>
<script>
  import actions from "@/shared/actions";

  export default {
    name: 'tableLists',
    props: ['id'],
    data() {
      return {
        loading: true,
        jumpUrl: null,
        otherTableParams: { // table的参数
          props: {
            border: false,
            stripe: false,
            size: 'medium',
            'default-sort': {prop: 'createTime', order: 'ascending'}
          },
          on: {}
        },
        otherPaginationParams: {},// 分页的参数
        column: [  // table的列
          {
            label: 'id',
            prop: 'id',
          },
          {
            label: '名称',
            prop: 'name',
            render: (text) => {
              return <a>{text}</a>
            }
          },
          {
            label: '图片',
            prop: 'cover',
            render: (text) => {
              return <img class="avatar" alt={text} src={text}/>
            }
          },
          {
            label: '时间',
            prop: 'created_date',
          },
          {
            label: '状态',
            prop: 'status',
          },
          { // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: "操作",
            list: [
              {title: '编辑', disabled: false, styles: {color: '#409EFF'}, cb: this.seeHandle},
              {title: '弹框', cb: this.editHandle},
            ],
          },
        ],
        hasFirst: true,
        isRouterAlive: true,
      }
    },
    inject: ["reload"],
    created() {
      this.$nextTick(this.queryList);
    },
    mounted() {
      actions.onGlobalStateChange((state) => {
        this.jumpUrl = state.jumpUrl
      }, true);
    },
    methods: {
      async queryList() { // 子组件默认的请求名称
        this.loading = true
        // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
        const {paginationOptions: {pageSize, currentPage}, handlePageData} = this.$refs.table; // 获取子组件mixins里面的参数
        const {data, total} = await this.$fetch(`https://api.justcome.cn/admin/1068068178288054272/scenics?offset=${currentPage}&limit=${pageSize}&includeShop=true`, {
          headers: {
            Authentication: this.$store.getters.token
          },
        });
        this.hasFirst = false
        this.loading = false

        handlePageData(data, total); // mixin里面统一处理
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
      seeHandle(options) {
        // let newpage = this.$router.resolve({
        //   name: 'messageInfo',
        //   path: 'home',
        //   query: {
        //     objectType: 1,
        //     infoId: 111
        //   }
        // })
        // window.open(newpage.href, '_blank');
        // actions.setGlobalState({scen_id: options.id});
        this.jumpUrl(`/menu/react/detail/${options.id}`)
      },
      listenMounted() {
        console.log('@hooks 侦查 ');
      }
    },
  }
</script>

<style >
    .avatar {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>