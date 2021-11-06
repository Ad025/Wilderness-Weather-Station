import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import Weather from '../components/Weather';
import { personCircle, helpCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import WeatherItem from '../components/WeatherItem';
import { render } from '@testing-library/react';
import React from 'react';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Local Area forcast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Weather/>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
