import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/indexScreen";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { BlogProvider } from "./src/context/blogContext";
const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Blogs"
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
}