const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plz write city name before searching.`;
        datahide.classList.add('data_hide');
        alert('Text Not Entered.');
    }

    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9195a7c17bbefa747e8276f79cc0f109`;
            // Take responce data from url
            const responce = await fetch(url); 
            // Convert data into JSON
            const data = await responce.json();
            // Convert Json into array of JSON
            const arrData = [data];
            // Write city name in specific ID from JSON responce
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // Write Temp in specific place
            temp.innerText = arrData[0].main.temp;
            // Set icon according to the resopnce
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }

            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }

            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            // console.log(data);
        }

        catch{
            city_name.innerText = `Plz enter valid city name.`;
            datahide.classList.add('data_hide');
            // alert('Enter Valid City Name.');
        }
        
    }
}

submitBtn.addEventListener('click' , getInfo);