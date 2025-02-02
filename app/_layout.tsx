import { SplashScreen, Stack } from "expo-router";
import {useFonts} from "expo-font"
import "./global.css"
import { useEffect } from "react";
import { hideAsync } from "expo-splash-screen";
export default function RootLayout() {
  const [fontloaded]=useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  })
  useEffect(()=>{
    if(fontloaded){
      SplashScreen.hideAsync();
    }
  },[fontloaded]);
   if(!fontloaded) return null;
  return <Stack screenOptions={{headerShown:false}} />;
}
