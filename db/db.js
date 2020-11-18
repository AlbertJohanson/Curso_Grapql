const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const connect = async function () {
mongoose
.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(e => console.log(e));

}

module.exports =  connect 