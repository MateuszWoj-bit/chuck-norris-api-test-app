
interface ChuckNorrisJoke {
  value: string;
}

function fetchChuckNorrisJoke(): void {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json() as Promise<ChuckNorrisJoke>)
    .then((data) => {
      document
        .getElementById("joke-icon")!
        .setAttribute("src", "https://i.ibb.co/fDgPZ8M/pngegg.png");
      document.getElementById("joke-text")!.innerHTML = data.value;
    })
    .catch((error) => {
      console.error("Error fetching Chuck Norris joke:", error);
    });
}

fetchChuckNorrisJoke();
