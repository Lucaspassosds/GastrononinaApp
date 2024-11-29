import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, Button } from "react-native";
import NinaFront from "../../../assets/svg/nina-front.svg";
import Title1 from "../../../assets/svg/GASTRONO.svg";
import Title2 from "../../../assets/svg/NINA.svg";

const isDev = __DEV__; // React Native's built-in flag to check development mode

const SplashScreen = () => {
  // Animation values
  const ninaScale = useRef(new Animated.Value(0.1)).current; // Start from 0.1 scale
  const ninaOpacity = useRef(new Animated.Value(1)).current; // Start fully visible
  const title1TranslateX = useRef(new Animated.Value(-300)).current; // From left
  const title2TranslateX = useRef(new Animated.Value(300)).current; // From right
  const title1TranslateY = useRef(new Animated.Value(0)).current; // Initial Y for Title1
  const title2TranslateY = useRef(new Animated.Value(0)).current; // Initial Y for Title2

  const resetAndTriggerAnimation = () => {
    // Reset animation values
    ninaScale.setValue(0.1);
    ninaOpacity.setValue(1);
    title1TranslateX.setValue(-300);
    title2TranslateX.setValue(300);
    title1TranslateY.setValue(0);
    title2TranslateY.setValue(0);

    // Trigger animations
    Animated.timing(ninaScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.parallel([
      Animated.timing(title1TranslateX, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(title2TranslateX, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();

    // Trigger secondary animations after a delay
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(ninaScale, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(ninaOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(title1TranslateY, {
          toValue: -300,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(title2TranslateY, {
          toValue: -300,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]).start();
    }, 1000);
  };

  useEffect(() => {
    // Trigger animation on mount
    resetAndTriggerAnimation();
  }, []);

  return (
    <View className="flex-1 bg-primary-green justify-center items-center">
      {/* NinaFront scaling animation */}
      <Animated.View
        style={{
          transform: [{ scale: ninaScale }],
          opacity: ninaOpacity,
        }}
        className="mb-4"
      >
        <NinaFront width={200} height={100} />
      </Animated.View>

      <View className="flex-row mt-4">
        {/* Title1 sliding in from the left */}
        <Animated.View
          style={{
            transform: [
              { translateX: title1TranslateX },
              { translateY: title1TranslateY },
            ],
          }}
        >
          <Title1 />
        </Animated.View>

        {/* Title2 sliding in from the right */}
        <Animated.View
          style={{
            transform: [
              { translateX: title2TranslateX },
              { translateY: title2TranslateY },
            ],
          }}
        >
          <Title2 style={{ transform: [{ translateX: -12 }] }} />
        </Animated.View>
      </View>

      {/* Debug Button - only available in dev mode */}
      {isDev && (
        <View className="absolute bottom-10">
          <Button
            title="Trigger Animation"
            onPress={() => resetAndTriggerAnimation()}
            color="#FFF"
          />
        </View>
      )}
    </View>
  );
};

export default SplashScreen;
