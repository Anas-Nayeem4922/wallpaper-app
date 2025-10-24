import { WallPaper } from "@/types/wallpaper";
import { Heart } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props extends WallPaper {
    onPress: () => void;
}

const WallPaperComponent = ({ title, url, onPress }: Props) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <View className='w-[48%] bg-white rounded-2xl shadow-sm border border-gray-200 mb-4 overflow-hidden'>
            <Pressable onPress={onPress}>
                <Image
                    className='w-full h-52 rounded-t-2xl'
                    source={{ uri: url }}
                />
            </Pressable>
            <View className='flex flex-row items-center justify-between px-3 py-2'>
                <Text className='text-slate-950 font-semibold text-base flex-1'>
                    {title}
                </Text>
                <Pressable onPress={() => setIsLiked((l) => !l)}>
                    <Heart
                        color={isLiked ? "red" : "black"}
                        fill={isLiked ? "red" : "white"}
                        size={20}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default WallPaperComponent;
