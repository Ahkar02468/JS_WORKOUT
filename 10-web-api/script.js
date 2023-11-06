function curSuccess(position){
     console.log(position);
     const coords = position.coords;
     // console.log(position.timestamp);
     console.log(`Latitude - ${coords.latitude}, Longitude - ${coords.longitude} within ${coords.accuracy}.`);
}
function curError(error){
     console.log(`${error.code} - ${error.message}`);
}

const options = {
     enableHighAccuracy: true,///use GPS if availiable
     maximumAge: 0
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);