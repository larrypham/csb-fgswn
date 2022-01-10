async function drawBars() {
  const dataset = await d3.json("./my_weather_data.json");
  const dateparser = d3.timeparser("%Y-%m-%d");
}
