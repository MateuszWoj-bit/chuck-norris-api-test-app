function fetchChuckNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        document
            .getElementById("joke-icon")
            .setAttribute("src", "https://i.ibb.co/fDgPZ8M/pngegg.png");
        document.getElementById("joke-text").innerHTML = data.value;
    })
        .catch(function (error) {
        console.error("Error fetching Chuck Norris joke:", error);
    });
}
fetchChuckNorrisJoke();
