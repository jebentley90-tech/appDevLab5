import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from  'react-native';
import AppButton from './src/components/common/AppButton';
import PageLayout from './src/components/layout/PageLayout';
import { SCREENS } from './src/constants/screens';
import { PUMP_UPDATE_MS, STOCK_UPDATE_MS } from './src/constants/simulation';
import { initialPumps, initialStocks } from './src/data/initialData';
import DashboardScreen from './src/screens/DashboardScreen';
import NamesScreen from './src/screens/NamesScreen';
import OilScreen from './src/screens/OilScreen';
import StocksScreen from './src/screens/StocksScreen';
import { GeneratedNameHistory, Pump, ScreenName, Stock } from './src/types';
import { updatePumps } from './src/utils/pumpUtils';
import { updateStocks } from './src/utils/stockUtils';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>(SCREENS.DASHBOARD);
  const [stocks, setStocks] = useState<Stock[]>(initialStocks);
  const [pumps, setPumps] = useState<Pump[]>(initialPumps);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [nameHistory, setNameHistory] = useState<GeneratedNameHistory[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  
  const handleReset = () => {
    setStocks(initialStocks);
    setPumps(initialPumps);
    setGeneratedNames([]);
    setNameHistory([]);
    setIsPaused(false);
    setScreen(SCREENS.DASHBOARD);
  };

  const togglePump = (id: string) => {
    setPumps((prev) =>
      prev.map((pump) =>
      pump.id === id ? { ...pump, active: !pump.active } : pump
      )
    );
  }

  const renderScreen = () => {
    switch (screen) {
      case SCREENS.STOCKS:
        return <StocksScreen stocks={stocks} />;
      
      case SCREENS.NAMES: 
        return (
          <NamesScreen
            generatedNames={generatedNames}
            setGeneratedNames={setGeneratedNames}
            history={nameHistory}
            setHistory={setNameHistory}
          />
        );
      

      case SCREENS.OIL:
        return <OilScreen pumps={pumps} togglePump={togglePump} />;

      case SCREENS.DASHBOARD:
      default:
        return (
          <DashboardScreen
            stocks={stocks}
            pumps={pumps}
            generatedNames={generatedNames}
          />
        );
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStocks((prev) => updateStocks(prev));
    }, STOCK_UPDATE_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPumps((prev) => updatePumps(prev));
    }, PUMP_UPDATE_MS);

    return () => clearInterval(interval);
  }, [isPaused]);


  return (
    <PageLayout title={screen.toUpperCase()}>
      <View style={styles.nav}>
        <AppButton title="Dashboard" onPress={() => setScreen(SCREENS.DASHBOARD)}></AppButton>
        <AppButton title="Stocks" onPress={() => setScreen(SCREENS.STOCKS)}></AppButton>
        <AppButton title="Oil" onPress={() => setScreen(SCREENS.OIL)}></AppButton>
        <AppButton title="Names" onPress={() => setScreen(SCREENS.NAMES)}></AppButton>
        <AppButton title={isPaused ? 'Resume' : 'Pause'} onPress={() => setIsPaused((prev) => !prev)}></AppButton>
        <AppButton title="Reset" onPress={handleReset}></AppButton>
      </View>

      {renderScreen()}
    </PageLayout>
  );
}


const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
});
