import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/core';
import '@ionic/pwa-elements';
import {defineCustomElements} from '@ionic/pwa-elements/loader';

/* Theme variables */
import './theme/variables.css';
import React from 'react';
import MainPage from './ocr/MainPage';
import ResultsPage from './ocr/ResultsPage';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={MainPage} />
        <Redirect exact from="/" to="/home"></Redirect>
        <Route exact path="/results" component={ResultsPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
