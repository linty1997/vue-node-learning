<template>
  <div>
    <h1>管理員列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="username" label="用戶名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
      <template v-slot:default="scope">
        <el-button type="primary" size="small" @click="$router.push(`/admin_users/edit/${scope.row._id}`)">編輯</el-button>
        <el-button type="primary" size="small" @click="remove(scope.row)">刪除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  data(){
    return {
      items:[]
    }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get('rest/admin_users')
      this.items = res.data
    },
    async remove(row){
      ElMessageBox.confirm(
        `是否確定刪除 : "${row.name}" ?`,
        '提示',
        {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async () => {
          const res = await this.$http.delete(`rest/admin_users/${row._id}`)
          ElMessage({
            type: 'success',
            message: '刪除成功.'
          })
          this.fetch()
        });
    }
  },
  created(){
    this.fetch()
  }
}
</script>