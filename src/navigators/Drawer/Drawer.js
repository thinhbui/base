import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Button } from 'base-components';
import Colors from '../../constants/Colors';
import { ratioH, statusBarHeight } from '../../utilities/Transform';

class Drawer extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.theme,
          flex: 1,
          paddingTop: statusBarHeight
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={{
              uri:
                'https://cdn3.iconfinder.com/data/icons/city-faces/30/emoji_face_man_19-512.png'
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 20
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
            Đỗ Nam Trung
          </Text>
          <Text style={{ fontSize: 12, color: '#fff' }}>abc@abc.com</Text>
        </View>
        <ScrollView style={{ flex: 3.5 }}>
          <Button
            image={<FeatherIcon name="layout" color="#fff" />}
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff', textAlign: 'center' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
          <Button
            title="List"
            onPress={() => this.props.navigation.navigate('List')}
            style={{ width: '100%', height: 40 * ratioH }}
            titleStyle={{ color: '#fff' }}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Drawer;
