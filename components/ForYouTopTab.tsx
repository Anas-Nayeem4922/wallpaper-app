import Liked from "@/screens/Liked";
import Suggested from "@/screens/Suggested";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function ForYouTopTab() {
    return (
        <Tab.Navigator
            initialRouteName='Suggested'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#020618",
                },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "#90a1b9",
                    tabBarIndicatorStyle: {
                        backgroundColor: "white",
                    },
                }}
                name='Suggested'
                component={Suggested}
            />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "#90a1b9",
                    tabBarIndicatorStyle: {
                        backgroundColor: "white",
                    },
                }}
                name='Liked'
                component={Liked}
            />
        </Tab.Navigator>
    );
}
