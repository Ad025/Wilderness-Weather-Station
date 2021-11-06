import { IonGrid,IonRow, IonCol,IonCard, IonIcon } from '@ionic/react';
import { calendarClear, calendarNumberOutline, calendarOutline, cloudCircleOutline, cloudOutline, partlySunnyOutline, speedometer, speedometerOutline, thermometerOutline } from 'ionicons/icons';
import React from 'react';

const WeatherItem = ({timeStamp, temp, pressure, temp_max, wind_speed, visibility,description, location, test, clouds,precip}) => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard class="design">
                <div>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {description} </h3>
                <br></br>
                <br></br>
                <h2> <IonIcon size="large" color={"danger"} icon={calendarOutline}> </IonIcon> {timeStamp} </h2>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" icon={cloudOutline} icon={speedometerOutline}> </IonIcon> : {wind_speed} m/s </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" color={"medium"} icon={thermometerOutline}> </IonIcon> : {temp} C </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {visibility} </h3>
                <br></br>
                <h3> <IonIcon size="large" color={"grey"} icon={cloudOutline}> </IonIcon> : {clouds} </h3>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {pressure} </h3>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {precip} mm</h3>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {location} mm</h3>
                </div>
                </IonCard>
            </IonCol>
    
        </IonRow>

  
        
    </IonGrid>

    
);


export default WeatherItem;
