import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const { car, year, type, deskripsi } = route.params.data;
  const { navigate } = useNavigation();

  const navigateToMain = () => {
    navigate("Main");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.doaTitle}>{car}</Text>
      <Text style={styles.detailText}>Year: {year}</Text>
      <Text style={styles.detailText}>Type: {type}</Text>
      <Text style={styles.detailText}>Deskripsi: {deskripsi}</Text>
      <TouchableOpacity onPress={navigateToMain}>
        <Text style={styles.backButton}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  doaTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Detail;