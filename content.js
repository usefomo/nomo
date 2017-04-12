var f = setInterval(function() {
  var el = document.getElementById('someone-purchased');

  if (el) {
    el.remove();
    clearInterval(f);
  }

}, 200)
