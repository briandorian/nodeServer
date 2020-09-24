document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/insults")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".insult").textContent = data.insults;
      })
      .catch(function(err) {
        console.error(err);
      });
  });