<template>
    <el-card
            class="anoCard"
            v-loading="fullscreenLoading"
    >
        <el-table
                :data="tableOptions.data"
                border
                size="small"
                row-key='roleId'
                ref="table"
                @cell-mouse-enter.once='rowDrop'
        >
            <el-table-column
                    prop="roleName"
                    label="拖拽区域"
            >
                <template slot-scope="scope">
                    <el-button type="text" size="small" class="handle el-icon-rank"></el-button>
                </template>
            </el-table-column>
            <el-table-column
                    v-for="item of column"
                    :key="item.prop"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"
                    :fixed="item.fixed"
            />
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
    </el-card>
</template>
<script>
  import React from "react"
  import Sortable from 'sortablejs';
  import table from "../mixins/table"

  export default {
    name: 'TableList',
    mixins: [table],
    props: {},
    data() {
      return {
        column: [
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
            width: 150,
          },
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
            width: 150,
          },
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
            width: 150,
          },
          {
            prop: 'roleName',
            label: "编辑",
            width: "180",
            fixed: 'right'
          },
        ],
        fullscreenLoading: true,
        paginationOptions: {
          pageSizes: [11, 21, 31, 40],
        },
      }
    },
    watch: {
      'tableOptions.data': {
        deep: true,
        handler: function (newData) {
          // console.log(newData);
        }
      }
    },
    created() {
      this.queryList()
    },
    methods: {
      //行拖拽
      rowDrop() {
        const tbody = this.$refs.table.$el.querySelector('.el-table__body-wrapper tbody');
        const _this = this;
        Sortable.create(tbody, {
          handle: '.handle',
          animation: 150,
          onChoose() {
            //选择元素
            _this.column[_this.column.length - 1].fixed = false
          },
          onUnchoose: function (evt) {
            // 取消选择元素
            _this.column[_this.column.length - 1].fixed = 'right'

          },
          onEnd({newIndex, oldIndex}) {
            const currRow = _this.tableOptions.data.splice(oldIndex, 1)[0]
            _this.tableOptions.data.splice(newIndex, 0, currRow)
          }
        })
      },
      async queryList() {
        this.fullscreenLoading = true;
        const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${this.paginationOptions.pageSize}&pageNum=${this.paginationOptions.currentPage}`, {
          headers: {
            Authentication: this.$store.getters.token
          },
        });
        this.handlePageData(items, totalRecord);
        this.fullscreenLoading = false;
      }
    },
  }
</script>

<style type="text/scss" lang="scss" scoped>
    .handle {
        cursor: move;
        font-size: 18px !important;
        font-weight: bolder;
    }

    ::v-deep .hover-row > td {
        background-color: #fff !important;
    }

    ::v-deep .sortable-chosen > td {
        // 拖动的样式
        background-color: #eff2f6 !important;
    }

    ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
        // 修复拖拽的时候hover的不消失的问题
        background-color: #fff;
    }
</style>
