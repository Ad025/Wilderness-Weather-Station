import { IonGrid,IonRow, IonCol,IonCard, IonIcon } from '@ionic/react';
import { partlySunnyOutline, thermometerOutline } from 'ionicons/icons';
import React from 'react';

const WeatherItem = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location}) => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard>
                <div>
                <h2> {timeStamp} </h2>
                <br></br>
                <br></br>
                <h3> Wind Speed : {wind_speed} mps </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" icon={thermometerOutline}> </IonIcon> : {temp} </h3>
                <br></br>
                <br></br>
                <h3> <IonIcon size="large" color={"warning"} icon={partlySunnyOutline}> </IonIcon> : {visibility} </h3>
                </div>
                </IonCard>
            </IonCol>
            <IonCol>
                <IonCard>
                <div>
                {/* temp={temp}, min temp={temp_min}, max temp={temp_max} */}
                </div>
                </IonCard>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonCard>
                <div>
                    {/* speed={wind_speed} */}
                </div>
                </IonCard>
            </IonCol>
            <IonCol>
                <IonCard>
                <div>
                {/* visibility={visibility} */}
                </div>
                </IonCard>
            </IonCol>
        </IonRow>
        
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
