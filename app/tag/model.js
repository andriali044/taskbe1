const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const tagSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'panjang nama kategori maximal 20 karakter'],
        required: [true, 'nama kategori harus di isi']
    }
});

module.exports = model('tag', tagSchema)