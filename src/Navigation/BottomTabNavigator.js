import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import HomeScreenOne from '../Screens/HomeScreenOne';
import HomeScreenTwo from '../Screens/HomeScreenTwo';
import HomeScreenThree from '../Screens/HomeScreenThree';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false, // Hide the header for all screens
                    tabBarActiveTintColor: 'blue',  // Color for the active tab
                    tabBarInactiveTintColor: '#fff', // Color for the inactive tab
                    tabBarStyle: {
                        backgroundColor: '#000', // Background color of the tab bar (optional, you can change to any color)
                    },
                }}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="HomeOne" component={HomeScreenOne} />
                <Tab.Screen name="HomeTwo" component={HomeScreenTwo} />
                <Tab.Screen name="HomeThree" component={HomeScreenThree} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
