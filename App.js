import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'src/store';
import IndexScreen from 'src/screens/IndexScreen';
import PreviewScreen from 'src/screens/PreviewScreen';
import FormScreen from 'src/screens/FormScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Preview: PreviewScreen,
  Form: FormScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: "MagicWeb.org BlogPost",
  }
});

const App = createAppContainer(navigator);

export default () => <Provider><App /></Provider>;
