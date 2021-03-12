import mongoose from 'mongoose';
const { MONGO_URI, MONGO_URI_TEST } = process.env;

const DB_CONNECTION = NODE_ENV === 'test' ? MONGO_URI_TEST : MONGO_URI;

mongoose.connect(DB_CONNECTION, ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}))

    .then( db => console.log(`DB conected to: ${DB_CONNECTION}`))
    .catch( err => console.log(err))