import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

interface RectangleComponentProps {
  title: string;
  value: number;
  valueColor: "red" | "green";
  subtitle: string;
  date: string;
}

export const RectangleComponent: React.FC<RectangleComponentProps> = ({
  title,
  value,
  valueColor,
  subtitle,
  date,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.value, { color: valueColor }]}>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};