import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import {Button, ImageCarousel, QuantitySelector} from '../../components';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = React.useState<
    string | undefined
  >(undefined);

  const [quantity, setQuantity] = React.useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map((option, idx) => (
          <Picker.Item label={option} value={option} key={idx} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from <Text style={styles.bold}>${product.price.toFixed(2)}</Text>
        {product.oldPrice && (
          <Text style={styles.old_price}>${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        text={'Add To Cart'}
        onPress={() => console.warn('Add to cart')}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
