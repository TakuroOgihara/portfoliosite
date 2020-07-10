$(function () {
  setTimeout(function () {
    //マウスストーカー
    $(window).on("mousemove", function (e) {
      $("#stalker").css({
        top: "-125px", //カーソルに円の中心が来るように
        left: "-125px", //カーソルに円の中心が来るように
        transform: "translate(" + e.clientX + "px, " + e.clientY + "px)", //カーソルの位置
      });
    });
  }, 1200); //マウスストーカー用の円の表示後に実行する

  setTimeout(function () {
    $(window).on("click", function (e) {
      $(".circle-text").remove(); //OgiharaTakuroを削除
      $("#stalker span").attr("id", "welcome"); //welcomeの縮小CSS追加

      setTimeout(function () {
        $("#stalker span").css({
          display: "none", // Welcome非表示
        });
      }, 450); //welcome縮小後に実行

      $("#stalker")
        .delay(500) //welcomeが縮小し消えた後に実行する
        .queue(function () {
          $(this).css("top", "");
          $(this).css("left", "");
        });
      $("body")
        .delay(500) //welcomeが縮小し消えた後に実行する
        .queue(function () {
          $(this).addClass("open");
        });

      //円が広がって消えていくアニメーション実行中に
      //カーソルを動かした場合の調整
      setTimeout(function () {
        $(window).on("mousemove", function (e) {
          $("#stalker").css({
            top: "-3000px", //カーソルに円の中心が来るように
            left: "-3000px", //カーソルに円の中心が来るように
            transform: "translate(" + e.clientX + "px, " + e.clientY + "px)", //カーソルの位置
          });
        });
      }, 500); //welcomeが縮小し消えた後に実行する

      //円が広がって消えていく
      $("#overall-color").fadeOut(1000);
    });
  }, 1500); //円の表示演出が終わるまでクリックイベント発生不可
});
