import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";

import AccessHistory from "./screens/AccessHistory";
import DetailAccessHistory from "./screens/DetailAccessHistory";
import User from "./screens/User";
import DetailUser from "./screens/DetailUser";
import NewUser from "./screens/NewUser";
import EditUser from "./screens/EditUser";
import Door from "./screens/Door";
import DetailDoor from "./screens/DetailDoor";
import NewDoor from "./screens/NewDoor";
import EditDoor from "./screens/EditDoor";


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HistoryStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="Home" component={Home} />
      <HistoryStack.Screen name="Details" component={DetailUser} />
    </HistoryStack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="Home" component={AccessHistory} />
      <HistoryStack.Screen name="Details" component={DetailAccessHistory} />
    </HistoryStack.Navigator>
  );
}

function UserStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="Home" component={User} />
      <HistoryStack.Screen name="Details" component={DetailUser} />
      <HistoryStack.Screen name="Add" component={NewUser} />
      <HistoryStack.Screen name="Edit" component={EditUser} />

    </HistoryStack.Navigator>
  );
}

function DoorStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="Home" component={Door} />
      <HistoryStack.Screen name="Details" component={DetailDoor} />
      <HistoryStack.Screen name="Add" component={NewDoor} />
      <HistoryStack.Screen name="Edit" component={EditDoor} />

    </HistoryStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "History") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "User") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Clock") {
              iconName = focused ? "lock-closed" : "lock-closed-outline";
            } else if (route.name === "Info") {
              iconName = focused ? "ios-information-circle"
              : "ios-information-circle-outline";
            }

            // You can return any component that you like here!

            return (
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={iconName} color={color} size={size} />
                </View>
              </>
            );
          },
          tabBarInactiveTintColor: "black",
          headerStyle: {
            height: 140,
          },
          tabBarStyle: {
            height: 80,
            paddingBottom: 16,
          },
          headerTitleStyle: { fontSize: 34,fontWeight: "500",},
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="History" component={HistoryStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Clock" component={DoorStackScreen} />
        <Tab.Screen name="Info" component={HistoryScreen} tabBarButton={() => {}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
