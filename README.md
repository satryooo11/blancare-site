# Blancare Dental Clinic ホームページ（公開用）

このリポジトリの中身がそのまま https://www.blancaredental.com/ で公開されます（GitHub Pages）。下の説明の `site/` は、このリポジトリのトップのことです。


`site/` フォルダがそのまま公開用のサイトです。サーバーや特別なツールは不要で、ファイルをそのまま置けば動きます。

```
site/
├── index.html        ページ本体（文章はすべてここ）
├── css/style.css     見た目（色・文字・余白）
├── js/main.js        スマホのメニュー開閉など
└── assets/           画像（ロゴ、写真）
```

## 写真の入れ方

`assets/` に次の名前で画像を入れるだけで、自動的に表示されます。入っていない間は灰色の枠に「どの写真か」が表示されます。

| ファイル名 | 使われる場所 | 推奨サイズ |
| --- | --- | --- |
| `doctor-miyazaki.jpg` | コンセプト・医師紹介（宮崎先生） | 正方形 640×640px（円形に表示） |
| `doctor-matsumoto.jpg` | 医師紹介（松本先生） | 正方形 640×640px（円形に表示） |
| `lecturer-sato.jpg` | 講師紹介（佐藤先生） | 正方形 640×640px（円形に表示） |
| `staff-hs.jpg` `staff-at.jpg` `staff-ra.jpg` | スタッフ紹介 | 正方形 640×640px（円形に表示） |
| `case1.jpg` `case2.jpg` `case3.jpg` | 施術症例（上が施術前、下が施術後） | 縦長 700×840px |
| `clinic-interior.jpg` `clinic-exterior.jpg` | 院内・外観の写真（アクセス欄） | 院内 横長 3:2、外観 縦長 2:3 |
| `feature-enamel.jpg` | 透明なエナメル質と象牙質の説明写真（文字なし。矢印の説明はHTML側の文字） | 横長 796×485 |
| `compare-h2o2-before.jpg` `compare-h2o2-after.jpg` `compare-poly-before.jpg` `compare-poly-after.jpg` | 過酸化水素のみ／ポリリン酸併用の比較写真（処理前・30分後の歯を1本ずつ） | 縦長 150×214 |
| `hero.jpg` | トップの背景（「自然に笑顔になれる口元へ」の後ろ） | 横長 2400×1350px |
| `ogp.jpg` | LINEやSNSでURLを送ったときの画像 | 1200×630px |

写真は長辺 1600px 以下、1枚 300KB くらいまでに縮小すると表示が速くなります。

## よく更新する場所（index.html）

- **お知らせ**：`<!-- お知らせ -->` の下の `<li>` を1行コピーして追加します。新しいものを上にします。
- **料金**：`<!-- 料金プラン -->` の表の中の金額を書き換えます。
- **診療時間**：`<table class="hours">` の `●` と `休` を入れ替えます。
- **Instagramの投稿**：下の「Instagram の投稿を差し替える」を見てください。

## 銀座移転のときの切り替え（準備済み）

銀座セレンシービル版は GitHub の `ginza-move` ブランチにまるごと保管してあります（住所・最寄駅・地図・title/OGP・JSON-LD が銀座版、院内・外観写真つき）。移転が決まったら、Claude に「銀座版に切り替えて」と伝えれば `ginza-move` の内容を `main` に反映して公開します。

自分で切り替える場合は `index.html` で次を直します。

