import { IonCard, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Weather from '../components/Weather';
import { personCircle, helpCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import WeatherItem from '../components/WeatherItem';
import { render } from '@testing-library/react';
import React from 'react';


const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  // const [city, setCity] = useState('');
  const [input, setInput] = useState<any>("");
  const [city, setCity] = useState<any>("");
  const [data, setData] = useState<[]>([]);
  const [data1, setData1] = useState<any>("")

  const [loadingData, setLoadingData] = useState<boolean>(false);

  const renderItems = () => {

    try{
    if (data !== []) {
      return data.map((item: any) => {
        return (

          <WeatherItem
            key={item.valid_date}
            timeStamp={item.valid_date}
            visibility={item.vis}
            description={item.weather.description}
            wind_speed={item.wind_spd}
            temp={item.temp}
            clouds={item.clouds}
            pressure={item.pres}
            precip={item.precip}
            location={item.city_name}
          />
        )
      }
      );
    } else {
      return (<div>No search</div>);
    }
  }
  catch(TypeError){
    console.log("Wrong Input");
    
  }


  }



  const grabData = async (cityInput: string) => {
    const city = cityInput;


    const country = "australia";

    console.log(city)
    // workaround 1: find out if the API call throws an error then avoid the value from searching API until a proper response is given


    if (city !== "") { // if city is defined then call OpenWeather API.

      const url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + city + ',' + country + "&key=3b11955cd5d247ac95f8b239cd0048ca"
      // const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +","+country+"&appid=b13dca06fad2516ab926e2946e70545e";
      console.log(url)

      fetch(url)
        .then((response) => {
          return response.json();

        })
        .then((data) => {
          console.log(data);
          setData(data.data);
          setData1(data.city_name);
          // console.log(data.city_name)

          console.log(data.data);

        })

        .catch((error) => console.log(error));
      // console.log(data.articles);

    }
    setLoadingData(false);

  }

  // useEffect(() => {
  //   console.log(input)
  // }, [input])

  console.log(city)

  const onSubmit = (city: string) => {

    grabData(city);


    //<Weather city={city}/>
  }



  return (
    <IonPage>


      <IonToolbar>
        <IonItem>

          <IonInput
            className="input"
            placeholder="Enter City"
            // onIonChange={e=> setCity(e.target.value)} 
            onIonChange={e => setCity(e.detail.value!)}
            value={city}

          // onClick={onSubmit}
          // onClick={e => setCity(e.detail.value!)}

          // onKeyPress={Weather}   

          ></IonInput>
          <IonButton onClick={() => { setLoadingData(true); onSubmit(city) }}


          >Search</IonButton>

        </IonItem>


        <IonItem>
          <h2> Weather Forecast</h2>
          {/* render(){
              const {input} = this.props.Weather
              return (

              )
            } */}
          {/* <Weather inputCity={input}/> */}

        </IonItem>

        {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText
            (e.detail.value!)} placeholder="Townsville, QLD 4810"></IonSearchbar> */}
      </IonToolbar>

      <IonHeader>
        {/* <IonTitle> <h2>About </h2></IonTitle> */}
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Weather Forecast</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {renderItems()}
          {/* {() => {
            useEffect(() => {
              return (<Weather news={data} />)

            }, data)
          }} */}




        </IonCard>
      </IonContent>
    </IonPage>

  );


};


export default Tab1;
