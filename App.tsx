import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "./components/BottomTab";
import "./global.css";

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#020618" }}>
            <BottomTab />
        </SafeAreaView>
    );
};

export default App;
