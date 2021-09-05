/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, useWindowDimensions, View} from 'react-native';
import styles from './styles';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = React.useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

  React.useEffect(() => {});
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
