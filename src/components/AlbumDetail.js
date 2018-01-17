import React from 'react';
import { View, Text, Image } from 'react-native';

const AlbumDetail = props => {
  const { title, artist, thumbnail_image } = props.details;
  return (
    <View style={style.AlbumDetailStyle}>
      <View>
        <Image style={style.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>

      <View style={style.detailStyle}>
        <View>
          <Text style={style.titleStyle}>{title}</Text>
        </View>
        <View>
          <Text style={style.artistStyle}>{artist}</Text>
        </View>
      </View>
    </View>
  );
};

const style = {
  AlbumDetailStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  detailStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  titleStyle: {
    marginLeft: 5,
    fontSize: 16
  },
  artistStyle: {
    marginLeft: 5,
    fontSize: 24
  },
  thumbnailStyle: {
    flex: 1,
    marginLeft: 10,
    width: 50,
    height: 50
  }
};

export default AlbumDetail;
