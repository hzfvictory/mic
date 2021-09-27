<template>
  <el-card class="anoCard" v-loading="fullscreenLoading">
    <el-table
      :data="tableOptions.data"
      size="small"
      row-key="roleId"
      ref="table"
      @cell-mouse-enter.once="rowDrop"
    >
      <el-table-column prop="roleName" label="拖拽区域">
        <template>
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
  import list from './js/sort-table';

  export default list;
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
