import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// eslint-disable-next-line object-curly-newline
const Button = ({ onPress, title, style, titleStyle, image }) => (
  <TouchableOpacity
    style={[style, { flexDirection: 'row', alignItems: 'center' }]}
    onPress={onPress}
  >
    {image}
    <Text style={titleStyle}>{title}</Text>
  </TouchableOpacity>
);
export default Button;
