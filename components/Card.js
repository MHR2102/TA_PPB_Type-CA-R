import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data }) => {
  const { navigate } = useNavigation();

  const navigateToDetail = () => {
    navigate("Detail", { data });
  };

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.car}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});

export default Card;