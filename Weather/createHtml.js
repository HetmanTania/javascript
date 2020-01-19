class CreateHtml {





    createHtmlCitis(dox) {
        let doxCitysInner = document.createElement("div");
        doxCitysInner.className = "dox-citys-inner";
        dox.appendChild(doxCitysInner);
        let header = document.createElement("h2");
        header.textContent = "Neardy Places";

        header.className = "headerTableHour";
        doxCitysInner.appendChild(header);

        let doxInnerCitys = document.createElement("div");
        doxInnerCitys.className = "dox-iner-citys";
        doxCitysInner.appendChild(doxInnerCitys);

        for (let index = 0; index < 4; index++) {

            let boxCity = document.createElement("div");
            boxCity.className = "box-city";

            let nameSity = document.createElement("h3");

            nameSity.classList = "name-sity";
            boxCity.appendChild(nameSity);

            let doxImgWeatherCity = document.createElement("div");
            doxImgWeatherCity.className = "dox-img-weather-city";

            boxCity.appendChild(doxImgWeatherCity);

            let imgWeatherCity = document.createElement("img");
            imgWeatherCity.className = "img-weather-city";

            doxImgWeatherCity.appendChild(imgWeatherCity);

            let tempWeatherCity = document.createElement("p");
            tempWeatherCity.className = "temp-weather-city";

            boxCity.appendChild(tempWeatherCity);

            doxInnerCitys.appendChild(boxCity);

        }
    }

    createHtmlCurrentWeather(box) {

        //#region Внутренний 
        let boxWeatherInner = document.createElement("div");
        boxWeatherInner.id = "box-weather-inner";
        //#endregion

        //#region Назаваниен и дата 
        let headerDate = document.createElement("div");
        headerDate.id = "header-date";

        let header = document.createElement("h2");
        header.className = "box-weather-header";
        header.textContent = "Current Weather";

        headerDate.appendChild(header);

        let date = document.createElement("p");
        date.className = "box-weather-date";


        headerDate.appendChild(date);

        boxWeatherInner.appendChild(headerDate);
        //#endregion

        //#region Блок Данных
        let boxForecastToday = document.createElement("div");
        boxForecastToday.id = "box-forecast-today";


        //#region Блок картинки и названия погоды

        let boxImgNameWeather = document.createElement("div");
        boxImgNameWeather.id = "box-img-name-weather"


        let boxImgWeatherToday = document.createElement("div")
        boxImgWeatherToday.id = "box-img-weather-today";

        let imgWeatherToday = document.createElement("img");
        imgWeatherToday.id = "img-weather-today";


        boxImgWeatherToday.appendChild(imgWeatherToday);
        boxImgNameWeather.appendChild(boxImgWeatherToday);

        let boxNameWeatherToday = document.createElement("h3");
        boxNameWeatherToday.id = "box-name-weather-today";

        boxImgNameWeather.appendChild(boxNameWeatherToday);
        boxForecastToday.appendChild(boxImgNameWeather);
        //#endregion

        //#region Текущая погода и как чувствуется
        let doxСurrentFeelWeather = document.createElement("div");
        doxСurrentFeelWeather.id = "dox-current-feel-weather";


        let currentWeather = document.createElement("p");
        currentWeather.id = "current-weather";

        doxСurrentFeelWeather.appendChild(currentWeather);

        let feelWeather = document.createElement("p");
        feelWeather.id = "feel-weather";

        doxСurrentFeelWeather.appendChild(feelWeather);

        boxForecastToday.appendChild(doxСurrentFeelWeather);
        //#endregion

        //#region восход солнца, закат, продолжительность

        let doxAdditionalInfo = document.createElement("div");
        doxAdditionalInfo.id = "dox-additional-info";

        let sunriseInfo = document.createElement("div");
        sunriseInfo.id = "sunrise-info";

        let sunrise = document.createElement("p");
        sunrise.className = "name-additional-info"
        sunrise.textContent = "Maximum temp:";
        sunriseInfo.appendChild(sunrise);

        let valueSunrise = document.createElement("p");
        valueSunrise.className = "p-value-additional-info";
        valueSunrise.id = "value-sunrise";

        sunriseInfo.appendChild(valueSunrise);

        doxAdditionalInfo.appendChild(sunriseInfo);

        let sunsetInfo = document.createElement("div");
        sunsetInfo.id = "sunset-info";

        let sunset = document.createElement("p");
        sunset.className = "name-additional-info";
        sunset.textContent = "Minimum temp:";
        sunsetInfo.appendChild(sunset);

        let valueSunset = document.createElement("p");
        valueSunset.className = "p-value-additional-info";
        valueSunset.id = "value-sunset";

        sunsetInfo.appendChild(valueSunset);

        doxAdditionalInfo.appendChild(sunsetInfo);


        let durationInfo = document.createElement("div");
        durationInfo.id = "duration-info";

        let duration = document.createElement("p");
        duration.className = "name-additional-info"
        duration.textContent = "Wind (km/h):";
        durationInfo.appendChild(duration);

        let valueDuration = document.createElement("p");
        valueDuration.className = "p-value-additional-info";
        valueDuration.id = "value-duration";

        durationInfo.appendChild(valueDuration);

        doxAdditionalInfo.appendChild(durationInfo);

        boxForecastToday.appendChild(doxAdditionalInfo);
        //#endregion



        //#endregion  Блок Данных

        // Добавление данных о погоде
        boxWeatherInner.appendChild(boxForecastToday);
        // Добавление внутреннего блока
        box.appendChild(boxWeatherInner);
    }

    createHtmlTableHour(box) {

        let header = document.createElement("div");
        header.textContent = "Hourly";
        header.className = "headerTableHour";

        box.appendChild(header);

        let tableHour = document.createElement("table");
        tableHour.className = "table-hour"
        box.appendChild(tableHour);


        let thHeader = document.createElement("tr");
        thHeader.className = "th-header"
        tableHour.appendChild(thHeader);

        let trWestday = document.createElement("th");
        trWestday.textContent = "Sunday"
        trWestday.className = "tr-westday";
        thHeader.appendChild(trWestday)


        for (let index = 0; index < 7; index++) {
            let trHouer = document.createElement("th");
            trHouer.className = "tr-hour";
            trHouer.style.display = "none";
            thHeader.appendChild(trHouer);
        }

        let trImg = document.createElement("tr");
        trImg.className = "th-img";
        let firstImg = document.createElement("td");
        trImg.appendChild(firstImg);

        for (let index = 0; index < 7; index++) {
            let tdImg = document.createElement("td");
            tdImg.className = "td-img";
            trImg.appendChild(tdImg);
            let divImg = document.createElement("div");
            divImg.className = "img-td-hour";
            tdImg.appendChild(divImg);

            let img = document.createElement("img");
            img.className = "table-img";
            divImg.appendChild(img);
            tdImg.style.display = "none";
        }

        tableHour.appendChild(trImg);
        let trForecastData = document.createElement("tr");
        trForecastData.className = "th-forecast-data";
        tableHour.appendChild(trForecastData);


        let trHeaderForecast = document.createElement("td");
        trHeaderForecast.textContent = "Forecast"
        trForecastData.appendChild(trHeaderForecast);

        for (let index = 0; index < 7; index++) {
            let trDataHauer = document.createElement("td");
            trDataHauer.className = "td-data-hauer";
            trForecastData.appendChild(trDataHauer);

            trDataHauer.style.display = "none";
        }

        let trTemp = document.createElement("tr");
        trTemp.className = "th-temp";
        tableHour.appendChild(trTemp);

        let trHeaderTemp = document.createElement("td");
        trHeaderTemp.textContent = "Temp(℃)"
        trTemp.appendChild(trHeaderTemp);


        for (let index = 0; index < 7; index++) {
            let trDataTemp = document.createElement("td");
            trDataTemp.className = "td-temp";
            trTemp.appendChild(trDataTemp);
            trDataTemp.style.display = "none";
        }

        let trWind = document.createElement("tr");
        trWind.className = "th-header-wind";
        tableHour.appendChild(trWind);

        let trHeaderWind = document.createElement("td");

        trHeaderWind.textContent = "Wind (km/h)"
        trWind.appendChild(trHeaderWind);

        for (let index = 0; index < 7; index++) {
            let trDataWind = document.createElement("td");
            trDataWind.className = "tr-data-wind";
            trDataWind.style.display = "none";
            trWind.appendChild(trDataWind);
        }
    }


    createHtmlFiveDays(dox) {
        for (let index = 0; index < 5; index++) {
            let itemFiverDay = document.createElement("div");
            itemFiverDay.className = "item-fiver-day";

            dox.appendChild(itemFiverDay);


            let doxItemFiveDay = document.createElement("div");
            doxItemFiveDay.className = "dox-item-five-day";

            let nameDay = document.createElement("h3");
            nameDay.classList = "item-five-name-day";


            itemFiverDay.appendChild(nameDay);

            let date = document.createElement("p");
            date.classList = "item-five-date";


            itemFiverDay.appendChild(date);

            let boxImgFiveDay = document.createElement("div")
            boxImgFiveDay.className = "box-img-five-day";

            let imgWeatherFiveDay = document.createElement("img");


            boxImgFiveDay.appendChild(imgWeatherFiveDay);
            itemFiverDay.appendChild(boxImgFiveDay);

            let degrees = document.createElement("p");
            degrees.className = "five-day-degrees";


            itemFiverDay.appendChild(degrees);

            let nameWeather = document.createElement("p");
            nameWeather.className = "five-day-name";


            itemFiverDay.appendChild(nameWeather);
        }
    }
  


    createBodyHtml() {
        let header = document.createElement("header");
        document.body.appendChild(header);
        let containerHeader = document.createElement("div");
        containerHeader.id = "container-header";
        header.appendChild(containerHeader);

        let logoHeader = document.createElement("h1");
        logoHeader.id = "logo-header";
        logoHeader.textContent = "My weather";
        containerHeader.appendChild(logoHeader);

        let inpSearch = document.createElement("input");
        inpSearch.id = "inp-search"
        inpSearch.placeholder = "Search";
        containerHeader.appendChild(inpSearch);

        let tool = document.createElement("div");
        tool.id = "tool";
        document.body.appendChild(tool);
        let containerTool = document.createElement("div");
        containerTool.id = "container-tool";
        tool.appendChild(containerTool);

        let pageToday = document.createElement("button");
        pageToday.id = "page-today";
        pageToday.className = "tool-page";
        pageToday.textContent = "Today";

        let pageFiveDay = document.createElement("button");
        pageFiveDay.id = "page-five-day";
        pageFiveDay.className = "tool-page";
        pageFiveDay.textContent = "5-day forecast";
        containerTool.appendChild(pageToday);
        containerTool.appendChild(pageFiveDay);

        let main = document.createElement("main");
        document.body.appendChild(main);

        let containerMain = document.createElement("div");
        containerMain.id = "container-main";
        main.appendChild(containerMain);

        let doxPageCurrentWeather = document.createElement("div");
        doxPageCurrentWeather.id = "dox-page-current-weather";
        containerMain.appendChild(doxPageCurrentWeather);
        
        doxPageCurrentWeather.style.display = "block";
       //  doxPageCurrentWeather.style.display = "none";
       

        let doxCurrentWeather = document.createElement("div")
        doxCurrentWeather.id = "dox-current-weather";
        doxCurrentWeather.className = "box-weather";
        doxPageCurrentWeather.appendChild(doxCurrentWeather);
        this.createHtmlCurrentWeather(doxCurrentWeather);

        let doxHourlyWeather = document.createElement("div")
        doxHourlyWeather.id = "dox-hourly-weather";
        doxHourlyWeather.className = "box-weather";
        doxPageCurrentWeather.appendChild(doxHourlyWeather);

        let doxCurrentDayHourInner = document.createElement("div");
        doxCurrentDayHourInner.className = "dox-hour-inner";
        doxCurrentDayHourInner.id = "dox-hour-current";
        doxHourlyWeather.appendChild(doxCurrentDayHourInner);
        this.createHtmlTableHour(doxCurrentDayHourInner);

        let doxNearbyWeather = document.createElement("div")
        doxNearbyWeather.id = "dox-near-weather";
        doxNearbyWeather.className = "box-weather";
        doxPageCurrentWeather.appendChild(doxNearbyWeather);
        this.createHtmlCitis(doxNearbyWeather);

        let doxPageFiveDayWeather = document.createElement("div");
        doxPageFiveDayWeather.id = "dox-page-five-day-weather";
       
        doxPageFiveDayWeather.style.display = "none";  
       //  doxPageFiveDayWeather.style.display = "block";
      
        
        containerMain.appendChild(doxPageFiveDayWeather);

        let doxFiveDays = document.createElement("div");
        doxFiveDays.id = "dox-five-day";
        doxFiveDays.className = "box-weather";
        doxPageFiveDayWeather.appendChild(doxFiveDays);

        let doxPageFiveDayWeatherInner = document.createElement("div");
        doxPageFiveDayWeatherInner.id = "dox-page-five-day-weather-inner";
        doxFiveDays.appendChild(doxPageFiveDayWeatherInner);
        this.createHtmlFiveDays(doxPageFiveDayWeatherInner);

        let doxFiveDayHourly = document.createElement("div");
        doxFiveDayHourly.id = "dox-five-day-hourly";
        doxFiveDayHourly.className = "box-weather";
        doxPageFiveDayWeather.appendChild(doxFiveDayHourly);

        let doxFiveDayHourInner = document.createElement("div");
        doxFiveDayHourInner.className = "dox-hour-inner";
        doxFiveDayHourInner.id = "dox-hour-fivDay";
        doxFiveDayHourly.appendChild(doxFiveDayHourInner);

        this.createHtmlTableHour(doxFiveDayHourInner);


        let doxError = document.createElement("div");
        doxError.id = "dox-error"
        doxError.style.display = "none";
        containerMain.appendChild(doxError);

        let innerBoxError = document.createElement("div");
        innerBoxError.id = "inner-box-error";
        doxError.appendChild(innerBoxError);

        let doxIngError = document.createElement("div");
        doxIngError.id = "dox-img-error"
        let imgError = document.createElement("img");

        imgError.src = "img/404.svg";
        doxIngError.appendChild(imgError)

        let textError = document.createElement("p");
        textError.id = "text-error";
        textError.textContent = "Error: Not Faund";

        innerBoxError.appendChild(doxIngError);
        innerBoxError.appendChild(textError);

    }

}



