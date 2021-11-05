import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { url } from 'inspector';
import { personCircle, helpCircle, heart, logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> <h2>About </h2></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
        <h1> About WeatherWeb </h1>
        <p>
          WeatherWeb is a web application used for weather forecasts.
          Our company, WeatherWeb, is based in Townsville, Queensland.
          Our focus is predicting weather forecasts using the 
          OpenWeather API. Using this API, it helped us deliver the 
          weather forecasts. From global and local weather models,
          radars and an extension network of weather stations around
          Australia and other parts of the world.
        </p>
        </IonText>
      </IonContent>
          
      <IonFooter>
        <IonToolbar>
          <IonIcon slot="start" size="large"
           icon={logoFacebook}>
           </IonIcon>
          <IonIcon slot="start" size="large"
           icon={logoTwitter}></IonIcon>
          <IonIcon slot="start" size="large"
           icon={logoInstagram}> </IonIcon>
          <IonIcon slot="start" size="large"
           icon={logoLinkedin}> </IonIcon>
           
        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Tab2;