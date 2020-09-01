import table from "../../../mixins/table"

export default {
  mixins: [table],
  props: {
    otherTableParams: { // 设置table其他参数
      type: Object,
      default () {
        return {}
      }
    },
    otherPaginationParams: { // 设置分页其他参数
      type: Object,
      default: function () {
        return {}
      }
    },
    tableColumn: { // table的column
      type: Array,
      default: function () {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleButtons(item, record) {
      // 处理操作部分按钮 -> 可以在外面自定义，必须是jsx
      if (item.handleButtons) return item.handleButtons(record);
      return (
        !!item.list.length && item.list.map((item) => {
          return (
            <el-button
              disabled={item.disabled}
              key={item.title}
              type="text"
              size="small"
              style={item.styles}
              onClick={() => item.cb(record)}
            >
              {item.title}
            </el-button>
          )
        })
      );
    },
    // handleCurrentChange(val) {
    //   this.$emit('currentChange', val);
    // },
  },
  mounted() {
  },
  render() {
    const {tableOptions, paginationOptions, paginationOptionsMethod,
      tableOptionsMethod, otherTableParams, tableColumn, multiple} = this;
    return (
      <div>
        <el-table
          {...{
            props: {
              ...tableOptions,
              ...otherTableParams.props,
            },
            on: {
              ...tableOptionsMethod,
              ...otherTableParams.on
            }
          }}
        >
          {/* table多选 */}
          {
            multiple && (
              <el-table-column
                type="selection"
                width="55"
                fixed={'left'}
              />
            )
          }
          {/* table列表 */}
          {
            tableColumn.map((item) => {

              if (item.type === 'button') {
                // 操作部分
                return (
                  <el-table-column
                    label={item.label || '操作'}
                    width={item.width || '88'}
                    fixed={item.fixed || 'right'}
                    {...{
                      scopedSlots: {
                        default: ({row}) => {
                          return this.handleButtons(item, row)
                        }
                      }
                    }}
                  />
                )
              }
              return (
                <el-table-column
                  props={item}
                  key={item.prop}
                  {...{
                    // 自定义的渲染方式，拓展性
                    scopedSlots: {
                      default: ({row}) => {
                        return item.render ? item.render(row[item.prop], row) : row[item.prop]
                      }
                    }
                  }}
                />
              )
            })
          }
        </el-table>
        {/*分页*/}
        <el-pagination
          {...{
            class: paginationOptions.class,  // 支持拓展
            props: {
              ...paginationOptions,
            },
            on: {
              ...paginationOptionsMethod,
            },
          }}
        />
      </div>
    );
  }
};