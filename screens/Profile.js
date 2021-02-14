import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import ProfileContent from "../components/profile/ProfileContent";
import { COLORS, images, SIZES } from "../constants";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProfileContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Profile;
