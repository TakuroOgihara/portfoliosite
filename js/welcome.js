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
  }, 1300); //マウスストーカー表示後に実行する

  setTimeout(function () {
    $(window).on("click", function (e) {
      $(".circle-text").remove(); //OgiharaTakuroを削除
      $("#stalker span").attr("id", "welcome"); //welcomeの縮小CSS追加

      setTimeout(function () {
        $("#stalker span").css({
          display: "none", // Welcome非表示
        });
      }, 450); //縮小後に一瞬webcomeが表示されるのを避ける

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

      setTimeout(function () {
        $(window).on("mousemove", function (e) {
          $("#stalker").css({
            top: "-3000px", //カーソルに円の中心が来るように
            left: "-3000px", //カーソルに円の中心が来るように
            transform: "translate(" + e.clientX + "px, " + e.clientY + "px)", //カーソルの位置
          });
        });
      }, 500); //welcomeが縮小し消えた後に実行する

      $("#overall-color").fadeOut(1000);
    });
  }, 1500); //円の表示演出が終わるまでクリックイベント発生不可
});
