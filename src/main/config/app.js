import express from 'express'
import morgan from 'morgan'
import { config as dotenv } from 'dotenv';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

import articleRoute from '../../routes/article.route.js'

const app = express();
app.set('port', process.env.PORT || 3000);

dotenv();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', articleRoute);

app.use(express.static(__dirname + '/public'));

export default app;