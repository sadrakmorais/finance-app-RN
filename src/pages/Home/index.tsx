import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header userName="Zadraki Morais" />
      <Balance balance="87.873,00" expenses="45.342,00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
});
