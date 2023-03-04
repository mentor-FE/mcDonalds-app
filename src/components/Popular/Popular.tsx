import React from 'react';
import {Text, TouchableHighlight, View, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from '../../../constants';
import {PopularItems} from './consts';

const Popular = () => {
  return (
    <View style={{paddingTop: 60}}>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
        }}>
        Popular
      </Text>
      <View style={styles.container}>
        {PopularItems.map((item, index) => {
          return (
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              style={{margin: 10}}
              key={index}>
              <View style={styles.box}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                  }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontSize: SIZES.h3,
                    backgroundColor: Colors.white,
                    color: Colors.black,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.h1,
  },
});
export default Popular;
