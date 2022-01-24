const app = {
  init: () => {
	document
	   .getElementById('btnCurrent')
	   .addEventListener('click', app.fetchWeather);
	document
	   .getElementById('btnCurrent')
	   .addEventListener('click', app.getLocation);
  },
  fetchWeather: (ev) => {
    //use values from lat/long to fetch weather
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = 'e8e267f2133f835cf259c78e1e1f1ce0';
    let lang = 'jp';
    let units = 'metric';
    let url = `hettp://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units]&lang={lang}`;
    //fetch the weather
    fetch(url)
      .then((resp) => {
	if (!resp.ok) throw new Error(resp.statusText);
	return resp.json();

      })
      .then((data) => {
	app.showWeather(data);
      })
      .catch(console.err);
   },
   getLocation: (ev) => {
     let opts = {
	enableHighAccuracy: true,
	timeout: 1000 * 10, //10 seconds
	maximumAge: 1000 * 60 * 5, //5 minutes
      };
      navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
   },
   ftw: (position) => {
     //got position
     document.getElementById('latitude').value =
       position.coords.latitude.toFixed(2);
     document.getElemantById('longitude').value =
       position.coords.longitude.toFixed(2);
   },
   wtf: (err) => {
     //geolocation failed
     console.error(err);
   },
   showWeather: (resp) => {
     console.log(resp);
     let row = document.querySelector('.weather.row');
     //clear out the old weather and add the new
     // row.innerHTML = '';
     row.innerHTML = resp.daily
       .map((day, idx) => {
	 if (idx <= 2) {
	   let
	   let
	   let
	   return `<div class="col">
		   <h5 class="card-title p-2">${dt.toDateString()}</h5>
		     <img
			src="http://openweathermap.org/img/wn/${
			  day.weather[0].icon
			}@4x.png"
			class="card-img-top"
			alt="${day.weather[0].description}"
		       />
		       <div class="card-body">
			  <h3 class="card-title">$day.weather[0].main}</h3>
			  <p class="card-text">High ${day.temp.max}&deg;C Low ${
		day.temp.min
	      }&deg;C</p>
			  <p class="card-text">High Feels like ${
			     day.feels_like.day
			  }&deg;C</p>
			  <p class="card-text">Pressure ${day.pressure}mb</p>
			  <p class="card-text">Humanity ${day.huidity}%</p>
			  <p class="card-text">UV Index ${day.uvi}</p>
			  <p class="card-text">Precipitation ${day.pop * 100}%</p>
			  <p class="card-text">Dewpoint ${day.dew_point}</p>
			  <p class="card-text">Wind ${day.wind_speed}m/s, ${
		day.wind_deg
	      }&deg;</p>
			<p class="card-text">Sunrise ${sr}</p>
			<p class="card-text">Sunset ${ss}</p>
		    </div>
		  </div>
		</div>
	      </div>`;
	    }
	  })
	  .join(' ');
     },
   };

   app.init(); 