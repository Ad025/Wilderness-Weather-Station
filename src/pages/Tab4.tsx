import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import {useForm, Controller} from "react-hook-form";
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter, text } from 'ionicons/icons';

const Tab4: React.FC = () => {
  const initialValues = {
    name : '',
    email : '',
    confirmEmail : '',
    body : ''
  };

  const { control, register, handleSubmit, formState} = useForm({
    defaultValues: initialValues
  });

  const onSubmit = (data: any) => {
    // alert(JSON.stringify(data,null, 2));
    alert("Thanks for your feedback!")
  };

  // const resetClicked = () => {
  //   <IonInput clearInput name="name"></IonInput>
  //   // alert("resetClicked");
  // };

  // const renderErrorMessage = (_key: string) => {
  //   let theErrors = (errors as any)[_key];
  //   return <span>{theErrors.message || "This is a required field"} </span>;
  // };

  // console.log(errors)
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle size="large">Contact WeatherWeb</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            WeatherWeb Contact Input Form
            <div></div>
            <br></br>
            Please provide your details and
            we will get back to you shortly!
          </IonCardHeader>
          <form name="contactForm" onSubmit={handleSubmit(onSubmit)}>

            <IonCardContent>
              <IonItem>
                <IonLabel> Name </IonLabel>
                {/* <Controller
                  as={IonInput}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                  // console.log("fullName", selected.detail.value);
                    return selected.detail.value;
                  }}
                  name="name"
                  rules={{
                    required: true,
                    minLength: {value: 4, message: "Must be 4 characters long"}
                  }}
                /> */}
                </IonItem>
                <IonItem>
                <IonInput type="text" name="name"> </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel> Email </IonLabel>
                </IonItem>
                <IonItem>
                <IonInput type="email" name="confirmEmail"> </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel> Confirm Email </IonLabel>
                </IonItem>
                <IonItem>
                <IonInput type="email" name="body"> </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Comments/Suggestions</IonLabel>
          
                </IonItem>
                <IonItem>
                <IonTextarea rows={5} name="body"> </IonTextarea>
              </IonItem>
              <IonButton type="submit" slot="end"> Submit </IonButton>
              {/* <IonButton onClick= {() => resetClicked()}> Reset Form </IonButton> */}
            </IonCardContent>
          </form>
         </IonCard>
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
           <h4>WeatherWeb</h4>
        </IonToolbar>
      </IonFooter>
      
    </IonPage>

  );
  
};


export default Tab4;