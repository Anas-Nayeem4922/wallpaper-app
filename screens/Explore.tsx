import ExploreComponent from "@/components/ExploreComponent";
import WallpaperDetail from "@/components/WallpaperDetail";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export type ExploreStackParamList = {
    ExploreComponent: undefined;
    WallpaperDetail: undefined;
};

const Explore = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='ExploreComponent'
                component={ExploreComponent}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                    name='WallpaperDetail'
                    component={WallpaperDetail}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Explore;
