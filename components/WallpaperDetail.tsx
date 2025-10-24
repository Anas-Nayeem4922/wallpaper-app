import { ExploreStackParamList } from "@/screens/Explore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { DownloadCloud, Share2, X } from "lucide-react-native";
import React from "react";
import { Image, Share, Text, TouchableOpacity, View } from "react-native";

import * as FileSystem from "expo-file-system/legacy";
import * as MediaLibrary from "expo-media-library";

type RouteProp = NativeStackScreenProps<
    ExploreStackParamList,
    "WallpaperDetail"
>;
type NavProp = StackNavigationProp<ExploreStackParamList, "WallpaperDetail">;

const WallpaperDetail = ({ route }: RouteProp) => {
    const navigation = useNavigation<NavProp>();
    const { title, url } = route.params;

    const download = async () => {
        let date = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

        try {
            await FileSystem.downloadAsync(route.params.url, fileUri);
            const response = await MediaLibrary.requestPermissionsAsync(true);
            if (response.granted) {
                MediaLibrary.createAssetAsync(fileUri);
                alert("Image saved");
            } else {
                console.error("permission not granted");
            }
        } catch (err) {
            console.log("FS Err: ", err);
        }
    };

    return (
        <View className='h-screen w-screen flex items-center my-6'>
            <View className='w-[90%] mb-6 flex flex-row justify-between items-center'>
                <Text className='bg-gray-200 rounded-full p-2'>
                    <X strokeWidth={3} onPress={() => navigation.goBack()} />
                </Text>
                <Text className='bg-gray-200 rounded-full p-2'>
                    <Share2
                        strokeWidth={2}
                        onPress={() => Share.share({ message: url })}
                    />
                </Text>
            </View>

            <Text className='font-extrabold text-3xl tracking-tighter text-slate-950 mb-4'>
                {title}
            </Text>

            <Image
                source={{ uri: url }}
                className='w-[90%] h-[60%] rounded-3xl shadow-md'
            />

            <TouchableOpacity
                onPress={download}
                className='w-[90%] bg-neutral-300 flex flex-row gap-2 justify-center items-center py-3 rounded-xl mt-6'
            >
                <DownloadCloud />
                <Text className='font-bold tracking-tighter text-lg'>
                    Download
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WallpaperDetail;
