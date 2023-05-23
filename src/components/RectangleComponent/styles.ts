import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginTop: 8,
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: 150,
      borderRadius: 8,
      padding: 10,
      marginBottom: 16,
    },
    header: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    content: {
      flex: 2,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    title: {
      fontSize: 16,
    },
    value: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 16,
      color: "#969CB3",
    },
    date: {
      fontSize: 16,
      color: "#969CB3",
    },
  });