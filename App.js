import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'src/store';
import IndexScreen from 'src/screens/IndexScreen';
import CreateScreen from 'src/screens/CreateScreen';
import PreviewScreen from 'src/screens/PreviewScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Create: CreateScreen,
  Preview: PreviewScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: "Created by alias create-app-expo",
  }
});

const App = createAppContainer(navigator);

export default () => <Provider><App /></Provider>;
