const path = require('path')

exports.module = {
    
    entry: "./src/index.js", 
    output: {
        filename: "bundle.js", 
        path: path.resolve(__dirname, 'build'), 
        publicPath: "/"
    }

}