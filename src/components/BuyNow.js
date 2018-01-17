import React from 'react';
import { TouchableOpacity, View, Linking, Text } from 'react-native';

const BuyNow = props => {
  const { url, ButtonText } = props;
  return (
    <View style={style.BuyNowStyle}>
      <TouchableOpacity
        style={style.ButtonStyle}
        onPress={() => {
          Linking.openURL(url);
        }}
        title={ButtonText}
      >
        <Text style={style.ButtonTextStyle}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = {
  BuyNowStyle: {
    padding: 5
  },
  ButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  ButtonTextStyle: {
    fontSize: 24
  }
};

export default BuyNow;
