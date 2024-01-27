const search_input = document.getElementById('search-input');
const result_playlist = document.getElementById("result-playlist");
const result_artist = document.getElementById('result-artist');

function request_api(search_term) {
  fetch(`http://localhost:3000/artists?name_like=${search_term}`)
    .then((response) => response.json())
    .then((result) => display_results(result));
}

function display_results(result) {
  result_artist.classList.remove('hidden');
  result_playlist.classList.add('hidden');

  const artist_img = document.getElementById('artist-img');
  const artist_name = document.getElementById('artist-name');
  const artist_genre = document.getElementById('artist-genre');
  
  result.forEach(element => {
    artist_img.src = element.urlImg;
    artist_name.innerHTML = element.name;
    artist_genre.innerHTML = element.genre;
  });
}

document.addEventListener('input', function (){
  const search_term = search_input.value.toLowerCase();
  if (search_term === '') {
    result_artist.classList.add('hidden');
    result_playlist.classList.remove('hidden');
    return;
  }
  
  request_api(search_term);
})
