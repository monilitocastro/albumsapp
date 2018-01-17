/**
 * State-ful component
 */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Card from './material/Card';
import CardSection from './material/CardSection';
import AlbumDetail from './AlbumDetail';
import AlbumPicture from './AlbumPicture';
import BuyNow from './BuyNow';

class AlbumList extends Component {
  state = { albumList: [] };
  componentDidMount() {
    this.getList.bind(this)();
  }
  async getList() {
    const response = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const albumList = await response.json();
    this.setState({ albumList });
  }
  renderList() {
    const { albumList } = this.state;
    const result = albumList.map((album, i) => {
      const { title, artist, url, image, thumbnail_image } = album;
      return (
        <Card key={i}>
          <CardSection top>
            <AlbumDetail details={{ title, artist, thumbnail_image }} />
          </CardSection>
          <CardSection>
            <AlbumPicture image={image} />
          </CardSection>
          <CardSection>
            <BuyNow url={url} ButtonText={'Buy Now'} />
          </CardSection>
        </Card>
      );
    });
    return result;
  }
  render() {
    return <ScrollView style={{ marginBottom: 50 }}>{this.renderList.bind(this)()}</ScrollView>;
  }
}

export default AlbumList;
