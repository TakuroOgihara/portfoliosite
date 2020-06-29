var textbox = document.querySelector(".circle-text");

circleText(textbox, 10);

function circleText(textElement, angle) {
  var parentR = textbox.offsetWidth / 2;
  var text = textElement.textContent;
  var chars = text.split("");
  if (chars.length % 2 === 0) {
    chars.splice(chars.length / 2, 0, " ");
  }
  textElement.innerHTML = null;

  chars.forEach(function (c, i, arr) {
    var span = document.createElement("span");
    span.textContent = c;
    span.style.display = "inline-block";
    span.style.position = "absolute";
    span.style.left = "50%";
    span.style.top = "50%";

    span.style.transformOrigin = "left top";
    span.style.transform =
      "rotate(" +
      (i * angle - angle * ((arr.length / 2) >> 0)) +
      "deg) " +
      "translate(0%,40%) " +
      "translate(0, -" +
      parentR +
      "px) " +
      "translate(-50%,-50%)";
    textElement.appendChild(span);
  });
}
