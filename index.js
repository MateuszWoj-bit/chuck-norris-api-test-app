function fetchChuckNorrisJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke-icon").src =
        "https://i.ibb.co/fDgPZ8M/pngegg.png";
      document.getElementById("joke-text").innerHTML = data.value;
    })
    .catch((error) => {
      console.error("Error fetching Chuck Norris joke:", error);
    });
}

fetchChuckNorrisJoke();
