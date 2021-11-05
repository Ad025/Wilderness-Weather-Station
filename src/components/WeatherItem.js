import { IonGrid,IonRow, IonCol,IonCard, IonIcon } from '@ionic/react';
import { calendarClear, calendarNumberOutline, calendarOutline, cloudCircleOutline, cloudOutline, partlySunnyOutline, speedometer, speedometerOutline, thermometerOutline } from 'ionicons/icons';
import React from 'react';

const WeatherItem = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location}) => (
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
                </div>
                </IonCard>
            </IonCol>
            {/* <IonCol>
                <IonCard>
                    
                </IonCard>
            </IonCol> */}
            {/* <IonCol>
                <IonCard>
                <div>
                temp={temp}, min temp={temp_min}, max temp={temp_max}
                </div>
                </IonCard>
            </IonCol> */}
        </IonRow>

        {/* <IonRow>
            <IonCol>
                <IonCard>
                <div>
                    speed={wind_speed}
                </div>
                </IonCard>
            </IonCol>
            <IonCol>
                <IonCard>
                <div>
                visibility={visibility}
                </div>
                </IonCard>
            </IonCol>
        </IonRow> */}
        
    </IonGrid>

    // <li>
    //     ------------------------
    //     <p>{timeStamp}</p>
    //     <p>location={location}</p>
    //     <p>temp={temp}, min temp={temp_min}, max temp={temp_max}</p>
    //     <p>wind speed={wind_speed}</p>
    //     <p>visibility={visibility}</p>
    //     ------------------------
        
    // </li>
    
    
);



export default WeatherItem;
