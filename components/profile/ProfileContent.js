import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { COLORS, SIZES, FONTS } from "../../constants";

const ProfileContent = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>
            Unesene licne informacije ostaju samo na vasem uredjaju, mi ih necemo snimiti niti na
            bilo koji nacin koristiti osim za izvrsenje dostave hrane.
          </Text>
        </View>
        <FontAwesome name="user-circle-o" size={40} color={COLORS.secondary} />
      </View>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: COLORS.lightGray4,
    padding: SIZES.padding * 2,
  },
  disclaimerBox: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    elevation: 3,
    marginBottom: 10,
  },
  disclaimerText: {
    fontFamily: FONTS.body3.fontFamily,
    fontSize: FONTS.body3.fontSize,
    lineHeight: FONTS.body3.lineHeight,
    color: COLORS.darkgray,
  },
});
