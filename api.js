const W_btn = document
  .getElementById("city_submit")
  .addEventListener("click", citySubmit);

function citySubmit(e) {
  console.log("button clicked");
  var city = document.getElementById("city_in").value;
  console.log(city);

  async function getTemp(city) {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=5f3e72770d7b24e50a3e83f0e1a9a6d6&query=${city}`,
      {}
    );
    const json = await response.json();
    return json;
  }

  getTemp(city).then((city) => {
    console.log(city);

    var div1 = document.createElement("div");
    var node = document.createTextNode(
      `Temperature is: ${city.current.temperature} C`
    );
    div1.appendChild(node);

    var div2 = document.createElement("div");
    var node2 = document.createTextNode(
      `Feels like: ${city.current.feelslike} C &#8451;`
    );
    div2.appendChild(node2);

    var div3 = document.createElement("div");
    var node3 = document.createTextNode(
      `Wind Speed: ${city.current.wind_speed} m/s [${city.current.wind_dir}]`
    );
    div3.appendChild(node3);

    var dispData = document.getElementById("disp_data");
    dispData.appendChild(div1);
    dispData.appendChild(div2);
    dispData.appendChild(div3);
  });

  event.preventDefault();
}
