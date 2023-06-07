import * as React from "react";
import { useState } from "react";
import { Path } from "react-native-svg";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const Country = (props) => {
    const [color, setColor] = useState(props.color);
    const [selected, setSelected] = useState(false);
    const [x, setLocationX] = useState();
    const [y, setLocationY] = useState();

    const handleCountryPress = (evt) => {
        setSelected(!selected);
        setColor("#5d8172");
        const { locationX, locationY } = evt.nativeEvent;
        setLocationX(locationX);
        setLocationY(locationY);
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={handleCountryPress}>
                <Path
                    d={props.path}
                    className="Angola"
                    fill={selected ? color : props.color}
                />
            </TouchableWithoutFeedback>
            {selected && (
                <Text style={[styles.name, { top: y + 5, left: x + 20 || 0 }]}>
                    {props.name}
                </Text>
            )}
        </>
    );
};
const styles = StyleSheet.create({
    name: {
        fontWeight: "bold",
    },
});

export default Country;
