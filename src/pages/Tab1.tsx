import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Weather from '../components/Weather';
import { personCircle, helpCircle } from 'ionicons/icons';

const Tab1: React.FC = () => {
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
