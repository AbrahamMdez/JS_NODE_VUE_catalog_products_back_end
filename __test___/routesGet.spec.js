import { config as dotenv } from 'dotenv';
import mongoose from 'mongoose'
import supertest from 'supertest'
import app from '../src/main/config/app.js'
import Article from '../src/models/article.js'

const { MONGO_URI_TEST } = process.env;

const api = supertest(app);

beforeAll(() => {
    mongoose.connect(MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex:true
    })
});

describe('GET/ test all routes path GET', () => {

    it('It should render all articles', async() => {
        const articlesToFind = await Article.find();
        await api
        .get('/article')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        
    })
});

afterAll( async () => {
    await mongoose.connection.close()
});
