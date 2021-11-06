import { IonGrid, IonRow, IonCol, IonCard, IonIcon } from '@ionic/react';
import { calendarClear, calendarNumberOutline, calendarOutline, cloudCircleOutline, cloudOutline, cloudy, partlySunny, partlySunnyOutline, rainy, rainyOutline, speedometer, speedometerOutline, thermometerOutline } from 'ionicons/icons';
import React from 'react';

const WeatherItem = ({ timeStamp, temp, pressure, temp_max, wind_speed, visibility, description, location, test, clouds, precip }) => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard class="design">
                    <div>
                        <h2> <IonIcon size="large" color={"danger"} icon={calendarOutline}> </IonIcon> {timeStamp} </h2>
                        <IonCol>
                            <h3> <IonIcon size="large" color={"secondary"} icon={cloudy}> </IonIcon> : {description} </h3>
                                <IonRow>
                                    <IonCol>
                                    <h3> <IonIcon size="large" color={"medium"} icon={thermometerOutline}> </IonIcon> : {temp}°C </h3>
                                    </IonCol>
                                    <IonCol>
                                    <h3> <IonIcon size="large" icon={cloudOutline} icon={speedometerOutline}> </IonIcon> : {wind_speed}m/s </h3>
                                    </IonCol>
                                    <IonCol>
                                    <h3> <IonIcon slot="end" size="large" color={"warning"} icon={partlySunny}> </IonIcon> : {visibility} visibility </h3>
                                    </IonCol>
                                    <IonCol>
                                    <h3> <IonIcon size="large" color={"medium"} icon={cloudy}> </IonIcon> : {clouds}% coverage</h3>
                                    </IonCol>
                                    <IonCol>
                                    <h3> <IonIcon size="large" color={"medium"} icon={rainy}> </IonIcon> : {precip}mm</h3>
                                    </IonCol>
                                </IonRow>
                        </IonCol>
                    </div>
                </IonCard>
            </IonCol>

        </IonRow>



    </IonGrid>


);


export default WeatherItem;
