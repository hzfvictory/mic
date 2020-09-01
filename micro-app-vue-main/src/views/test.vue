<template comments>
    <div>
        <h1>注释<!--有注释的功能--></h1>

        <el-card class="anoCard"
                 v-loading="fullscreenLoading"
        >
            <el-table
                    :data="tableOptions.data"
                    stripe
                    border
                    size="small"
            >
                <el-table-column
                        prop="roleId"
                        label="序号"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="roleName"
                        label="角色名称"
                        width="110">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建时间">
                    <template slot-scope="scope">
                        {{scope | timeFormat}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="edit"
                        label="操作"
                        fixed="right"
                        width="180">
                </el-table-column>
            </el-table>

            <el-pagination
                    class="fyDiv"
                    background
                    :hide-on-single-page="paginationOptions.showPage"
                    :layout="paginationOptions.layout"
                    :page-sizes="paginationOptions.pageSizes"
                    :total="paginationOptions.total"
                    :page-size="paginationOptions.pageSize"
                    :current-page="paginationOptions.currentPage"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            />

            <div @click="resetTable">重置table</div>
        </el-card>
    </div>
</template>
<script>
  import moment from "moment"
  import React from "react"
  import table from "../mixins/table"

  export default {
    name: 'TableList',
    mixins: [table],
    components: {},
    props: {},
    data() {
      return {
        fullscreenLoading: true,
        paginationOptions: {
          pageSizes: [11, 21, 31, 40],
        },
      }
    },
    methods: {
      async queryList() {
        this.fullscreenLoading = true;
        const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${this.paginationOptions.pageSize}&pageNum=${this.paginationOptions.currentPage}`, {
          headers: {
            Authentication: this.$store.getters.token
          },
        });
        this.handlePageData(items, totalRecord);
        this.fullscreenLoading = false;
      },
      resetTable() {
        Object.assign(this.$data, this.$options.data());
        this.fullscreenLoading = false;
      }
    },
    filters: {
      timeFormat(scope) {
        return moment(scope.row.createTime).format('YYY-MM-DD HH:mm:ss')
      },
    },
    watch: {},
    computed: {},
    created() {
      this.queryList()
    },
    mounted() {
      console.log(this)

      // console.log(ReactDom.render(React.createElement("div", null, "Hello hzf", /*#__PURE__*/React.createElement("span", null, "12123")),app));
      // console.log(React.createElement("div", null, "Hello hzf", /*#__PURE__*/React.createElement("span", null, "12123")));
      //
      // const h = this.$createElement;
      //
      // let a = h('ul', {id: 'ol-list'}, ['123123',
      //   h('li', {class: 'item1', style: "list-style: none"}, ['Item1']),
      //   h('li', {class: 'item2', id: 'li2', style: "color: pink", onclick: 'printStr ()'}, ['Item2']),
      //   h('li', {class: 'item3', onclick: 'Alert(1234)'}, ['Item3'])
      // ])
      // console.log(a);
    },
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
