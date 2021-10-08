<template>
    <m-card :icon="icon" :title="title" >
        <div class="nav jc-between">
            <div class="nav-item" :class="{active: active===i}"
            v-for="(category, i) in categories" :key="i"
            @click="active = i">
                <div class="nav-link">{{category.name}}</div>
            </div>
        </div>  
        <div class="pt-3">
            <swiper ref="list" class="alist"
                @slide-change="() => active = listactive()">        
                <swiper-slide v-for="(category, i) in categories" :key="i"> 
                    <slot name="items" :category="category"></slot>
                </swiper-slide>
            </swiper>
        </div>
    </m-card>
</template>

<script>
import SwiperCore, {Autoplay,Pagination} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.scss';
import { onMounted,getCurrentInstance, ref } from "vue";
export default {
    setup(){
        onMounted(() => {
            const { proxy } = getCurrentInstance()
            console.log(proxy.$refs)
        })
    },
    
    methods:{
        listactive(){
            
            // const { proxy } = getCurrentInstance()
            // const x = document.getElementsByClassName('alist')
            // console.log(x.$swiper)
            //设置字体颜色为红色
            // console.log($refs.list.swiper.activeIndex)
        }
    },
	components:{
      Swiper,
      SwiperSlide,
	},
    props: {
        icon: { type: String, required: true },
        title: { type: String, required: true },    
        categories: { type: Array, required: true },
    },
    data(){
        return {
            active: 0
        }
    },
};
</script>

<style>

</style>







