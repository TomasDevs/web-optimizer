window.onload = () => {
  console.log("Heavy script spuštěn – stahování dat...");
  const outputElement = document.getElementById("script-test-output");
  const utilityOutput = document.getElementById("utility-script-output");

  if (outputElement) {
    outputElement.innerText = "Načítání dat...";
  }

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      if (outputElement) {
        outputElement.innerText = `Data načtena (${data.length} záznamů)`;
      }
      console.log("Heavy script dokončil stahování dat.");
    })
    .finally(() => {
      if (utilityOutput) {
        utilityOutput.innerText = "Utility skript proběhl po načtení DOM.";
      }
    });
};
