(function () {
  console.log("Utility script spuštěn – kontrola DOM.");

  function updateUtilityOutput() {
    const outputElement = document.getElementById("utility-script-output");
    if (outputElement) {
      outputElement.innerText = "Utility skript proběhl po načtení DOM.";
      console.log("Utility script dokončen.");
    } else {
      console.log(
        "Utility script: Výstupní element nebyl nalezen, zkouším znovu..."
      );
      setTimeout(updateUtilityOutput, 100);
    }
  }

  updateUtilityOutput();
})();
