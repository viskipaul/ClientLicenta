import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
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
  import React, { useState } from 'react';
  import { camera } from 'ionicons/icons';
  import { usePhotoGallery } from '../hooks/usePhotoGallery';
  import './mainmenustyle.css';
  import {MathComponent} from 'mathjax-react';
  
  const MainMenu: React.FC = () => {
    const { photo, takePhoto, loading, response, failed, errorMessage, solution, plots } = usePhotoGallery();
    const [showPlotModal, setShowPlotModal] = useState(false);
    const [plotId, setPlotId] = useState(0);

    var rows = []
    for(var i = 0; i < response.length; i++){
      rows.push(
        <div className="response-div">
          {response[0][0] && 
          <IonCard key={'resCard' + i} className="response-card">Equation:
              <MathComponent tex={response[i]}></MathComponent>
          </IonCard>}
          {plots[plotId] !== '' && solution[i] && solution[i][0] && <div className="show-plot-button"><IonButton onClick={() => {setShowPlotModal(true); }}>Show function plot</IonButton></div>}
          {solution[i] && solution[i][0] && <IonCard key={'solCard' + i} className="solution-card">
          {solution[i] && solution[i].map((sol) => (
            <IonLabel key={'solLabel' + i + '-' + Math.floor(Math.random() * 1000)} className="solution-label">
              <MathComponent tex={sol}></MathComponent>
            </IonLabel>
          ))}
          </IonCard>}
        </div>
      )
    };

    return (
        <IonContent className="main-content">

          <IonModal isOpen={showPlotModal}>
            <MathComponent tex={response[plotId]}></MathComponent>
            <IonImg key="plotImage" className="plot-image" src={plots[plotId]}></IonImg>
            <IonButton onClick={() => setShowPlotModal(false)}>Back to solutions</IonButton>
          </IonModal>

          {photo != null && <IonCard key="photo-card" className="photo-card">
            <IonImg key="photo.webviewPath" className="image" src={photo.webviewPath}/>
          </IonCard>}
          <div className="welcome-message">
            {photo == null && 
            <IonCard className="welcome-card">
              <IonCardHeader>
                <IonImg src={'https://i.ibb.co/MCRqtLW/cover.png'}></IonImg>
                <IonCardTitle className="welcome-title">Welcome!</IonCardTitle>
                <IonCardContent className="welcome-message">
                  Press the button below to take a photo or upload an image from your gallery.
                </IonCardContent>
              </IonCardHeader>
              </IonCard>}
          </div>
          <div className="response-content">
            {rows}
          </div>
          {failed && (<IonCard className="error-card">Network error</IonCard>)}
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
  