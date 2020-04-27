import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/home';
import Login from './screens/login';
import Welcome from './screens/welcome';

const getFonts = () => Font.loadAsync({
  'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Welcome />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
