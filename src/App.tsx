import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCol,
  IonFooter,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, helpCircle, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, personCircle, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import Tab4 from './pages/Tab4';






const App: React.FC = () => (

  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="tab1" href="/tab1">
            
            {/* <IonIcon icon={triangle} /> */}
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            {/* <IonIcon icon={ellipse} /> */}
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            {/* <IonIcon icon={square} /> */}
            <IonLabel>Local Forecast</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            {/* <IonIcon icon={ellipse} /> */}
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>

        <IonFooter>
          <IonToolbar>
            <IonIcon  size="large"
              icon={logoFacebook}></IonIcon>
            <IonIcon slot="start" size="large"
              icon={logoTwitter}></IonIcon>
            <IonIcon slot="start" size="large"
              icon={logoInstagram}> </IonIcon>
            <IonIcon slot="start" size="large"
              icon={logoLinkedin}> </IonIcon>
          </IonToolbar>
        </IonFooter>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default App;
