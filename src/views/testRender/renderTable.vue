<template>
    <TableRender
            ref="TableRender"
            :tableData="tableData"
            :tableCols="tableCols"
            :paginationParam="paginationParam"
            :customColum="customColum"
            @changePageSize="changePageSize"
            @sortChange="sortChange"
    >
    </TableRender>

</template>

<script>
  import TableRender from './components/tableR'

  export default {
    name: "renderTable",
    components: {
      TableRender
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王晶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王晶',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王晶',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王晶',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableCols: [
          {
            label: "日期",
            prop: "date",
            width: "800px"
          },
          {
            label: "姓名",
            slot: "name",
            prop: "name",
            sortable: true,
            fixed: true
          },
          {
            label: "地址",
            slot: "address",
            align: 'center',
            sortable: 'custom',

            "header-align": "center",
          },
          {
            label: "姓名",
            slot: "name",
            prop: "name",
            sortable: true
          },
          {
            label: "地址",
            slot: "address",
            align: 'center',
            sortable: 'custom',

            "header-align": "center",
          },
          {
            label: "上传",
            slot: "upload",
            prop: "upload",
            sortable: true
          },
          {
            label: "地址",
            slot: "address",
            align: 'center',
            sortable: 'custom',

            "header-align": "center",
          },
          {
            label: "姓名",
            slot: "name",
            prop: "name",
            sortable: true
          },
          {
            label: "地址",
            slot: "address",
            align: 'center',
            sortable: 'custom',

            "header-align": "center",
          },
          {
            label: "操作",
            width: '600px',
            slot: "operation",
          },
        ],
        paginationParam: {
          total: 50,
          page: 1,
          size: 10,
          pageSizes: [10, 20, 30]
        },
        operationArr: [
          {
            name: '删除',
            code: 'del'
          },
          {
            name: '编辑',
            code: 'edit'
          }
        ],


      }
    },
    created() {
      let arr = Array()
      arr.length = 2
      arr[1] = 0
      arr[0] = 8

      console.log(arr)
      console.log(Array.apply(null, [1, 2]))

    },
    methods: {
      customColum(scope, col, prop, h) {
        let _this = this
        switch (col) {
          case 'operation':
            return h('div',
                Array.apply(null, {length: _this.operationArr.length}).map(function (x, index) {
                  return h('el-button', {
                    props: {
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        _this.onAction(_this.operationArr[index].code)
                      }
                    }
                  }, _this.operationArr[index].name)
                })
            )
            break;
          case 'name':
            return h('el-tag',
                {},
                [
                  scope.row.name
                ]
            )
            break;
          case 'upload':
            return h('el-upload',
                {
                  props:
                      {
                        'file-list': [{
                          name: 'food.jpeg',
                          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                        }, {
                          name: 'food2.jpeg',
                          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                        }],
                        'action':"https://jsonplaceholder.typicode.com/posts/",
                        'on-remove': _this.handleRemove
                      }
                },
                [
                  h('el-button',
                      {},
                      [
                        '上传'
                      ]
                  ),
                  h('div',
                      {
                        props:{
                          slot:"tip"
                        }
                      },
                      [
                        '上传500k'
                      ]
                  )


                ]
            )


        }

      },
      changePageSize(page, size) {
        this.paginationParam.page = page
        this.paginationParam.size = size
        console.log(this.paginationParam)
      },
      sortChange(column, prop, order) {
        console.log(column)
        console.log(prop)
        console.log(order)
      },
      onAction(code) {
        switch (code) {
          case 'del':
            console.log('del')
            break;
          case 'add':
            console.log('add')
            break;
          case 'edit':
            console.log('edit')

        }
      },
      handleRemove(){
        console.log(this.$refs.TableRender)
        this.$nextTick(() => {
          this.$refs.TableRender.$refs.elTable.doLayout()

        })
      }
    }
  }
</script>

<style scoped>

</style>
