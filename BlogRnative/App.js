import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import {Provider} from "./src/context/blogContext"
import IndexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/editScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    show:ShowScreen,
    create:CreateScreen,
    edit:EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
