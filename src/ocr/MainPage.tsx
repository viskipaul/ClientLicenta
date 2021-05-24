import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import React from 'react';
import { Redirect, Route } from 'react-router';
import MainMenu from '../components/MainMenu'
 
import { ellipse, triangle } from 'ionicons/icons';

const MainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Math equation solver through OCR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent><MainMenu></MainMenu></IonContent>
    </IonPage>
  );
};

export default MainPage;