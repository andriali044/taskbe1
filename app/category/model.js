const mongoose = require('mongoose');;
const {model, Schema} = mongoose;

let categorySchema = Schema({
    name: {
        type: String,
        minlength: [3, 'panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'panjang nama kategori maximal 20 karakter'],
        required: [true, 'Nama kategori harus di isi']
    }
})

module.exports = model('Category', categorySchema);