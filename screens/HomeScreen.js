import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SafeDroid from "../components/SafeDroid";

const HomeScreen = () => {
  return (
    <SafeAreaView style={SafeDroid.AndroidSafeArea}>
      <Text style={styles.text}>HOME SCREEN</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
