import express from 'express';
const router = express.Router();

import * as articleCtrol from '../controllers/article.controller.js';

router.get('/article', articleCtrol.getArticles);

router.post('/createArticle', articleCtrol.createNewArticle);

router.put('/article/:id', articleCtrol.updateArticle);

router.delete('/article/:id', articleCtrol.deleteArticle);

export default router;