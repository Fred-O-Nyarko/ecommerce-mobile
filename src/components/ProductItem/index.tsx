import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    averageRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProdcutItem = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />

      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainer}>
          {Array(5)
            .fill(0)
            .map((el, i) => (
              <Icon
                key={`${item.id}-${i}`}
                name={i < Math.floor(item.averageRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
                style={styles.star}
              />
            ))}
          <Text style={styles.rating}>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from <Text style={styles.bold}>${item.price.toFixed(2)}</Text>
          {item.oldPrice && (
            <Text style={styles.old_price}>${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProdcutItem;
