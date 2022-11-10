import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HorizontalBoxContainer from './src/HorizontalBoxContainer';
import VerticalBoxContainer from './src/VerticalBoxContainer';


export default function App() {
  return (

    <View style={styles.container}>
      <View style={{borderBottomWidth: 2,borderBottomColor: 'white', alignItems:'center',justifyContent:'center', flex:1}}><HorizontalBoxContainer /></View>
      <View style={{ borderBottomWidth: 2,borderBottomColor: 'white',flexDirection: "row", justifyContent: 'space-evenly',alignItems:'center',flex:2 }}>
        <VerticalBoxContainer />
        <VerticalBoxContainer />
      </View>
      <View style={{ alignItems:'center',justifyContent:'center', flex:1}}><HorizontalBoxContainer /></View>

      <StatusBar style="auto" backgroundColor='red' />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#000',
    //alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },


})
