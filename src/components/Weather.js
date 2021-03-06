import React, { Component} from 'react';
import WeatherItem from './WeatherItemApi2';
import Tab1 from '../pages/Tab1';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.city,
            news: [],
            
        };
        // source;
    }

    
    componentDidMount(lat, lon) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            lat = position.coords.latitude;
            lon = position.coords.longitude;
            // console.log(da)

          },lat,lon);
          

          lat = "sydney"
          lon = "australia"

          const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + lat+','+lon+'&appid=b13dca06fad2516ab926e2946e70545e';
            console.log(url)

            fetch(url)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                this.setState({
                    news:data.list,
                    // news1:data

                })
            })
            
            .catch((error) => console.log(error));
            // console.log(data.articles);

          


        

       

        


       

    }
    

    renderItems(){
        
        return this.state.news.map((item) => {
            return (
            <WeatherItem
            key={item.dt_txt} 
            timeStamp={item.dt_txt} 
            temp={item.main.temp}
            temp_max={item.main.temp_max}
            temp_min={item.main.temp_min}
            wind_speed={item.wind.speed}
            visibility={item.visibility}
            // visibility={item.weather[0].decription}

            // test={item}

            clouds={item.clouds.all}
            />
            )
        });

    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
    
}

export default Weather;
