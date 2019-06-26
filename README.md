
// Node v
v8.9.4 動作確認済み

// ディレクトリ
src ソースファイル
dist buildファイル (ソースマップ付き, 圧縮なし、Git管理外)
result 納品ファイル

// コマンド
`$npm run dev`, サーバー, build, watch
`$npm run clean` buildファイルリセット
`$npm run result` 納品ファイル生成

// ポート重複エラー
Error: listen EADDRINUSE 192.168.0.71:8000
`$killall node` でプロセスを終了するか、
webpack.config.dev.jsの"port"を変更すると治る。

// pugのパーシャルファイルが出力されてしまう場合
`$npm i github:pugjs/pug-cli#master`
参考 : https://qiita.com/soarflat/items/48cec8fb19252a3fc4ad

// 外部ライブラリを使用する場合
デフォルトでjqueryをどのjsモジュールでもimport構文なしで使用できる。(webpackでjqueryごとバンドル)
外部ファイルを読み込んで開発する場合はwebpack.configファイルの"externals"、または"webpack.ProvidePlugin"の設定をする。
