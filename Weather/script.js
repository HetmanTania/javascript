

window.onload = function () {

    let searchCity;
    let currentCity = "Kiev";
    let weatherFiveDay;
    let setDataHtml = new SetDataHtml();

    let createHtml = new CreateHtml();
    createHtml.createBodyHtml();


    function SetDayTableHour(weekday) {
        setDataHtml.SetDayTableHour(weekday, weatherFiveDay)
    }


    class WeatherDays {
        constructor(city) {
            this.City = city;
            this.HourlyForecast = [];
        }

        addHourlyForecast(hourlyForecast) {
            this.HourlyForecast.push(hourlyForecast);

        }
    }
    class ListFiveDays {
        constructor() {
            this.ListDays = [];
        }

        setListFiveDays(list) {
            this.ListDays = [];
            for (let index = 0; index < list.ListDays.length; index++) {
                this.ListDays.push(list.ListDays[index]);
            }
        }

        addDays(day) {
            this.ListDays.push(day);
        }
    }



    getCurrentWeather(currentCity);
    getFiveDayWeather(currentCity);



    let dtnFiveDay = this.document.getElementById("page-five-day");
    dtnFiveDay.addEventListener("click", function () {

        let doxError = document.getElementById("dox-error");

        if (doxError.style.display != "flex") {
            let doxPageCurrentWeather = document.getElementById("dox-page-current-weather");
            doxPageCurrentWeather.style.display = "none";

            let doxPagFiveDayWeather = document.getElementById("dox-page-five-day-weather");
            doxPagFiveDayWeather.style.display = "flex";
            getFiveDayWeather(searchCity);
        }

    });

    let dtnCurrent = this.document.getElementById("page-today");
    dtnCurrent.addEventListener("click", function () {
        let doxError = document.getElementById("dox-error");

        if (doxError.style.display != "flex") {
            let doxPagFiveDayWeather = document.getElementById("dox-page-five-day-weather");
            doxPagFiveDayWeather.style.display = "none";

            let doxPageCurrentWeather = document.getElementById("dox-page-current-weather");
            doxPageCurrentWeather.style.display = "block";
            getCurrentWeather(searchCity);
        }
    })


    let fiveDayWeatherElemnt = document.getElementsByClassName("item-fiver-day");

    for (let index = 0; index < fiveDayWeatherElemnt.length; index++) {
        fiveDayWeatherElemnt[index].addEventListener("click", function () {

            SetDayTableHour(event.currentTarget.childNodes[0].textContent);

        });
    }


    function getCurrentWeather(city = "Kiev") {
        let request = new XMLHttpRequest();
        request.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504`, true);


        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 404) {
                setDataHtml.ShowErrorNotFaund("Название города не верное");
                return;
            }
            else if (request.readyState == 4 && request.status == 200) {
                let currentWeather = JSON.parse(request.responseText);
                setDataHtml.SetCurrentWeather(currentWeather);


                getWeatherSitys(currentWeather.coord);

                function getWeatherSitys(coord) {
                    let request = new XMLHttpRequest();

                    request.open("GET", `http://api.openweathermap.org/data/2.5/find?lat=${coord.lat}&lon=${coord.lon}&cnt=4&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504`, true);

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState == 4 && request.status == 404) {
                            setDataHtml.ShowErrorNotFaund("Название города не верное");
                            return;
                        }
                        else if (request.readyState == 4 && request.status == 200) {

                            let fiveDayWeather = JSON.parse(request.responseText);
                            let doxPageCurrentWeather = document.getElementById("dox-page-current-weather");
                            let doxError = document.getElementById("dox-error");
                            if (doxError.style.display == "flex") {
                                setDataHtml.HiddenErrorNotFaund(doxPageCurrentWeather);
                            }

                            setDataHtml.SetWeatherSitys(fiveDayWeather);
                            SetDayTableHour("Today");
                        }

                    })
                    request.send();

                }

            }
        });

        request.send();
    };

    function getFiveDayWeather(city) {
        let request = new XMLHttpRequest();

        request.open("GET", `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504`, true);

        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 404) {
                setDataHtml.ShowErrorNotFaund("Название города не верное");
                return;
            }
            else if (request.readyState == 4 && request.status == 200) {

                let fiveDayWeather = JSON.parse(request.responseText);
                console.log(fiveDayWeather);

                let prevDate = new Date(fiveDayWeather.list[0].dt_txt);

                let tempListFiveDay = new ListFiveDays();
                let weatherDays = new WeatherDays(fiveDayWeather.city);
                for (const iterator of fiveDayWeather.list) {
                    if (new Date(iterator.dt_txt).toDateString() == prevDate.toDateString()) {
                        weatherDays.addHourlyForecast(iterator);
                    }
                    else {
                        tempListFiveDay.addDays(weatherDays);
                        weatherDays = new WeatherDays(iterator.city);
                    }

                    prevDate = new Date(iterator.dt_txt);
                }

                let optionsWeekday = { weekday: 'long' };
                let data = new Date(tempListFiveDay.ListDays[0].HourlyForecast[0].dt_txt);
                let weekdayCurrent = data.toLocaleString("en-US", optionsWeekday)
                weatherFiveDay = tempListFiveDay;

                setDataHtml = new SetDataHtml();
                setDataHtml.SetFiveDayWeather(tempListFiveDay);
                setDataHtml.SetDayTableHour(weekdayCurrent, weatherFiveDay)

                let doxPageFiveDayWeather = document.getElementById("dox-page-five-day-weather");
                let doxError = document.getElementById("dox-error");
                if (doxError.style.display == "flex") {
                    setDataHtml.HiddenErrorNotFaund(doxPageFiveDayWeather);
                }
            }
        });

        request.send();

    }


    let search = document.getElementById("inp-search");

    search.onchange = function () {
        searchCity = this.value;
       
        getCurrentWeather(searchCity);
        getFiveDayWeather(searchCity);
    }


}