bubbly({
  colorStart: "#fafafa", //背景(左斜め上)
  colorStop: "#fafafa", //背景(右斜め下)
  blur: 1, //ぼかし
  compose: "source-over",
  bubbleFunc: () => `hsla(200, 100%, 50%, .3)`, //hsla(色相,彩度,明度,不透明度)
  bubbles: 5, //円の数
  angleFunc: () => Math.random() * Math.PI * 2, //移動方向
  velocityFunc: () => 0.1 + Math.random() * 0.5, //移動速度
  radiusFunc: () => 4 + Math.random() * 200, //円の大きさ
});
