import React from "react";
import { View, StyleSheet } from "react-native"

const Box = ({color='red'}) => {
    return <View style={[styles.box, { backgroundColor: color }]} />
}
const styles = StyleSheet.create(
    {
        box: {
            height: 50,
            width: 50,
            backgroundColor: 'red',
            borderRadius: 50,
        }
    }
)
export default Box