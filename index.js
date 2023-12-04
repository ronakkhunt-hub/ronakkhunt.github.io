const searchText = document.getElementById("searchBar");

function onSearch() {
  window.open("https://google.com/search?q=" + searchText?.value, "_blank");
}

function fetchMovie() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://vidsrc.xyz/embed/movie?imdb=tt5433140", false);
  xhttp.send();
  document.write(xhttp.responseText);
}
