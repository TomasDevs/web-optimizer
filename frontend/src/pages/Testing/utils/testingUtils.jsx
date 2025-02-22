// Simulace těžkého výpočtu pro INP test
export const heavyComputation = (num) => {
  if (num <= 1) return num;
  return heavyComputation(num - 1) + heavyComputation(num - 2);
};

// Funkce pro načítání mock dat s různou rychlostí podle optimalizace
export const fetchMockData = async (isOptimized, setMockData, setIsLoading) => {
  setIsLoading(true);
  try {
    // Simulace rozdílných rychlostí načítání
    await new Promise((resolve) =>
      setTimeout(resolve, isOptimized ? 500 : 2000)
    );

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const result = await response.json();
    setMockData(result.slice(0, 6));
  } catch (error) {
    console.error("Error fetching mock data:", error);
  } finally {
    setIsLoading(false);
  }
};
