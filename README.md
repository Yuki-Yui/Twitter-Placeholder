# ツイート打つところの文字を変える
twitterの「いまなにしてる？」のところを書き換える拡張機能です。  
たぶんchromiumベースのブラウザなら動くと思います。
## インストール方法
1. リポジトリをダウンロードするか ```git clone``` する
1. twitter_placeholder.js を編集
    ```JavaScript:twitter_placeholder.js
    let message = "ここに好きな文章を入力";
    ```
1. [拡張機能のページ](chrome://extensions/)に移動し、デベロッパーモードをオン
1. 画面上部の「パッケージ化されていない拡張機能を読み込む」をクリックし、cloneしたディレクトリを選択する