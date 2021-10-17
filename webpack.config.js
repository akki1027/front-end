const path = require('path');
const glob = require("glob");


// src/js/以下のjsファイル全て
const entries = glob.sync("./src/js/*.js").map(path => [path.replace('./src/js/', '').replace('.js', ''), path]);
const entryObj = Object.fromEntries(entries);


module.exports = {
    mode: 'production',
    entry: entryObj,
    output: {
        // 出力ファイルを置くディレクトリ
        path: path.resolve(__dirname, 'public/js'),
        // 出力ファイル名
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                // 拡張子
                test: /\.js$/,
                // babelを通さないディレクトリ
                exclude: /node_modules/,
                // Babel を利用する
                loader: "babel-loader",
                options: {
                    // プリセットを指定することで、ES2021 を ES5 に変換
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        ]
    }
};
