import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { Component } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        labeled={false}
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Create Post") {
              iconName = focused ? "create" : "create-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
               />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Create Post" component={CreatePost}/>
      </Tab.Navigator>
    );
  };

export default BottomTabNavigator