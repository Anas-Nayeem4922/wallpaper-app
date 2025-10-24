import { ExploreStackParamList } from "@/screens/Explore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Share2, X } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";

type RouteProp = NativeStackScreenProps<
    ExploreStackParamList,
    "WallpaperDetail"
>;

type NavProp = StackNavigationProp<ExploreStackParamList, "WallpaperDetail">;

const WallpaperDetail = ({ route }: RouteProp) => {
    const { title, url } = route.params;
    const navigation = useNavigation<NavProp>();
    return (
        <View className='h-screen w-screen flex items-center my-6'>
            <View className='w-[90%] mb-6 flex flex-row justify-between items-center'>
                <Text className='bg-gray-200 rounded-full p-2'>
                    <X strokeWidth={3} onPress={() => navigation.goBack()} />
                </Text>
                <Text className='bg-gray-200 rounded-full p-2'>
                    <Share2
                        strokeWidth={2}
                        onPress={() => navigation.goBack()}
                    />
                </Text>
            </View>

            <Image
                source={{ uri: url }}
                className='w-[90%] h-[60%] rounded-3xl shadow-md'
            />
        </View>
    );
};

export default WallpaperDetail;
