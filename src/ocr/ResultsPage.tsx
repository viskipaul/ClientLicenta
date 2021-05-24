import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { ellipse, triangle } from 'ionicons/icons';
import MainMenu from '../components/MainMenu';
import Results from '../components/Results';

const ResultsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent><Results></Results></IonContent>
    </IonPage>
  );
};

export default ResultsPage;