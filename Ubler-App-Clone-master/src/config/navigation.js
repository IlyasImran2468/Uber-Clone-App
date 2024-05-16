import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../component/Dashboard';
import Pickup from '../component/Pickup';
import Destination from '../component/Destination';
import CarSelection from '../component/CarSelection';
import RideHistory from '../component/RideHistory';
// import RideHistoryDetail from '../component/RideHistoryDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Navigator() {
  return (
    <NavigationContainer>
         <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      {/* <Drawer.Screen name="Ride" component={HistoryNavigator} /> */}
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

function DashboardNavigator() {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Pickup" component={Pickup} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="CarSelection" component={CarSelection} />
      </Stack.Navigator>
  )
}

function HistoryNavigator() {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Ride History" component={RideHistory} />
        {/* <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} /> */}
      </Stack.Navigator>
  )
}

export default Navigator;


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Dashboard from '../component/Dashboard';
// import Pickup from '../component/Pickup';
// import Destination from '../component/Destination';
// import CarSelection from '../component/CarSelection';

// const Stack = createNativeStackNavigator();

// function Navigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//         <Stack.Screen name="Pickup" component={Pickup} />
//         <Stack.Screen name="Destination" component={Destination} />
//         <Stack.Screen name="CarSelection" component={CarSelection} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Navigator;