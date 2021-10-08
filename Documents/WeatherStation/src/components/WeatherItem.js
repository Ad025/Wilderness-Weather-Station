import { IonCard, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import React from 'react';

const WeatherItem = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility}) => (
    

//         <IonContent>
// <IonGrid>
//      <IonRow>
//          <IonCol>  
//          <IonCard>
//          <div> test </div>
        
//         <p>{timeStamp}</p>
//         <p>temp={temp}, min temp={temp_min}, max temp={temp_max}</p>
//         <p>wind speed={wind_speed}</p>
//         <p>visibility={visibility}</p>
    
//              </IonCard>
//          <IonCol> test </IonCol>
//          <IonCol> test </IonCol>
//          <IonCol> test </IonCol>
//          <IonCol> test </IonCol>
//      </IonRow>
// </IonGrid>
// </IonContent>

    <IonGrid>
        <IonRow>
            <IonCol>
                {timeStamp}
            </IonCol>
            <IonCol>
                {temp}
            </IonCol>
        </IonRow>
        
        
    </IonGrid>

    

    
    
);



export default WeatherItem;
