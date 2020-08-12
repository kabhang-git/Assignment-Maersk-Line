function shuffle() {
    for (var e = document.querySelector("ul"), r = e.children.length; r >= 0; r--) e.appendChild(e.children[Math.random() * r | 0])
}

function sort() {
    for (var e = document.querySelector("ul"), r = e.querySelectorAll("li"), n = [], t = 0; t < r.length; t++) n.push(r[t]);
    n.sort(function (e, r) {
        var n = parseInt(e.innerHTML),
            t = parseInt(r.innerHTML);
        return n < t ? -1 : n > t ? 1 : 0
    }), n.reverse();
    for (t = 0; t < n.length; t++) e.insertBefore(n[t], e.firstChild)
}