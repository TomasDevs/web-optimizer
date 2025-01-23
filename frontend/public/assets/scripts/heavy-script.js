window.onload = () => {
  const outputElement = document.getElementById("script-test-output");
  if (outputElement) {
    outputElement.innerText = "Skript probíhá...";

    setTimeout(() => {
      let total = 0;
      for (let i = 0; i < 2e8; i++) {
        total += Math.sqrt(i) * Math.log(i + 1) * Math.sin(i);
      }
      outputElement.innerText = `Výpočet dokončen: ${Math.floor(total)}`;
      console.log("Skript byl načten a výpočet dokončen.");
    }, 1000);
  }
};
