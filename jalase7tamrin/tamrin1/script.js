document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("searchBtn");
    const input = document.getElementById("countryInput");
    const neighborsList = document.getElementById("neighborsList");
  
    button.addEventListener("click", async () => {
      const countryName = input.value.trim();
      neighborsList.innerHTML = "";
  
      if (!countryName) {
        neighborsList.innerHTML = "<p>Enter Country Name</p>";
        return;
      }
  
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const data = await res.json();
  
        if (!Array.isArray(data)|| !data[0]|| !data[0].borders) {
          neighborsList.innerHTML = "<p>Country Not Found</p>";
          return;
        }
  
        const borders = data[0].borders;
  
        if (borders.length === 0) {
          neighborsList.innerHTML = "<p>This country has No neighbor</p>";
          return;
        }
  
        const codes = borders.join(",");
        const neighborsRes = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
        const neighbors = await neighborsRes.json();
  
        if (!Array.isArray(neighbors) || neighbors.length === 0) {
          neighborsList.innerHTML = "<p>No neighbors Found</p>";
          return;
        }
  
        neighbors.forEach((neighbor) => {
          const card = document.createElement("div");
          card.className = "neighbor";
  
          const flag = document.createElement("img");
          flag.src = neighbor.flags?.png || "";
          flag.alt = neighbor.name?.common || "Not Named";
  
          const name = document.createElement("p");
          name.textContent = neighbor.translations.fa?.common || neighbor.name.common;
  
          card.appendChild(flag);
          card.appendChild(name);
          neighborsList.appendChild(card);
        });
  
      } catch (err) {
        console.error(err);
        neighborsList.innerHTML = "<p>Error!please try again</p>";
      }
    });
  });