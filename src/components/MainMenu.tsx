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
    IonLabel,
    IonLoading,
    IonModal,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
  } from '@ionic/react';
  import React from 'react';
  import { camera } from 'ionicons/icons';
  import { usePhotoGallery } from '../hooks/usePhotoGallery';
  import './mainmenustyle.css';
  
  const MainMenu: React.FC = () => {
    const { photo, takePhoto, loading, response, failed, errorMessage, solution } = usePhotoGallery();

    var rows = []
    for(var i = 0; i < response.length; i++){
      rows.push(
        <div className="response-div">
          {response[0][0] && 
          <IonCard key={'resCard' + i} className="response-card">Equation: 
              {response[i]}
          </IonCard>}
          {solution[i] && solution[i][0] && <IonCard key={'solCard' + i} className="response-card">
          {solution[i] && solution[i].map((sol) => (
            <IonLabel key={'solLabel' + i + '-' + Math.floor(Math.random() * 1000)} className="solution-label">{sol}</IonLabel>
          ))}
          </IonCard>}
        </div>
      )
    };

    return (
        <IonContent className="main-content">
          {photo != null && <IonCard key="photo-card" className="photo-card">
            <IonImg key="photo.webviewPath" className="image" src={photo.webviewPath}/>
          </IonCard>}
          <div className="response-content">
            {rows}
          </div>
          {failed && (<IonCard className="response-card">Network error</IonCard>)}
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
          <IonLoading isOpen={loading} message="Waiting for result..."></IonLoading>
        </IonContent>
    );
  };

  export default MainMenu;
  