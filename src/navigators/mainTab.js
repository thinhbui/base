import { createBottomTabNavigator } from 'react-navigation';
import Dashboard from '../screens/MainTab/Dashboard/Dashboard';
import List from '../screens/MainTab/List/List';

const mainTab = createBottomTabNavigator(
  {
    Dashboard,
    List
  },
  {}
);
export default mainTab;
