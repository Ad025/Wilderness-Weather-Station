import { IonCard, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
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
            <IonSearchbar value={searchText} onIonChange={e => setSearchText
            (e.detail.value!)} placeholder="Townsville, QLD 4810"></IonSearchbar>
        </IonToolbar>


        <IonRow>
          <IonCol>
            <IonCard>
              <Weather name="Tab 1 page" />
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <Weather name="Tab 1 page" />
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
            <IonCard>
              <Weather name="Tab 1 page" />
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <Weather name="Tab 1 page" />
            </IonCard>
          </IonCol>
        </IonRow>

    </IonPage>

  );
    
};


export default Tab1;
