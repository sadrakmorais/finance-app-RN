import React from "react";

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

type HeaderProps = {
  userName: string;
};

export const Header = ({ userName }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>{userName}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
