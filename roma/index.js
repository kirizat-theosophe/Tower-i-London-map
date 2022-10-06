mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyaXphIiwiYSI6ImNrNTNseGc0ZDBhMHMzZm1jdjBoMWYweWEifQ.X3lZ_RB7KFuRgfgZB7fwMw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kiriza/ck56gfj280btz1ckajefqx9zh'
});

const pantheonSettings = {
    center: [12.466158, 41.903555],
    bearing: 180,
    pitch:0,
    duration: 3000
};

const colosseumSettings = {
    center: [13.466158, 41.903555],
    bearing: 90,
    pitch:20,
    duration: 3000
};

const flyTilPantheon = () => {
    map.easeTo(pantheonSettings);

}
const flyTilColosseum = () => {
    map.easeTo(colosseumSettings);

}

map.on("load", () => {
    setTimeout(flyTilPantheon, 3000);
    setTimeout(flyTilColosseum, 9000);
})
