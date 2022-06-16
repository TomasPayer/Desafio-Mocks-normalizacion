const express =  require('express');
const usersRouter = require('./src/routes/users')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', usersRouter);

const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})
