import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import GreetingScreen from './src/screens/GreetingScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

// Routes without home screen
const routeConfigMap = {
  Components: ComponentsScreen,
  Greeting: GreetingScreen,
  List: ListScreen,
  Image: ImageScreen
};

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ...routeConfigMap
  },
  {
    initialRouteName: "Image",
    initialRouteParams: {
      routes: Object.keys(routeConfigMap)
    },
    defaultNavigationOptions: {
      title: "React Native Hooks Course",
    },
    
  }
);

export default createAppContainer(navigator);
