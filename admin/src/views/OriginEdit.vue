<template>
  <div class="categoryedit">
    <h1>{{id ? '編輯' : '新增'}}產地</h1>
    <el-form label-width="120px" @submit.prevent="save">
        <el-form-item label="地名">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="地圖">
            <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="afterUpload"
            >
                <img v-if="model.map" :src="model.map" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
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
            model: {
                name: '',
                map: ''
            },
        };
    },
    methods: {
        afterUpload(res){
            this.model.map = res.url
        },
        async save(){
            let res
            if(this.id){
                res = await this.$http.put( `rest/origins/${this.id}`, this.model )
            }
            else{
                res = await this.$http.post( 'rest/origins', this.model )
            }
            this.$router.push('/origins/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/origins/${this.id}`)
            this.model = res.data
        },
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>