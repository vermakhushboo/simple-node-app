const app = require('express')();
const hello = require('./hello');

app.get('/', hello);

app.listen(3000, () => {
    console.log('Running');
});