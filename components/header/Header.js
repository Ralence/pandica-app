import React from "react";
import { View, Image, TouchableOpacity, Platform, StatusBar, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { COLORS, images, icons } from "../../constants";

const HeaderBanner = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="location" size={30} color="black" />
      </TouchableOpacity>
      <Image style={styles.image} source={images.banner} resizeMode="cover" />
      <TouchableOpacity>
        <FontAwesome name="image" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: 60,
    width: "50%",
    minWidth: 220,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default HeaderBanner;
