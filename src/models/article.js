import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio'],
        unique: [true, 'Ya existe este titulo']
    },
    
    description: {
        type: String,
        required: [true, 'Descripcion obligatoria'],
        maxlength: [ 50, 'La descripcion no puede exceder los 50 caracteres' ],
        unique: [true, 'Ya existe una descripcion como esta']
    },

    date: {
        type: Date,
        default: Date.now
    },

    expire_at: {
        type: Date, 
        default: Date.now, 
        expires: 60 * 60 * 24 * 7
    }
});

export default model('Article', ArticleSchema);