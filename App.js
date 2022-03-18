import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import GreetingScreen from './src/screens/GreetingScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorMixScreen from './src/screens/ColorMixScreen';
import TextInputScreen from './src/screens/TextInputScreen';
import LayoutScreen from './src/screens/LayoutScreen';

// Routes without home screen
const routeConfigMap = {
  Components: ComponentsScreen,
  Greeting: GreetingScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreen,
  ColorMix: ColorMixScreen,
  TextInput: TextInputScreen,
  Layout: LayoutScreen,
};

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ...routeConfigMap
  },
  {
    initialRouteName: "Home",
    initialRouteParams: {
      routes: Object.keys(routeConfigMap).reverse()
    },
    defaultNavigationOptions: {
      title: "React Native Hooks Course",
    },
    
  }
);

export default createAppContainer(navigator);
