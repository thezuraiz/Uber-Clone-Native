import CustomButton from "@/components/Custom-Button";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import React from "react";
import { Text, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    setUserLocation,
    destinationAddress,
    setDestinationLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Rides">
      <View className="my-2">
        <Text className="mb-3 text-lg font-JakartaSemiBold">From</Text>
        <GoogleTextInput
          handlePress={(location) => setUserLocation(location)}
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
        />
      </View>
      <View className="my-2">
        <Text className="mb-3 text-lg font-JakartaSemiBold">To</Text>
        <GoogleTextInput
          handlePress={(location) => setDestinationLocation(location)}
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
        />
      </View>
      <CustomButton title="Find Now" />
    </RideLayout>
  );
};

export default FindRide;
