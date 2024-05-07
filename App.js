import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RestaurantScreen, CartScreen, OrderPreparingScreen, DeliveryScreen } from './screens/'
import { Provider } from 'react-redux';
import { store } from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
          <Stack.Screen name="OrderPreparing" options={{ presentation: 'fullScreenModal' }} component={OrderPreparingScreen} />
          <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


