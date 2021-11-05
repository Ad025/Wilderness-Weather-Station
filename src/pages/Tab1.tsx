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
  const [city, setCity] = useState('');
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(input)
  }, [input])

  // const handleChange = (e: any) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

    
  //   // return()
  // }

  // class Tab1 extends React.Component {
  //   constructor(props){
  //     super(props);    
  //   }  
  //   render() {
  //     return <div>
  //       <h2>Welcome to App Component</h2>  
  //         </div>
  //   }
  // }


  

    return (
    <IonPage>

      
        <IonToolbar>
          <IonItem>
          <IonInput class="searchbar" value={input}
          placeholder="Enter Location..."
          onIonChange={(e: any) => setInput(e.target.value)} 
          type="text"></IonInput>
          <IonButton>Search</IonButton>
          </IonItem>
        
          <IonItem>
            {/* render(){
              const {input} = this.props.Weather
              return (

              )
            } */}
            {/* <Weather inputCity={input}/> */}
            {input}
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
        <Weather name="Tab 1 page" />
        
        </IonCard>
      </IonContent>
    </IonPage>

  );
  
    
};


export default Tab1;
