//robo 3t
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('db ok')
});

//创建schema对象 //类似表头
var Schema = mongoose.Schema;

var userSchema = new Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 },
    // title: String,
    // author: String,
    // body: String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});

//转化为数据模型
//插入insertMany
var User = mongoose.model('users', userSchema);
User.insertMany({ us: 'wangyi', ps: '123', age: 16 })
    .then((data) => {
        console.log(data)
        console.log('插入成功')
    })
    .catch((err) => {
        console.log('插入失败')
        console.log(err)
    })

//show collections
//db.users.find()
//查询find
User.find({ age: 16 })
    .then((data) => {
        console.log(data)
        console.log('查询成功')
    })
    .catch((err) => {
        console.log('查询失败')
        console.log(err)
    })


//删除remove
User.remove()
    .then((data) => {
        console.log(data)
        console.log('del成功')
    })
    .catch((err) => {
        console.log('del失败')
        console.log(err)
    })