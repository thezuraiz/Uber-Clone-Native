import CustomButton from "@/components/Custom-Button";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const OnBoardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  let isLastIndex = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex items-center justify-between h-full bg-white">
      <View className="flex flex-row items-end justify-end w-full">
        <TouchableOpacity
          className="p-5"
          onPress={() => router.replace("/(auth)/sign-up")}
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="h-[4px] w-[32px] mx-1 bg-[#E2E8F0] rounded-full"></View>
        }
        activeDot={
          <View className="h-[4px] w-[32px] mx-1 bg-[#0286FF] rounded-full"></View>
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((e) => (
          <View key={e.id} className="flex items-center justify-center p-5">
            <Image
              source={e.image}
              resizeMode="contain"
              className="w-full h-[300px]"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="mx-10 text-4xl font-bold text-center text-black">
                {e.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {e.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastIndex ? "Get Started" : "Next"}
        className={"w-11/12 mt-10"}
        onPress={() =>
          isLastIndex
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
