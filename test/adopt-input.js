document.body.innerHTML = '<input value="">';
function update(render, value) {render`<input value="${value}">`}
var render = hyperHTML.adopt(document.body);
setTimeout(update, 3000, render, 123);