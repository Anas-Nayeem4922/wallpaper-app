import { ExploreStackParamList } from "@/screens/Explore";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View } from "react-native";

type NavProp = StackNavigationProp<ExploreStackParamList, "ExploreComponent">;

const ExploreComponent = () => {
    const navigation = useNavigation<NavProp>();
    return (
        <View>
            <Button
                onPress={() => {
                    navigation.navigate("WallpaperDetail");
                }}
                title='Click to open modal'
            />
        </View>
    );
};

export default ExploreComponent;
