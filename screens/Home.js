import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { COLORS, images, SIZES } from "../constants";
import Header from "../components/header/Header";
import MenuCategories from "../components/menu-categories/MenuCategories";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MenuCategories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
