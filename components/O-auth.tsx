import { icons } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./Custom-Button";

const OAuth = () => {
  let handleGoogleLogin = async () => {};
  return (
    <>
      <View className="flex flex-row items-center justify-center mt-5 gap-x-3">
        <View className="bg-general-100 flex-1 h-[1px]" />
        <Text>Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButton
        title="Log In With Google"
        className="w-full mt-5 shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleLogin}
      />
    </>
  );
};

export default OAuth;
