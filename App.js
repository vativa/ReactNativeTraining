import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import GreetingScreen from './src/screens/GreetingScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

// Routes without home screen
const routeConfigMap = {
  Components: ComponentsScreen,
  Greeting: GreetingScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreen,
};

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ...routeConfigMap
  },
  {
    initialRouteName: "Color",
    initialRouteParams: {
      routes: Object.keys(routeConfigMap)
    },
    defaultNavigationOptions: {
      title: "React Native Hooks Course",
    },
    
  }
);

export default createAppContainer(navigator);
