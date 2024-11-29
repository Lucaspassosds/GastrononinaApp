import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import "../../global.css";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import SplashScreen from "../screens/Splash";

const expo = SQLite.openDatabaseSync("db.db");

const db = drizzle(expo);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Birdgo: require("../../assets/fonts/Birdgo.ttf"),
      "Chopin-Trial": require("../../assets/fonts/Chopin-Trial.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return <SplashScreen />;
}
