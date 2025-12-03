import CustomButton from "@/components/Custom-Button";
import InputField from "@/components/Input-Field";
import OAuth from "@/components/O-auth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  let handleSignUp = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* 1st Section */}
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="absolute text-3xl text-black font-JakartaSemiBold bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            // @ts-ignore
            onChange={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label={"Email"}
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            keyboardType={"email-address"}
            // @ts-ignore
            onChange={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label={"Password"}
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            // @ts-ignore
            onChange={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            className="mt-6"
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href={"/(auth)/sign-in"}
            replace={true}
            className="mt-10 text-lg text-center text-general-200"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
