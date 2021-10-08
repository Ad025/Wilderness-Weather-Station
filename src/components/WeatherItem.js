import { IonGrid,IonRow, IonCol,IonCard } from '@ionic/react';
import React from 'react';

const WeatherItem = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location}) => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard>
                <div>
                    {timeStamp}
                </div>
                </IonCard>
            </IonCol>
            <IonCol>
                <IonCard>
                <div>
                temp={temp}, min temp={temp_min}, max temp={temp_max}
                </div>
                </IonCard>
            </IonCol>
        </IonRow>

        <IonRow>
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
