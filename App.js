import {
    ScrollView,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import { useState, useRef } from "react";
import SvgWorld from "./src/components/Map/svgworld.js";

export default function App() {
    const [x, setLocationX] = useState();
    const [y, setLocationY] = useState();
    const handleCountryPress = (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        setLocationX(locationX);
        setLocationY(locationY);
        // console.log(`x coord = ${evt.nativeEvent.locationX}`);
        // console.log(`y coord = ${evt.nativeEvent.locationY}`);
        
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>World Map</Text>
            <ScrollView styles={styles.map}>
                {/* <TouchableWithoutFeedback
                    onPress={(evt) => handleCountryPress(evt)}
                > */}
                    <SvgWorld
                        width={2000}
                        height={857}
                        currentColor={"white"}
                        viewBox="300 20 2000 857"
                        // onPress={handleCountryPress}
                    />
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ded4ba",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        //    alignContent: "center"
    },
    name: {
        position: "absolute",
    },
});
