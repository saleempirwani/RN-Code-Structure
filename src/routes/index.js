import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { KeyboardAvoidingView } from "react-native";

import { GlobalStyles } from "../assets";
import { HomeScreen, LoginScreen } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"AuthStack"}
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"HomeStack"}
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        style={[GlobalStyles.flex(1)]}
      >
        <RootNavigator />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
