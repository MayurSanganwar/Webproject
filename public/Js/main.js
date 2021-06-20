const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitbtn");
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value')
const temp_status = document.getElementById('temp_status')
const dataHide = document.querySelector('.middle_layer')



const getInfo = async (event) => {
    event.preventDefault();
    // alert("hello")
    // let url=`api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid = 9b7f6c14f3a98aa2f03c81bea16eeb10`

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Please write the city name before you search`;
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9b7f6c14f3a98aa2f03c81bea16eeb10`
            const responce = await fetch(url)
    
            const data = await responce.json()
         
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerHTML = arrData[0].main.temp;
            console.log(temp.innerHTML);
            temp_status.innerHTML = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" style='color:Yelllow'></i>`
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style='color:#f1f2f6;'></i>`
            } else if (tempMood = 'Rain') {
                temp_status.innerHTML = `<i class="fas fa-cloud-showers-heavy style=color:a4b0be"></i>`
            } else {
                temp_status.innerHTML = `<i class="fas fa-sun" style='color:#eccc68;'></i>`
            }
            dataHide.classList.remove('data_hide');

        } catch {
            city_name.innerHTML = `Please write the city name before you search`
            dataHide.classList.add('data_hide');
        }
    }
}
    submitBtn.addEventListener('click', getInfo)


