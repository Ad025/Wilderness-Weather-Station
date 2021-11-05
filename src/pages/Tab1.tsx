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
  const [input, setInput] = useState<string>("");
  const [city, setCity] = useState<string>("brisbane");

  // useEffect(() => {
  //   console.log(input)
  // }, [input])

  console.log(city)



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
          // onKeyPress={Weather}   
        
          ></IonInput>
          <IonButton 
      
          
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
            <IonTitle size="large">Tab 1</IonTitle> 
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <Weather city={city} />

        
        </IonCard>
      </IonContent>
    </IonPage>

  );
  
    
};


export default Tab1;
