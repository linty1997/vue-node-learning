module.exports = app => {
    const express = require('express')  
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams: true
    })
    
    //創建
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    //更新
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    //刪除
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    //獲取列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })
    //獲取詳情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    //登入驗證
    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    
    app.use('/admin/api/rest/:resource',authMiddleware(), resourceMiddleware(), router)

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)  
    })

    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        //用用戶名找用戶
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 442, "使用者不存在")
        
        //密碼驗證
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 442, "密碼錯誤")
        
        //獲取 Token    
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({token})
    })

    //錯誤處理
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}
