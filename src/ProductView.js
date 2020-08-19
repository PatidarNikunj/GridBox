import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const numColumns = 4;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          key: 1,
          title: 'Product 1',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X27Y57D1016521175FS3087/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=list,version=1581947588,modelImageVersion=1583425928/political-statement-anti-trump-demo-resistance-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 2,
          title: 'Product 2',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A784MPA3176PT17X30Y29D1026639062FS2834/views/1,width=378,height=378,appearanceId=784,backgroundColor=F2F2F2,modelId=1543,crop=list,version=1577452174,modelImageVersion=1563438318/winter-makes-me-grumpy-mens-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 3,
          title: 'Product 3',
          productThumb:
            'https://ih1.redbubble.net/image.50093762.5267/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
          price: '$ 20',
        },
        {
          key: 4,
          title: 'Product 4',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T121A54MPA2998PT17X34Y11D1029280696FS1626/views/1,width=378,height=378,appearanceId=54,backgroundColor=F2F2F2,modelId=1903,crop=list,version=1589204159,modelImageVersion=1585828555/trump-made-me-want-to-be-a-canadian-mens-ringer-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 5,
          title: 'Product 5',
          productThumb:
            'https://ih1.redbubble.net/image.784569122.4168/ssrco,classic_tee,mens,heather_grey,front_alt,square_product,600x600.jpg',
          price: '$ 20',
        },
        {
          key: 6,
          title: 'Product 6',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A388MPA3140PT17X70Y47D1031915128FS2187/views/1,width=378,height=378,appearanceId=388,backgroundColor=F2F2F2,modelId=115,crop=list,version=1597213591,modelImageVersion=1583425928/acceptance-empowers-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 7,
          title: 'Product 7',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A231MPA3140PT17X33Y84D13045394FS13352Cx000000/views/1,width=378,height=378,appearanceId=231,backgroundColor=F2F2F2,modelId=115,crop=list,version=1596957081,modelImageVersion=1583425928/im-an-engineer-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 8,
          title: 'Product 8',
          productThumb:
            'https://ih1.redbubble.net/image.1069196623.6206/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u1.jpg',
          price: '$ 20',
        },
        {
          key: 9,
          title: 'Product 9',
          productThumb:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOdJH4HSavDjyoXX9PuGFi-3sykP4T_fvE3g&usqp=CAU',
          price: '$ 20',
        },
        {
          key: 10,
          title: 'Product 10',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1263A799MPA3539PT17X26Y66D1015619128S93CxFFFFFF/views/1,width=378,height=378,appearanceId=799,backgroundColor=F2F2F2,modelId=1982,crop=list,version=1584959317,modelImageVersion=1586242026/fuck-off-statement-mens-sport-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 11,
          title: 'Product 11',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X27Y57D1016521175FS3087/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=list,version=1581947588,modelImageVersion=1583425928/political-statement-anti-trump-demo-resistance-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 12,
          title: 'Product 12',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A784MPA3176PT17X30Y29D1026639062FS2834/views/1,width=378,height=378,appearanceId=784,backgroundColor=F2F2F2,modelId=1543,crop=list,version=1577452174,modelImageVersion=1563438318/winter-makes-me-grumpy-mens-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 13,
          title: 'Product 13',
          productThumb:
            'https://ih1.redbubble.net/image.50093762.5267/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
          price: '$ 20',
        },
        {
          key: 14,
          title: 'Product 14',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T121A54MPA2998PT17X34Y11D1029280696FS1626/views/1,width=378,height=378,appearanceId=54,backgroundColor=F2F2F2,modelId=1903,crop=list,version=1589204159,modelImageVersion=1585828555/trump-made-me-want-to-be-a-canadian-mens-ringer-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 15,
          title: 'Product 15',
          productThumb:
            'https://ih1.redbubble.net/image.784569122.4168/ssrco,classic_tee,mens,heather_grey,front_alt,square_product,600x600.jpg',
          price: '$ 20',
        },
        {
          key: 16,
          title: 'Product 16',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A388MPA3140PT17X70Y47D1031915128FS2187/views/1,width=378,height=378,appearanceId=388,backgroundColor=F2F2F2,modelId=115,crop=list,version=1597213591,modelImageVersion=1583425928/acceptance-empowers-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 17,
          title: 'Product 17',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A231MPA3140PT17X33Y84D13045394FS13352Cx000000/views/1,width=378,height=378,appearanceId=231,backgroundColor=F2F2F2,modelId=115,crop=list,version=1596957081,modelImageVersion=1583425928/im-an-engineer-mens-premium-t-shirt.jpg',
          price: '$ 20',
        },
        {
          key: 18,
          title: 'Product 18',
          productThumb:
            'https://ih1.redbubble.net/image.1069196623.6206/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u1.jpg',
          price: '$ 20',
        },
        {
          key: 19,
          title: 'Product 19',
          productThumb:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOdJH4HSavDjyoXX9PuGFi-3sykP4T_fvE3g&usqp=CAU',
          price: '$ 20',
        },
        {
          key: 20,
          title: 'Product 20',
          productThumb:
            'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1263A799MPA3539PT17X26Y66D1015619128S93CxFFFFFF/views/1,width=378,height=378,appearanceId=799,backgroundColor=F2F2F2,modelId=1982,crop=list,version=1584959317,modelImageVersion=1586242026/fuck-off-statement-mens-sport-t-shirt.jpg',
          price: '$ 20',
        },
      ],
    };
  }

  returnProductView(item) {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.productContainer}>
        <Image
          style={styles.imageView}
          source={{
            uri: item.productThumb,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    const {productList} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Product Catalog</Text>
        <FlatList
          data={formatData(productList, numColumns)}
          keyExtractor={(item) => `${item.key}`}
          listKey={(index) => `${index}`}
          renderItem={({item, index}) => this.returnProductView(item)}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

export default ProductView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    alignSelf: 'center',
    padding: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    borderRadius: 10,
    fontSize: 25,
  },
  productContainer: {
    flex: 1,
    margin: 2,
    borderColor: 'rgba(0,0,0,0.8)',
    borderRadius: 5,
    borderWidth: 1,
  },
  imageView: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    padding: 3,
    margin: 5,
  },
  itemInvisible: {
    flex: 1,
    margin: 2,
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
