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
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const renderItems = () => {

    if (data !== []){
      return data.map((item: any) => {
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
              location={undefined} test={undefined}          /> 
          )
      });
  } else {
      return(<div>No search</div>);
  }
  
  }


  const grabData = async (cityInput: string) => {
    const city = cityInput;

    
    const country = "australia";
    
    console.log(city)
    // workaround 1: find out if the API call throws an error then avoid the value from searching API until a proper response is given
    

    if(city !== ""){ // if city is defined then call OpenWeather API.

        const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +","+country+"&appid=b13dca06fad2516ab926e2946e70545e";
        console.log(url)

        fetch(url)
            .then((response) => {
                return response.json();

            })
            .then((data) => {
              console.log(data);
                setData(data.list);
                console.log(data.list);
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
          <IonButton onClick={() => {setLoadingData(true); onSubmit(city)}}
      
          
          >Search</IonButton>

          </IonItem>
        
          <IonItem>
            {/* render(){
              const {input} = this.props.Weather
              return (

              )
            } */}
            {/* <Weather inputCity={input}/> */}
            {city}
          </IonItem>

            {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText
            (e.detail.value!)} placeholder="Townsville, QLD 4810"></IonSearchbar> */}
        </IonToolbar>

      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonTitle size="large">Tab 1</IonTitle>  */}
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
