import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductsToCart,
  decreasecartqty,
  deleteProductsToCart,
  removeProductsToCart,
} from '../../redux/CartSlice';
import {decreaseqty, increaseqty} from '../../redux/MyProduceSlice';
import {useState} from 'react';

const MyProducts = () => {
  const [qty, setQty] = useState();
  const myproduct = useSelector(state => state.product);
  const mycart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          marginBottom: 10,
        }}>
        <Text style={{color: '#000', fontSize: 16, fontweight: '700'}}>
          Redux Toolkit Demo
        </Text>
      </View>
      <View style={styles.flatcontainer}>
        <FlatList
          data={myproduct}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '45%',
                  alignSelf: 'center',
                  height: '100%',
                  alignContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}
                key={item.id}>
                <Image
                  style={{width: 100, height: 100, backgroundColor: '#fff'}}
                  resizeMode="contain"
                  source={item.image}></Image>
                <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
                  {item.brand}
                </Text>
                <Text style={{fontSize: 16}}>{item.name}</Text>
                <Text style={{fontSize: 16, fontWeight: '600', color: 'red'}}>
                  S${item.price}
                </Text>
                <Text style={{fontSize: 14, color: 'black'}}>{item.bar}</Text>
                <View style={{marginTop: 10, width: '100%'}}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(addProductsToCart(item));
                        dispatch(increaseqty(item.id));
                      }}
                      style={[
                        styles.plusbutton,
                        {
                          borderTopRightRadius: 15,
                          borderBottomLeftRadius: 15,
                        },
                      ]}>
                      <Text style={{color: '#fff'}}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  {item.qty == 0 ? null : (
                    <>
                      <TouchableOpacity
                        style={styles.plusbutton}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(removeProductsToCart(item));
                            dispatch(decreaseqty(item.id));
                            setQty(item.qty);
                            console.log(' setitem qty', qty);
                            dispatch(decreasecartqty(item.id));
                          } else {
                            dispatch(deleteProductsToCart(item));
                            dispatch(decreaseqty(item.id));
                            dispatch(decreasecartqty(item.id));
                          }
                        }}>
                        <Text style={{color: '#fff'}}>-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.quantity}>
                        <Text style={{color: 'black'}}>{item.qty}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.plusbutton}
                        onPress={() => {
                          dispatch(addProductsToCart(item));
                          dispatch(increaseqty(item.id));
                        }}>
                        <Text style={{color: '#fff'}}>+</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            );
          }}
        />
        {mycart.length > 0 && (
          <View style={styles.cartfloat}>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={[styles.plusbutton, {backgroundColor: 'grey'}]}>
                <Text style={{color: '#fff'}}>Filter</Text>
              </TouchableOpacity>
              {mycart.length > 0 ? (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../images/cart.png')}
                    style={styles.icon}
                  />
                  <View style={styles.count}>
                    <FlatList
                      data={myproduct}
                      renderItem={({item, index}) => {
                        return <Text style={{color: '#fff'}}>{item.qty}</Text>;
                      }}
                    />
                  </View>
                </View>
              ) : null}

              <TouchableOpacity
                style={[styles.plusbutton, {backgroundColor: 'grey'}]}>
                <Text style={{color: '#fff'}}>Sort</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default MyProducts;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontweight: 'bold',
    marginBottom: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  flatcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  plusbutton: {
    backgroundColor: 'red',
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  count: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 5,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  cartfloat: {
    width: '50%',
    height: 40,
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 20,
    flexirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },
});
