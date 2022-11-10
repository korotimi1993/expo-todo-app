
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function VerticalBoxContainer() {
    return (


        <View style={styles.rectangle}>
            <Box />
            <Box color='black' />
            <Box color='green' />
        </View>

    );
}



const styles = StyleSheet.create({
    rectangle: {
        height: 250,
        width: '25%',
        backgroundColor: 'white',
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center'



    },


})
