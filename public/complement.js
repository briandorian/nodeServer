document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").textContent = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });