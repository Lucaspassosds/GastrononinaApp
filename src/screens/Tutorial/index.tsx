import React from "react";
import { View } from "react-native";
import NinaFront from "../../../assets/svg/nina-front.svg";
import Title1 from "../../../assets/svg/GASTRONO.svg";
import Title2 from "../../../assets/svg/NINA.svg";

const TutorialScreen = () => {
  return (
    <View className="flex-1 bg-primary-green justify-center items-center">
      {/* nina-front on top */}
      <NinaFront className="mb-4" width={200} height={100} />

      <View className="flex-row mt-4">
        <Title1 />
        <Title2 style={{ transform: [{ translateX: -12 }] }} />
      </View>
    </View>
  );
};

export default TutorialScreen;
