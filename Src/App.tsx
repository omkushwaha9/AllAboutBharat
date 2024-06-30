import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCard';
import ActionCard from './ActionCard';
import Tp1 from './TrendingPlaces.tsx/Tp1';
import Tp2 from './TrendingPlaces.tsx/Tp2';
import Tp3 from './TrendingPlaces.tsx/Tp3';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCards/>
        <Tp1/>
        <Tp2/>
        <Tp3/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;