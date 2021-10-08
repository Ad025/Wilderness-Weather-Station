import React, { Component} from 'react';
import WeatherItem from './WeatherItem';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }


    componentDidMount() {
        const url = "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b13dca06fad2516ab926e2946e70545e";
        
        fetch(url)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                this.setState({
                    news:data.list
                })
            })
            .catch((error) => console.log(error));
            // console.log(data.articles);

    }

    renderItems(){
        return this.state.news.map((item) => {
            return (
            <WeatherItem key={item.dt_txt} 
            timeStamp={item.dt_txt} 
            temp={item.main.temp}
            temp_max={item.main.temp_max}
            temp_min={item.main.temp_min}
            wind_speed={item.wind.speed}
            visibility={item.visibility}

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
