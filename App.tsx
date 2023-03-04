/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories/Categories';
import Popular from './src/components/Popular/Popular';

function App(): JSX.Element {
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 34,
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 24,
        }}>
        <Header />
        <Categories />
        <Popular />
      </View>
    </ScrollView>
  );
}

export default App;
