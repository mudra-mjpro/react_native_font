/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { buildTypography } from './src/typography';
import HomeScreen from './src/HomeScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    buildTypography(); // build once on start
    const sub = Dimensions.addEventListener('change', () => buildTypography());
    return () => {
      // RN >= 0.65 returns an event subscription object
      // @ts-ignore
      sub?.remove?.();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  // const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      /> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
