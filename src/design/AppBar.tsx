// Import Module
import React from 'react';
import { StyleSheet, Pressable, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import Assets
const Back = require('../assets/icons/Back.png');

// Import Interfaces
import { RightActionInterface } from '../utils/Interfaces';

const AppBar = ({ rightAction }: { rightAction?: RightActionInterface }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.appBar}>
      <Pressable
        onPress={goBack}
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'transparent' : 'transparent' },
          styles.iconContainer,
        ]}>
        <Image style={styles.icon} source={Back} />
      </Pressable>
      {rightAction && (
        <Pressable
          onPress={rightAction.onPress}
          style={({ pressed }) => [
            { backgroundColor: pressed ? 'transparent' : 'transparent' },
            styles.iconContainer,
          ]}>
          <Image style={styles.icon} source={rightAction.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
    padding: 4,
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    margin: 12,
  },
});
