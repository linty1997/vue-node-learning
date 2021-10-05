<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-message"></i>內容管理
          </template>
          <el-menu-item-group>
            <template #title>分類</template>
            <el-menu-item index="/categories/create">新增分類</el-menu-item>
            <el-menu-item index="/categories/list">分類列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>咖啡</template>
            <el-menu-item index="/coffees/create">新增咖啡</el-menu-item>
            <el-menu-item index="/coffees/list">咖啡列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>產地</template>
            <el-menu-item index="/origins/create">新增產地</el-menu-item>
            <el-menu-item index="/origins/list">產地列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <router-view></router-view>
        
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const item = {
      date: '2016-05-02',
      name: 'Dylan',
      address: '台中市',
    }

    const tableData = ref(Array(20).fill(item))

    return {
      tableData,
    }
  },
})
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>
