import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens/Home";
import { Splash } from "../screens/Splash";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};
