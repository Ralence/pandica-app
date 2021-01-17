import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";
import MENU from "../../data/menu.json";

const MENU_KEYS = Object.keys(MENU).slice(0, -1);

const MenuCategories = () => {
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={{
          width: 100,
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "flex-start",
          marginRight: SIZES.padding,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 1,
          elevation: 3,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
          }}
        >
          <Image source={icons.noodles} resizeMode="contain" style={{ width: 30, height: 30 }} />
        </View>
        <Text
          style={{
            marginTop: SIZES.padding,
            color: COLORS.white,
            ...FONTS.body4,
            textAlign: "center",
          }}
        >
          {MENU[item].title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ padding: SIZES.padding * 2 }}>
      <Text style={{ ...FONTS.h1 }}>Naš</Text>
      <Text style={{ ...FONTS.h1 }}>Meni</Text>

      <FlatList
        data={MENU_KEYS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => MENU[item].title}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  );
};

export default MenuCategories;
