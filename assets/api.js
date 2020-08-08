const W_btn = document
  .getElementById("city_submit")
  .addEventListener("click", citySubmit);

function citySubmit(e) {
  console.log("button clicked");
  var city = document.getElementById("city_in").value;
  console.log(city);

  async function getTemp(city) {
    const response = await fetch(
      `https://api.weatherstack.com/current?access_key=5f3e72770d7b24e50a3e83f0e1a9a6d6&query=${city}`,
      {}
    );
    const json = await response.json();
    return json;
  }

  getTemp(city).then((city) => {
    console.log(city);

    document.getElementById("disp_data").innerHTML = "";

    var ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");

    var li1 = document.createElement("li");
    li1.innerHTML = `Temperature is: ${city.current.temperature} C&deg;`;
    li1.classList.add("list-group-item", "bg-light");
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = `Feels like: ${city.current.feelslike} C&deg;`;
    li2.classList.add("list-group-item", "bg-light");
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = `Wind Speed: ${city.current.wind_speed} m/s [${city.current.wind_dir}]`;
    li3.classList.add("list-group-item", "bg-light");
    ul.appendChild(li3);

    var dispData = document.getElementById("disp_data");
    dispData.appendChild(ul);
  });

  event.preventDefault();
}
