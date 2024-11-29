import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import "./global.css";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Typography } from "./src/components";
import TutorialScreen from "./src/screens/Tutorial";

const expo = SQLite.openDatabaseSync("db.db");

const db = drizzle(expo);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Birdgo: require("./assets/fonts/Birdgo.ttf"),
      "Chopin-Trial": require("./assets/fonts/Chopin-Trial.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return <TutorialScreen />;
}
