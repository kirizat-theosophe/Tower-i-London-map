const nav = document.querySelector("#nav");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 3,
    center: [12.846122, 52.093683]
});

map.on("load", () => {
   
   map.addLayer({
      id: "europe",
      type: "fill",
      paint: {
          "fill-color" : "rgba(200, 200, 200, 0.3)"
      },
      source: {
          type: "geojson",
          data: "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson"
      }
   });
    
});

/*
    features : [
        {bla bla bla, properties: {NAME: "Norway"}}
    ]
*/

map.on("click", "europe", (e) => {
    console.log(e.features[0].properties.NAME);
});



