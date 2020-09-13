import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import ExploreContainer from '../components/ExploreContainer'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen forceOverscroll={false}>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  )
}

export default Home
