import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {},
  price: {
    fontSize: 18,
  },
  old_price: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  bold: {
    fontWeight: '500',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
