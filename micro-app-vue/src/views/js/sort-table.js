import Sortable from 'sortablejs';
import table from '@/mixins/table';

export default {
  name: 'TableList',
  mixins: [table],
  props: {},
  data() {
    return {
      column: [
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
        },
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
        },
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
        },
        {
          prop: 'roleName',
          label: '编辑',
          width: '180',
          fixed: 'right',
        },
      ],
      fullscreenLoading: true,
      paginationOptions: {
        pageSizes: [11, 21, 31, 40],
      },
    };
  },
  watch: {
    'tableOptions.data': {
      deep: true,
      handler: function () {
        // console.log(newData);
      },
    },
  },
  created() {
    this.queryList();
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
          _this.column[_this.column.length - 1].fixed = false;
        },
        onUnchoose: function () {
          // 取消选择元素
          _this.column[_this.column.length - 1].fixed = 'right';
        },
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableOptions.data.splice(oldIndex, 1)[0];
          _this.tableOptions.data.splice(newIndex, 0, currRow);
        },
      });
    },
    async queryList() {
      this.fullscreenLoading = true;
      const {
        data: {
          items,
          page: { totalRecord },
        },
      } = await this.$fetch(
        `http://123.57.68.113:8064/role?pageSize=${this.paginationOptions.pageSize}&pageNum=${this.paginationOptions.currentPage}`,
        {
          headers: {
            Authentication: this.$store.getters.token,
          },
        }
      );
      this.handlePageData(items, totalRecord);
      this.fullscreenLoading = false;
    },
  },
};
