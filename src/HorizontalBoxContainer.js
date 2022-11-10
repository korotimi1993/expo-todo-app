
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function BoxContainer() {
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
        height: 90,
        width: '95%',
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: 'space-evenly',
       alignItems:'center'

    },


})
