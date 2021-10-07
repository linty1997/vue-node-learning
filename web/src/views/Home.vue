<template>
  <div>
    <swiper :options="swiperoption" :autoplay="swiper_options.autoplay" :loop="swiper_options.loop" :speed="swiper_options.speed" :pagination="swiper_options.pagination">
      <swiper-slide>
        <img class="w-100" src="../assets/images/10.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/11.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/12.png">
      </swiper-slide>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap ">
        <div class="nav-item mb-3"
          v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">最新公告</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
          <i class="mr-1 fas fa-angle-double-up"></i> <!-- sprite sprite-arrow -->
          <span>摺疊</span>
      </div>
    </div>
    
    <!-- end of nav icons -->

    <m-card icon="neos" title="新聞資訊">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">熱門</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新聞</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活動</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">賽事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新聞]</span>
              <span>|</span>
              <span>這就是標題沒錯就只是個標題不要懷疑啦</span>
              <span>10/01</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>

    


  </div>
</template>

<script>
import {reactive,ref} from 'vue';
// 使用swiper的compositon API
import SwiperCore, {Autoplay,Pagination} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Autoplay,Pagination]);
export default {
	name:'Home',
	components:{
      Swiper,
      SwiperSlide,
	},
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    }
  },
	setup() {
                // swiper相關配置屬性放在swiper_options這個變數裡
		let swiper_options = reactive({
			autoplay:{
				delay:3000,
				disableOnInteraction: false
			},
			loop:true,
			speed:1000,	
			pagination:{
				clickable: true,    
			}
		})
                // 將swiper_options返回給模板中的swiper元件使用
		return {swiper_options};
	}
}

</script> 

<style lang="scss">
@import '../assets/scss/_variables.scss';
.swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: rgb(0, 0, 0);
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
}
.swiper-pagination {
  text-align: right;
  padding-bottom: 0.5rem;
  padding-right: 0.75rem;
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

</style>
