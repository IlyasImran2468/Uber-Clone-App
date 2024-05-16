// // import Camera from './src/component/camera'
// // import CustomBtn from './src/component/customBtn';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native'
// import 'react-native-gesture-handler';
// import Navigator from './src/config/navigation';
// import Navigation from './src/config/navigation'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Arfa</Text> */}
//       <Navigator/>
//       <Navigation/>
//       {/* <Camera/> */}
//       {/* <CustomBtn/> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
// ;import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ListScreen from './screens/ListScreen';
// import CameraScreen from './screens/CameraScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="List">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="Camera" component={CameraScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import React from 'react'
import { View  ,Text} from 'react-native'
// import Navigation from './config/navigation';
import Navigator from './src/config/navigation';
function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Navigator/>
    </View>
  );
}

export default App