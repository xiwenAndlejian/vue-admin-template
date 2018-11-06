<template>
  <div class="app-container">
    <log-table :list="pageData.rows" :list-loading="listLoading" :msg="1"></log-table>
    <el-pagination
      :page-sizes="[10, 25, 50, 100]"
      :page-size="10"
      :total="pageData.totalRows"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevPage"
      @next-click="handleNextPage">
    </el-pagination>
  </div>
</template>

<script>
import { getLogList } from '@/api/log'
import LogTable from './components/LogTable'

export default {
  components: {
    LogTable
  },

  data() {
    return {
      listLoading: true,
      pageData: {
        rows: [],
        limit: 10,
        pageNum: 1,
        totalPages: 0,
        totalRows: 0
      },
      pageParam: {
        // 当前页数 & 每页条数
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getLogList(this.pageParam).then(data => {
        this.pageData = data.payload
        this.listLoading = false
        console.log(`current page: ${this.pageData.pageNum}`)
      })
    },
    // 每页条数修改
    handleSizeChange(size) {
      this.pageParam.page = 1
      this.pageParam.limit = size
      this.fetchData()
    },
    // 当前页数修改
    handleCurrentChange(currentPage) {
      this.pageParam.page = currentPage
      this.fetchData()
    },
    // 下一页
    handlePrevPage(currentPage) {
      this.handleCurrentChange(currentPage)
    },
    // 上一页
    handleNextPage(currentPage) {
      this.handleCurrentChange(currentPage)
    }
  }
}
</script>

<style>
</style>
