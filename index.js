function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var lis = document.getElementById("app").querySelectorAll(".ranked-list li");
  for(var i = 0; i < lis.length; i++) {
    var innerElement = parseInt(lis[i].innerHTML);
    var newElement = innerElement + n;
    lis[i].innerHTML = newElement
  }
}

function deepestChild() {
  var nodeList = document.querySelector("#grand-node").querySelectorAll("div");
  var current = nodeList;
  while (current.length > 1) {
    var smallerList = current[0].querySelectorAll("div");
    current = smallerList
  }
  return current[0]
}
