import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      width: 200,
      height: 150,
      borderRadius: 8,
      padding: 10,
    },
    header: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    content: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    footer: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    title: {
      fontSize: 12,
    },
    value: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 12,
      color: "#969CB3",
    },
    date: {
      fontSize: 12,
      color: "#969CB3",
    },
  });