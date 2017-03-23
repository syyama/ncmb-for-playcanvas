# NCMBDemo for PlayCanvas

NCMB for PlayCanvasとは [ニフティクラウド mobile backend](http://mb.cloud.nifty.com/) を [PlayCanvas](https://playcanvas.com/) 上で動作させるためのサンプルアプリです。

![sample](https://raw.githubusercontent.com/syyama/ncmb-for-playcanvas/master/ncmb-for-playcanvas.jpg "サンプル")

## 導入方法

1. 下記クローン後 `HTMLSample.js`, `index.html`, `style.css` ファイルをPlayCanvasのAssetsに追加します.

```
git clone git@github.com:syyama/ncmb-for-playcanvas.git
```

2. 下記クローン後 `ncmb.min.js` ファイルを、同様にPlayCanvasのAssetsに追加します.

```
git clone git@github.com:NIFTYCloud-mbaas/ncmb_js.git
```

3. HierarchyのRoot直下に空のEntityを追加し、そのEntityに対して `HTMLSample.js` を追加します.

4. `HTMLSample.js` の `<Enter your Application Key>`, `<Enter your Client Key>` の箇所に、それぞれNCMBのアプリケーションキーとクライアントキーを指定します.

## 著作者

[syyama](https://twitter.com/syyama_net) 

## 配布ライセンス

LICENSE をご覧ください.