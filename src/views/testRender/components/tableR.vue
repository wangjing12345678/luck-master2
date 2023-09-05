<script>
  export default {
    name: "tableR",
    props: {
      tableData: {
        type: Array
      },
      tableCols: {
        type: Array
      },
      customColum: {
        type: Function
      },
      paginationParam: {
        type: Object
      }


    },
    methods: {
      renderTable(h, children) {
        children = []
        this.tableCols.forEach(x => {
          children.push(this.renderColums(h, x))

        })
        return h('el-table',
            {
              ref:'elTable',
              props: {
                data: this.tableData,

              },
              on: {
                'sort-change': ({column, prop, order}) => {
                  this.$emit('sortChange', column, prop, order)
                }
              }
            },
            children
        )
      },
      renderColums(h, data) {
        let _this = this
        return h('el-table-column',
            {
              props: {
                prop: data.prop,
                label: data.label,
                sortable: data.sortable,
                fixed:data.fixed,
                width:data.width
              },
              scopedSlots: data.slot ? {
                default: (props) => {
                  return _this.customColum(props, data.slot, data.prop, h)
                }
              } : null
            }
        )
      },
      renderPagination(h) {
        let _this = this
        return h('el-pagination',
            {
              props: {
                total: _this.paginationParam.total,
                'current-page': this.paginationParam.page,
                'page-size': this.paginationParam.size,
                'page-sizes': this.paginationParam.pageSizes,
                'layout': 'total, sizes, prev, pager, next, jumper'
              },
              on: {
                'current-change': (page) => {
                  _this.$emit('changePageSize', page, _this.paginationParam.size)
                },
                'size-change': (size) => {
                  _this.$emit('changePageSize', _this.paginationParam.page, size)
                }
              }

            })

      }
    },
    render(h) {
      return h('div', {
        ref: 'root'
      }, [
        this.renderTable(h, []),
        this.renderPagination(h)
      ])
    },


  }
</script>

<style scoped>

</style>
