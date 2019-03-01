import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import RootNavigator from './RootNavigator';

class AppNavigatorState extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid
    );
  }

  onBackButtonPressAndroid = () => {
    const { dispatch, nav } = this.props;
    console.log(this.props);
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  orders: state.OrderReducer,
  tables: state.TableReducer,
  users: state.LoginReducer
});
export default connect(mapStateToProps)(AppNavigatorState);
