import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import CardMain from "../components/CardMain";
import { FlatList } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

function Doa() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Dream")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the structure of the fetched data
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const filterData = (text) => {
    const filtered = data.filter((item) =>
      item &&
      item.dream &&
      typeof item.dream === "string" && // Ensure dream is a string
      item.dream.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => <CardMain data={item} />;

  return (
    <View style={styles.container}>
      <TextInput
        label="Cari Mobil..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          filterData(text);
        }}
        style={styles.searchBarContainer}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={searchText ? filteredData : data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.listPrevStyle}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listPrevStyle: {
    top: 10,
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderWidth: 0,
    borderRadius: 20,
  },
});

export default Doa;