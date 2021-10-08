import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Weather from '../components/Weather';
import { personCircle, helpCircle } from 'ionicons/icons';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');

    return (
    <IonPage>

      <IonToolbar>
         <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              Home
            </IonButton>
            <IonButton>
              About
            </IonButton>
            <IonButton>
              News
            </IonButton>
            <IonButton>
              Contact
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonToolbar>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText
            (e.detail.value!)} placeholder="Townsville, QLD 4810"></IonSearchbar>
        </IonToolbar>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Weather name="Tab 1 page" />
      </IonContent>
    </IonPage>

  );
    
};


export default Tab1;
