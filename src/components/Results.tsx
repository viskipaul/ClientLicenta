import {
    IonCard,
      IonCol,
      IonContent,
      IonFab,
      IonFabButton,
      IonGrid,
      IonHeader,
      IonIcon,
      IonImg,
      IonLoading,
      IonPage,
      IonRow,
      IonTitle,
      IonToolbar
    } from '@ionic/react';
    import React, { useContext } from 'react';
    import { camera } from 'ionicons/icons';
    import { usePhotoGallery } from '../hooks/usePhotoGallery';
    import './mainmenustyle.css';
    
    const Results: React.FC = () => {
      const {loading, response} = usePhotoGallery();
      // const {load} = useContext(LoadingContext);
      console.log(loading);

      return (
          <IonContent fullscreen>
            <IonLoading isOpen={loading} message="Please wait..."></IonLoading>
            <IonTitle>Response: {response}</IonTitle>
          </IonContent>
      );
    };
  
    export default Results;
    