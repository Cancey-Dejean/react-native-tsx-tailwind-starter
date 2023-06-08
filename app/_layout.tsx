import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => { 
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }  , [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack onLayout={onLayoutRootView} />
  )
}