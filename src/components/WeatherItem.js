import { IonGrid,IonRow, IonCol,IonCard } from '@ionic/react';
// import { timeStamp } from 'console';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import Weather from './Weather';



const state = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location}) => {
    labels: ['January', 'February', 'March',
             'April', 'May'];
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  
  
  export default class App extends React.Component {
    render() {
      
      return (
        <div>
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
          }}