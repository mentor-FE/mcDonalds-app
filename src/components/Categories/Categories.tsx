import React from 'react';
import {Text, TouchableHighlight, View, Image, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import {CategoriesItems} from './consts';

const Categories = () => {
  const [active, setActive] = React.useState(1);
  const setActiveCategory = (index: number) => {
    setActive(index);
  };
  const setClass = (index: number, active: number) => {
    return active === index ? COLORS.secondary : COLORS.white;
  };
  const setClassText = (index: number, active: number) => {
    return active === index ? COLORS.white : COLORS.black;
  };
  return (
    <View style={{paddingTop: 60}}>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
        }}>
        Hey,
      </Text>
      <Text
        style={{
          fontSize: SIZES.h1,
          marginBottom: 20,
        }}>
        what's up?
      </Text>
      <View style={styles.container}>
        {CategoriesItems.map((item, index) => {
          return (
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              style={{margin: 10, backgroundColor: setClass(index, active)}}
              key={index}
              onPress={() => setActiveCategory(index)}>
              <View style={styles.box}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: setClass(index, active),
                  }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontSize: SIZES.h3,
                    backgroundColor: setClass(index, active),
                    color: setClassText(index, active),
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
    flexWrap: 'wrap',
    gap: 10,
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
    objectFit: 'cover',
    objectPosition: 'center',
  },
});

export default Categories;
