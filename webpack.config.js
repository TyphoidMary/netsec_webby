const path = require('path')

module.exports = {
    entry: './client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'client', 'dist')
    }
}
