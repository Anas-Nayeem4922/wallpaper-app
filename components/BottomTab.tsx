import Account from "@/screens/Account";
import Explore from "@/screens/Explore";
import ForYou from "@/screens/ForYou";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Camera, CircleUserRound, Radar } from "lucide-react-native";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='Explore'
            screenOptions={{
                headerShown: false,
                animation: "shift",
                tabBarStyle: {
                    backgroundColor: "#020618",
                    borderTopWidth: 0,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                    elevation: 0,
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#94a3b8",
            }}
        >
            <Tab.Screen
                name='For You'
                component={ForYou}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text className='text-xs' style={{ color }}>
                            For You
                        </Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <View className='items-center'>
                            <Camera color={color} size={22} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Explore'
                component={Explore}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text className='text-xs' style={{ color }}>
                            Explore
                        </Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <View className='items-center'>
                            <Radar color={color} size={22} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text className='text-xs' style={{ color }}>
                            Account
                        </Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <View className='items-center'>
                            <CircleUserRound color={color} size={22} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
