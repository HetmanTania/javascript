

class SetDataHtml {
	ShowErrorNotFaund(textError){
        let doxError = document.getElementById("dox-error");
        doxError.style.display = "flex";

        let doxPageCurrentWeather = document.getElementById("dox-page-current-weather");
        doxPageCurrentWeather.style.display = "none";

        let doxPageFiveDayWeather = document.getElementById("dox-page-five-day-weather");
        doxPageFiveDayWeather.style.display = "none";
    }

    HiddenErrorNotFaund(dox){
        let doxError = document.getElementById("dox-error");
        doxError.style.display = "none";

       
        dox.style.display = "block";
    }

	SetDayTableHour(weekday, weatherFiveDay) {

		if (weatherFiveDay != undefined) {

			let hour = document.getElementsByClassName("tr-hour");

			let img = document.getElementsByClassName("table-img");
			let tdimg = document.getElementsByClassName("td-img");
			let hauer = document.getElementsByClassName("td-data-hauer");
			let temp = document.getElementsByClassName("td-temp");
			let wind = document.getElementsByClassName("tr-data-wind");

			let optionsWeekday = { weekday: 'long' };
			let currentDay;

			let firstIndex;
			let lastIndex;
			if (weekday == "Today") {
			

				currentDay = weatherFiveDay.ListDays[0];
				firstIndex = 0;
				lastIndex = 7;
			}
			else {
			
				let thHeader = document.getElementsByClassName("tr-westday")[1];

				for (let indexrFiveDay = 0; indexrFiveDay < weatherFiveDay.ListDays.length; indexrFiveDay++) {
					let data = new Date(weatherFiveDay.ListDays[indexrFiveDay].HourlyForecast[0].dt_txt);
					let weekdayCurrent = data.toLocaleString("en-US", optionsWeekday)

					if (weekday == weekdayCurrent) {
						thHeader.textContent = weekday;
						currentDay = weatherFiveDay.ListDays[indexrFiveDay];
						break;
					}
				}
				firstIndex = 7;
				lastIndex = 14;

			}

			for (let index = firstIndex; index < lastIndex; index++) {

				hour[index].style.display = "none";
				tdimg[index].style.display = "none";
				hauer[index].style.display = "none";
				temp[index].style.display = "none";
				wind[index].style.display = "none";
				hour[index].style.display = "none";
			}


			let indexHourlyForecast = 0;
			for (let index = firstIndex; index < lastIndex && indexHourlyForecast < currentDay.HourlyForecast.length; index++) {

				let date = new Date(currentDay.HourlyForecast[indexHourlyForecast].dt_txt);

				hour[index].style.display = "table-cell";
				tdimg[index].style.display = "table-cell";
				hauer[index].style.display = "table-cell";
				temp[index].style.display = "table-cell";
				wind[index].style.display = "table-cell";
				hour[index].style.display = "table-cell";
				hour[index].textContent = date.getHours() + ":00";
				img[index].src = this.GetImgSrc(currentDay.HourlyForecast[indexHourlyForecast].weather[0].main, currentDay.HourlyForecast[indexHourlyForecast].weather[0].description);
				hauer[index].textContent = currentDay.HourlyForecast[indexHourlyForecast].weather[0].main;
				temp[index].textContent = Math.round(currentDay.HourlyForecast[indexHourlyForecast].main.temp) + "℃";
				wind[index].textContent = currentDay.HourlyForecast[indexHourlyForecast].wind.speed + " ESE";
				indexHourlyForecast++;
			}

		}

	}

	SetFiveDayWeather(listFiveDays) {
		let fiveDayWeatherElemnt = document.getElementsByClassName("item-fiver-day");
		let optionsWeekday = { weekday: 'long' };
		let optionsMonth = {
			month: 'long',
			day: 'numeric'
		};

		for (let index = 0; index < listFiveDays.ListDays.length; index++) {
			let lenHour = listFiveDays.ListDays[index].HourlyForecast.length;
			let hour = listFiveDays.ListDays[index].HourlyForecast[Math.floor(lenHour / 2)];
			let dateDay = new Date(hour.dt_txt);

			fiveDayWeatherElemnt[index].childNodes[0].textContent = dateDay.toLocaleString("en-US", optionsWeekday);
			fiveDayWeatherElemnt[index].childNodes[1].textContent = dateDay.toLocaleString("en-US", optionsMonth);
			fiveDayWeatherElemnt[index].childNodes[2].childNodes[0].src = this.GetImgSrc(hour.weather[0].main, hour.weather[0].description);
			fiveDayWeatherElemnt[index].childNodes[3].textContent = Math.round(hour.main.temp) + "℃";
			fiveDayWeatherElemnt[index].childNodes[4].textContent = hour.weather[0].main;

		}

	}

	SetWeatherSitys(fiveDayWeather) {
		let nameSity = document.getElementsByClassName("name-sity");
		let imgWeatherCity = document.getElementsByClassName("img-weather-city");
		let tempWeatherCity = document.getElementsByClassName("temp-weather-city");


		for (let index = 0; index < fiveDayWeather.list.length; index++) {

			nameSity[index].textContent = fiveDayWeather.list[index].name;
			imgWeatherCity[index].src = this.GetImgSrc(fiveDayWeather.list[index].weather[0].main, fiveDayWeather.list[index].weather[0].description);
			tempWeatherCity[index].textContent = Math.round(fiveDayWeather.list[index].main.temp);
		}
	}


	SetCurrentWeather(weather) {

		if (weather != undefined) {
			let imgWeatherToday = document.getElementById("img-weather-today");
			let nameWeatherToday = document.getElementById("box-name-weather-today");
			let currentWeather = document.getElementById("current-weather");
			let valueMaxTemp = document.getElementById("value-sunrise");
			let valueMinTemp= document.getElementById("value-sunset");
			let valueAdditionalInfo = document.getElementById("value-duration");

			let maxTemp = weather.main.temp_max;
			let minTemp = weather.main.temp_min;

			imgWeatherToday.src = this.GetImgSrc(weather.weather[0].main, weather.weather[0].description);
			nameWeatherToday.textContent = weather.weather[0].main;
			currentWeather.textContent = Math.round(weather.main.temp) + "℃";

			valueMaxTemp.textContent = maxTemp + "℃";
			valueMinTemp.textContent = minTemp + "℃";

			valueAdditionalInfo.textContent = weather.wind.speed + " ESE";
		}

	}


	GetImgSrc(nameWeather, description) {
		if (nameWeather == "Clear") {
			return "img/clear sky.png"
		}
		else if (nameWeather == "Drizzle") {
			return "img/shower rain.png"
		}
		else if (nameWeather == "Rain") {
			return "img/shower rain.svg"
		}
		else if (nameWeather == "Thunderstorm") {
			return "img/thunderstorm.png"
		}
		else if (nameWeather == "Snow") {
			return "img/snow.svg"
		}
		else if (nameWeather == "Mist" || nameWeather == "Smoke" || nameWeather == "Haze" || nameWeather == "Dust" || nameWeather == "Fog" || nameWeather == "Sand"
			|| nameWeather == "Dust" || nameWeather == "Ash" || nameWeather == "Squall" || nameWeather == "Tornado") {
			return "img/fog.svg"
		}
		else if (description == "few clouds") {
			return "img/scattered clouds.svg"
		}
		else if (description == "scattered clouds" || description == "overcast clouds" || description == "broken clouds") {
			return "img/broken clouds.png"
		}
	}

}
