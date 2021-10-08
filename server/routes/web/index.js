const { where } = require('../../models/AdminUser')

module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // // const Article = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    // const Hero = mongoose.model('Hero')
    
    // // 导入新闻数据
    router.get('/news/init', async (req, res) => {
        const parent = await Category.findOne({
            name: '新聞分類'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ['嫦娥源·梦皮肤特效研讨会开启啦~', '第二十七期大神问答精彩回顾', '王者荣耀携手多名艺术家讲述敦煌故事', '就是辣么燃!《魂斗罗：归来》新川渝版本了解一下？', '周年庆主题头像框方案票选结果公布', '10月8日全服不停机更新公告', '9月30日体验服停机更新公告', '9月30日全服不停机更新公告', '9月29日外挂专项打击公告', '9月29日净化游戏环境声明及处罚公告', '王者宝藏-限时点券大放送活动开启公告', '【微信用户专属】微信小程序“游戏礼品站”购买“钟馗-乐园奇幻夜”皮肤抽免单活动', '嫦娥源·梦皮肤特效研讨会开启啦~', '周年庆主题头像框方案票选结果公布', '【一转千年】集腰鼓兑好礼活动开启公告', '我的电竞假期Day7：抓住假期“小尾巴”，来一场说走就走的电竞较量', 'KPL预报丨背水一战，成都AG关键一分能否拿下？', '秋季赛快讯：MTG四连胜晋级S组，莫凡表现出色MVP三连', '【简讯】MTG晋级第二轮S组，苏州KSG遗憾掉入B组', '秋季赛快讯：厦门VG击败上海RNG.M，末将貂蝉五杀横扫战场']
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    router.get('/news/list', async (req, res) => {
        // const parent = await Category.findOne({
        //     name: '新聞分類'
        // }).populate({
        //     path: 'children',
        //     populate: {
        //         path: 'newsList'
        //     }
        // }).lean() 
        const parent = await Category.findOne({
            name: '新聞分類'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: {$slice: ['$newsList', 5]}
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '熱門',
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '熱門')
                    ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })

        res.send(cats) 
    })




    app.use('/web/api', router)
}   