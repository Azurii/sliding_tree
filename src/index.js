let tree = document.getElementsByTagName("ul")[0];
let treeLis = tree.getElementsByTagName("li");

for (let i = 0; i < treeLis.length; i++) {
  let li = treeLis[i];
  let span = document.createElement("span");
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

tree.onclick = event => {
  let target = event.target;
  if (target.tagName != "SPAN") {
    return;
  }

  let childrenBox = target.parentNode.getElementsByTagName("ul")[0];
  if (!childrenBox) return;
  childrenBox.hidden = !childrenBox.hidden;
};
