import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { router } from '../routs/rounts.js';

const app = express();

app.set('view engine','ejs');
app.set('views', './views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('publics'));

app.use(router)

export {app};
