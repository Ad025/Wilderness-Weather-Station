import { IonGrid,IonRow, IonCol,IonCard, IonIcon } from '@ionic/react';
import { calendarClear, calendarNumberOutline, calendarOutline, cloudCircleOutline, cloudOutline, partlySunnyOutline, speedometer, speedometerOutline, thermometerOutline } from 'ionicons/icons';
import React from 'react';

const WeatherItemApi2 = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location, test}) => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard class="design">
                <div>
                <h2> <IonIcon size="large" color={"danger"} icon={calendarOutline}> </IonIcon> {timeStamp} </h2>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" icon={cloudOutline} icon={speedometerOutline}> </IonIcon> : {wind_speed} m/s </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" color={"medium"} icon={thermometerOutline}> </IonIcon> : {temp} K </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {visibility} </h3>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {} </h3>
                </div>
                </IonCard>
            </IonCol>
           
        </IonRow>

       
        
    </IonGrid>

    
);



export default WeatherItemApi2;
