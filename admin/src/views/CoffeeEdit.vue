<template>
  <div class="categoryedit">
    <h1>{{id ? '編輯' : '新增'}}咖啡</h1>
    <el-form label-width="120px" @submit.prevent="save">
        <el-tabs type="border-card">
            <el-tab-pane label="商品資料">
                <el-form-item label="名稱">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>
                <el-form-item label="圖片">
                    <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL + '/upload'"
                        :show-file-list="false"
                        :on-success="afterUpload"
                    >
                        <img v-if="model.icon" :src="model.icon" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="售價">
                    <el-input v-model="model.price"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品詳情" name="detail">
                <el-form-item label="風味">
                    <el-select v-model="model.categories" multiple>
                        <el-option v-for="item of categories" :key="item._id"
                        :label="item.name" :value="item._id"></el-option>
                    </el-select>    
                </el-form-item>
                <el-form-item label="產地">
                    <el-select v-model="model.origins" >
                        <el-option v-for="item of origins" :key="item._id"
                        :label="item.name" :value="item._id"></el-option>
                    </el-select>    
                </el-form-item>
                <el-form-item label="酸度">
                    <el-rate style="margin-top:0.6rem" show-score v-model="model.tastes.acidity"></el-rate>
                </el-form-item> 
                <el-form-item label="醇度">
                    <el-rate style="margin-top:0.6rem" show-score v-model="model.tastes.body"></el-rate>
                </el-form-item>
                <el-form-item label="平衡度">
                    <el-rate style="margin-top:0.6rem" show-score v-model="model.tastes.balance"></el-rate>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品介紹" name="description">
                <el-form-item label="商品介紹">
                    <el-input type="textarea" v-model="model.description"></el-input>
                </el-form-item>
            </el-tab-pane>
        </el-tabs>
        <el-form-item style="margin-top:0.5rem;">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {       
    props: {
        id:{}
    },     
    data(){
        return{
            categories:[], 
            origins:[], 
            model: {
                name: '',
                icon: '',
                tastes: {
                    acidity: 0,
                    body: 0,
                    balance: 0
                },
            }
        };
    },
    methods: {
        afterUpload(res){
            this.model.icon = res.url
        },
        async save(){
            let res
            if(this.id){
                res = await this.$http.put( `rest/coffees/${this.id}`, this.model )
            }
            else{
                res = await this.$http.post( 'rest/coffees', this.model )
            }
            this.$router.push('/coffees/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/coffees/${this.id}`)
            this.model = Object.assign({}, this.model, res.data)
        },
        async fetchCategories(){
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data
        }, 
        async fetchOrigins(){
            const res = await this.$http.get(`rest/origins`)
            this.origins = res.data
        }, 
    },
    created(){
        this.fetchOrigins()
        this.fetchCategories()
        this.id && this.fetch()
    }
}
</script>

<style>

</style>