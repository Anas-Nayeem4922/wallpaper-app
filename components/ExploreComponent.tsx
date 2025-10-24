import { WallPapers } from "@/constants/wallpapers";
import { ExploreStackParamList } from "@/screens/Explore";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, View } from "react-native";
import WallPaperComponent from "./WallPaperComponent";

type NavProp = StackNavigationProp<ExploreStackParamList, "ExploreComponent">;

const ExploreComponent = () => {
    const navigation = useNavigation<NavProp>();

    return (
        <View className='flex-1 bg-white'>
            <FlatList
                data={WallPapers}
                renderItem={({ item }) => (
                    <WallPaperComponent
                        id={item.id}
                        title={item.title}
                        url={item.url}
                        onPress={() =>
                            navigation.navigate("WallpaperDetail", item)
                        }
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                }}
                contentContainerStyle={{
                    paddingVertical: 10,
                }}
            />
        </View>
    );
};

export default ExploreComponent;
