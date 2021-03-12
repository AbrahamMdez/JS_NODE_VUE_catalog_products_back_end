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

describe('POST/ test all routes path POST', async() => {

    const newArticle = new Article ({
        title: 'Title 1',
        description: 'Description 1'
    })

    const articleSaved = await newArticle.save()
    const expected = 'Title 1'
    const actual = articleSaved.title;

    expect(actual).toEqual(expected)
    /* it('It should create a new article', async() => {
        await api
            .post('/createArticle')
            .send(newArticle)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(contents).toContain(newArticle.content)
    }) */
})

afterAll( async () => {
    await mongoose.connection.close()
});