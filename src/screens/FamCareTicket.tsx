// Import Module
import React from 'react';
import type { PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  ImageProps,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import Types
import { RootStackParamList } from '../App';

// Define Types
type FamCareTicketProps = NativeStackScreenProps<
  RootStackParamList,
  'FamCareTicket'
>;

// Import Design
import AppBar from '../design/AppBar';

const FamCareTicket = ({ route, navigation }: FamCareTicketProps) => {
  return (
    <View>
      <Text>FamCareTicket</Text>
    </View>
  );
};

export default FamCareTicket;

const styles = StyleSheet.create({});
