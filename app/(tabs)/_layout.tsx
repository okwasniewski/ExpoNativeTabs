import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { withLayoutContext } from "expo-router";
import { createNativeBottomTabNavigator } from "react-native-bottom-tabs/react-navigation";

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => ({
            uri: 'https://www.svgrepo.com/show/22031/home-icon-silhouette.svg',
          }),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => ({
            uri: 'https://www.svgrepo.com/show/445112/explore-solid.svg',
          }),
        }}
      />
    </Tabs>
  );
}
