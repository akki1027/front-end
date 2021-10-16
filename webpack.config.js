const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        // 出力ファイルを置くディレクトリ
        path: path.resolve(__dirname, 'public/js'),
        // 出力ファイル名
        filename: 'bundle.js',
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
