import React, {Component} from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
import './index.css'

const APIKEY="17ecf02d06e80828b6b6424e5055ff2c";
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    tempreature: '',
    city : '',
    country : '',
    humidity : '',
    pressure: '',
    description : '',
    error : '',

  }

  getWeather = async (e) => {
    e.preventDefault()
    console.log("Get Weather function")
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city,country)

    const api = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+APIKEY);
    const data = await api.json();
    console.log(data)

    if (city && country ) {
      this.setState ({
        tempreature:data.main.temp,
        city:data.name,
        country :data.sys.country,
        humidity : data.main.humidity,
        pressure: data.main.pressure,
        description : data.weather[0].description,
        error : '',
        }
        )
    }
    else {
      this.setState ({
        tempreature: '',
        city : '',
        country : '',
        humidity : '',
        pressure: '',
        description : '',
        error:'Error on city or country'
    }
    )
    }
    //`http://api.openweathermap.org/data/2.5/weather?q=$(city),$(country)&appid=e36ed364400282e43250b6c4c0274d44`
  }

   render() {
        return (
          <div className="wrapper">
            <div className="formC">
            
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                    
                    tempreature={this.state.tempreature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    description={this.state.description}
                    error={this.state.error}
                    />

            </div>
          </div>
        );
      }
}

export default App;