| 場所 | 表参道（現在） | 銀座（移転後） |
| --- | --- | --- |
| `<title>` / meta description / og:description | 表参道のブランケアホワイトニング／表参道駅徒歩2分 | 銀座のブランケアホワイトニング／銀座駅徒歩5分 |
| ヒーローの `<span>表参道駅 徒歩2分</span>` | 表参道駅 徒歩2分 | 銀座駅 徒歩5分 |
| アクセスの `<dt>住所</dt>` | 東京都港区北青山3丁目8-8 カーム青山402 | 〒104-0061 東京都中央区銀座7丁目10-10 銀座セレンシービル |
| アクセスの `<dt>最寄駅</dt>` | 表参道駅から徒歩2分（セブンイレブンの隣） | 銀座駅・東銀座駅から徒歩5分、新橋駅から徒歩6分（要確認） |
| Googleマップの iframe と「Googleマップで開く」リンク | `q=35.665101,139.710504` | 住所で検索する URL に変更 |
| フッターの住所 | 北青山 | 銀座セレンシービル |
| JSON-LD（`<script type="application/ld+json">`） | 港区／107-0061／geo あり | 中央区／104-0061（geo は削除） |
| 院内・外観の写真ブロック | `<!-- 銀座移転後に有効化 -->` でコメントアウト中 | コメントを外す（画像 `assets/clinic-interior.jpg` と `assets/clinic-exterior.jpg` は入っています） |

移転後に確認したいこと：駅からの徒歩分数、階数・部屋番号、お知らせに「移転しました」の1行を入れるかどうか。

## Googleアナリティクス

`index.html` の上のほうにある `G-XXXXXXXXXX` を自分の測定IDに書き換え、前後の `<!--` と `-->` を消すと計測が始まります。

## 公開（GitHub Pages）— ドメインは blancaredental.com

今の Google サイトと同じ `www.blancaredental.com` で公開します（`blancaredental.com` だけで開いても `www` に転送されます）。`site/CNAME` にそのドメインを書いてあるので、そのままアップロードしてください。

### 1. GitHub にサイトを置く
1. GitHub（無料）でアカウントを作り、リポジトリを1つ作ります（例：`blancare-site`、Public）。
2. `site/` の中身（`index.html`、`CNAME`、`css/`、`js/`、`assets/`）をリポジトリのトップにアップロードします。
3. Settings → Pages で、Branch を `main`、フォルダを `/ (root)` にして保存します。
4. 同じ画面の Custom domain に `www.blancaredental.com` と入れて保存します（DNS が未設定のうちは警告が出ますが、次の手順のあとで消えます）。

### 2. お名前.com の DNS を GitHub に向ける
お名前.com Navi → ネームサーバーの設定 → DNS設定/転送設定 → 「DNSレコード設定」で、`blancaredental.com` のレコードを次のようにします。

| ホスト名 | TYPE | VALUE |
| --- | --- | --- |
| （空欄） | A | 185.199.108.153 |
| （空欄） | A | 185.199.109.153 |
| （空欄） | A | 185.199.110.153 |
| （空欄） | A | 185.199.111.153 |
| www | CNAME | `ユーザー名.github.io` |

- いま Google サイト用に入っている `www` の CNAME（`ghs.googlehosted.com` など）と、Google 向けの A レコードは削除します。
- メールなど他のレコード（MX、TXT）はそのまま残します。
- 反映には数分〜最大1日かかります。

### 3. Google サイト側の接続を外す
Google サイトの 設定 → カスタム URL で、`www.blancaredental.com` の割り当てを解除します（新しいサイトが表示されるようになったあとで構いません。古いサイト自体は残しておいて大丈夫です）。

### 4. HTTPS をオンにする
DNS が反映されて GitHub の Pages 画面の警告が消えたら、「Enforce HTTPS」にチェックを入れます。無料で `https://` になります。

### 切り替え中の見え方
DNS を変えるまでは今の Google サイトが、変えたあとは新しいサイトが表示されます。表示が切り替わらない場合は、ブラウザのキャッシュを消すか、スマホの回線で開いて確認してください。

## 元の文章

`content/original.md` が Google サイトからコピーした原文、`content/content.md` がサイトに載せている校正版です。校正した箇所は `content.md` の冒頭の表にまとめてあります。


## Instagram の投稿を差し替える
`site/index.html` の `insta__grid` の中に3つの `<blockquote class="instagram-media" ...>` があります。各投稿の `data-instgrm-permalink` と `href` のURL（`https://www.instagram.com/p/XXXX/`）を新しい投稿のURLに書き換えるだけで切り替わります。表示には Instagram の公式スクリプト（`embed.js`）を使っているため、インターネットに公開された状態で表示されます。
