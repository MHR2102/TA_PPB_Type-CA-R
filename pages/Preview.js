import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



function Preview() {
  const [car, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://localhost:3000/Dream")
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Card data={item} />
  );

  return (
    
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/TAUBAT.png")} />
      <Text style={styles.textAwal}>
        TYPE (CA)R adalah aplikasi sederhana yang digunakan untuk mengetahui mobil-
        mobil yang ada didunia. Aplikasi ini berguna terutama jika kita 
        menghadiri pameran mobil. Tujuan utama aplikasi ini untuk memotivasi
        saya untuk dapat achievement memiliki dari salah satu mobil tersebut.
      </Text>
      <Text style={styles.headerExample}>Beberapa type mobil:</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={car}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.listPrevStyle}
        />
      )}
      <TouchableOpacity onPress={() => { console.log("Button Pressed!"); navigation.navigate('Doa'); }}>
      <Text style={styles.listText}>Selengkapnya..</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 225,
    height: 258,
    transform: [{ scale: 0.5 }],
    top: -20,
  },
  textAwal: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    top: -40,
    marginLeft: 28,
    marginRight: 28,
  },
  logoContainer: {
    flex: 1, 
    justifyContent: "flex-start", 
    alignItems: "center",
  },
  headerExample: {
    top: -50,
    backgroundColor: "#3dabd9",
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 28,
    marginRight: 28,
  },
  listPrevStyle: {
    top: -60,
  },
  listText: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    top: -30,
    marginLeft: 28,
    marginRight: 28,
    
  }
});

export default Preview;