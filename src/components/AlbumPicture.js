import React from 'react';
import { View, Image } from 'react-native';

const Header = props => {
  const { image } = props;
  return (
    <View>
      <Image style={style.ImageStyle} source={{ uri: image }} />
    </View>
  );
};

const style = {
  ImageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default Header;
