<template>
  <div>
    <div class="topbar bg-black py-4 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30"/>
      <div class="px-2 flex-1">
        <div class="text-white">Coffee</div>
        <div class="text-grey-1 fs-xxs ">wow</div>
      </div>
      <button type="button" class="btn bg-primary">會員登入</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active ">
          <router-link class="nav-link" tag="div" to="/">首頁</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">商品</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">活動</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
