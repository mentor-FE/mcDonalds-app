import React from 'react';
import {Image, Linking, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Image
          source={{
            uri: 'https://gympass.com/mep-assets/images/country/us/partners/clients_07.png',
          }}
          style={{width: 51, height: 45}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Image
          source={{
            uri: 'https://prismoon.com/wp-content/uploads/2021/01/prismoon-Shopping-Ads-icon.png',
          }}
          style={{width: 45, height: 45}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
