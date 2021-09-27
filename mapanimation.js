// This array contains the coordinates for all mini bus stops between my House and La Loba Square in La Paz, Bolivia
const busStops = [
  [-68.102232, -16.522718],
  [-68.103004, -16.523144],
  [-68.104075, -16.522718],
  [-68.104165, -16.523697],
  [-68.104982, -16.523806],
  [-68.106462, -16.524236],
  [-68.104238, -16.524689],
  [-68.103339, -16.524972],
  [-68.104637, -16.525507],
  [-68.106421, -16.526168],
  [-68.106757, -16.526764],
  [-68.106117, -16.527260],
];

// Add your own mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWVsYXp6aW5pcGFibG8iLCJhIjoiY2t0a3FxbDhxMW9qYzJvcDhydjQ2bHIxbiJ9.V9fzNdcyEQBXdnyGWfnLBg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-68.101927, -16.523089],
  zoom: 15.5,
});

// A marker on the map at the first coordinates in the array busStops. 
var marker = new mapboxgl.Marker()
   .setLngLat([-68.102173, -16.522735])
   .addTo(map);

// counter here represents the index of the current bus stop
var counter = 0;
function move() {
    setTimeout(() =>{
    if(counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
};

