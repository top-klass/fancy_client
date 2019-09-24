import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from './Components/MainView';

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainView // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);