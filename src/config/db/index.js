const mongoose = require('mongoose');

async function Connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log("Kết nối thành công");
    }
    catch (err) {
        console.log("Kết nối thất bại");
    }
}

module.exports = {Connect};