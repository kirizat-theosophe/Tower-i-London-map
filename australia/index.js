mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyaXphIiwiYSI6ImNrNTNseGc0ZDBhMHMzZm1jdjBoMWYweWEifQ.X3lZ_RB7KFuRgfgZB7fwMw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

map.on("load", () => {

    map.addLayer({
        id:"australia",
        type: "fill",
        paint: {
            "fill-color" : "rgba(180, 180, 180, 0.8)"
        },
        source: {
            type: "geojson",
            data: "australia.geojson"

        }
    });
})

map.on ("click", "australia", (e) => {
   alert(e.features[0].properties.landkode)
})