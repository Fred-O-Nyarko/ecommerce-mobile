import React from 'react';
import {FlatList, View} from 'react-native';
import {ProdcutItem} from '../../components';
import products from '../../data/products';
const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProdcutItem item={item} key={item.id} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
