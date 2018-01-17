import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { HeaderStyle, TextHeaderStyle } = styles;
  return (
    <View style={HeaderStyle}>
      <Text style={TextHeaderStyle}>{props.HeaderText}</Text>
    </View>
  );
};

const styles = {
  HeaderStyle: {
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 3,
    borderBottomColor: '#AAAAAA',
    position: 'relative'
  },
  TextHeaderStyle: {
    fontSize: 24,
    color: '#000000'
  }
};

export default Header;
