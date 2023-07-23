import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header userName="Zadraki Morais" />
      <Text>Página Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
