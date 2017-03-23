var Htmlsample = pc.createScript('htmlsample');

var NCMB = NCMB || require("../lib/ncmb");
var ncmb = new NCMB("<Enter your Application Key>", "<Enter your Client Key>");

// initialize code called once per entity
Htmlsample.prototype.initialize = function() {
    // HTMLリソースのロード及び初期化
    var htmlAsset = this.app.assets.find('index.html');
    var div = document.createElement('div');
    div.innerHTML = htmlAsset.resource;
    document.body.appendChild(div);

    htmlAsset.on('load', function () {
        div.innerHTML = htmlAsset.resource;
    });
    
    // CSSリソースのロード及び初期化
    var cssAsset = this.app.assets.find('style.css');

    var style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = cssAsset.resource;
        
    cssAsset.on('load', function() {
        style.innerHTML = cssAsset.resource;
    });
    
    // Rootを代入
    root = this.app.root.findByName("Root");
};

// update code called every frame
Htmlsample.prototype.update = function(dt) {
    
    // セレクタからモデルタイプを変更
    var modelType = document.getElementById("select").value.toString();
    
    // color要素から色情報を取得し16進数文字列に変換
    var col = document.getElementById("color").value.toString();
    col = col.split("");    
    var color = col[0] + col[1] + col[2] + col[3] + col[4] + col[5] + col[6];
    
    // range要素からsizeに代入
    var size = document.getElementById("range").value / 50;
    
    // buttonを押した際のイベントハンドラ
    document.getElementById("button").onclick = function(){
        
        // NCMBのデータストア上にPlayCanvasクラスを作成
        var ncmbObject = ncmb.DataStore("PlayCanvas");
    
        // オブジェクトを保存する
        var playCanvas = new ncmbObject({ModelType: modelType, Color: color, Size: size});
        playCanvas.save()
            .then(function(success){
                // 成功時の処理
                document.getElementById("text").innerHTML = "保存に成功しました";
            })
            .catch(function(err){
                // 失敗時の処理
                document.getElementById("text").innerHTML = "保存に失敗しました";
            });
        
    };
};

// swap method called for script hot-reloading
// inherit your script state here
Htmlsample.prototype.swap = function(old) {
    
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/