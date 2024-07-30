// Import Module
import type { PropsWithChildren } from 'react';
import React, { useCallback, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Linking,
  Image,
  ImageProps,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

// Import Component
import FamButton from '../components/FamButton';

// Import Assets
const EmailUs = require('../assets/icons/EmailUs.png');
const PhoneCall = require('../assets/icons/PhoneCall.png');
const MessageChatBubbles = require('../assets/icons/MessageChatBubbles.png');
const ChevronRight = require('../assets/icons/ChevronRight.png');

type ActionButtonProps = {
  text: string;
  icon?: ImageProps;
  onPress: () => void;
};

type BSOptionProps = {
  text: string;
  subText?: string;
  onPress: () => void;
};

const ActionButton = ({
  text,
  icon,
  onPress,
}: PropsWithChildren<ActionButtonProps>): React.JSX.Element => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#f0f0f01a' : 'transparent',
        },
        styles.actionButton,
      ]}>
      {icon && <Image style={styles.actionImage} source={icon} />}
      <Text style={styles.actionText}>{text}</Text>
    </Pressable>
  );
};

const BSOption = ({
  text,
  subText,
  onPress,
}: PropsWithChildren<BSOptionProps>) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#f0f0f01a' : 'transparent',
        },
        styles.bsOption,
      ]}>
      <View>
        <Text style={styles.optionText}>{text}</Text>
        {subText && <Text style={styles.optionSubText}>{subText}</Text>}
      </View>
      <Image style={styles.chevron} source={ChevronRight} />
    </Pressable>
  );
};

const FamCareIntro = (): React.JSX.Element => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['30%'];

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onChat = () => {
    Alert.alert('Chat with FamBot', 'Coming soon!');
  };

  const onActionTrigger = useCallback(async (url: string) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    console.log(supported);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <View style={styles.mainView}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['#242845', '#121212']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.3 }}
        style={styles.linearGradient}>
        <View style={styles.top}>
          <Text style={styles.mainText}>We're here to help!</Text>
          <Text style={styles.subText}>
            24x7 support available exclusively for the 21st century generation
          </Text>
        </View>
        <View style={styles.center}>
          <View style={styles.actionButtons}>
            <ActionButton
              text={'Call us'}
              icon={PhoneCall}
              onPress={() => {
                onActionTrigger('tel:+1234567890');
              }}
            />
            <ActionButton
              text={'Email us'}
              icon={EmailUs}
              onPress={() => {
                onActionTrigger('mailto:support@expo.io');
              }}
            />
            <ActionButton
              text={'More'}
              onPress={() => {
                bottomSheetRef.current?.expand();
              }}
            />
          </View>
          <Image
            source={require('../assets/images/FamCareIntro.png')}
            style={styles.mainImg}
          />
        </View>
        <View style={styles.bottom}>
          <FamButton
            text={'Chat with FamBot'}
            icon={MessageChatBubbles}
            onClick={onChat}
          />
        </View>
      </LinearGradient>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
        handleComponent={() => null}
        backgroundStyle={{ backgroundColor: '#171717' }}
        backdropComponent={renderBackdrop}
        index={-1}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.bsTitle}>Options</Text>
          <BSOption
            text={'Help requests history'}
            subText={'Ongoing and resolved'}
            onPress={() => {
              onActionTrigger('https://expo.io');
            }}
          />
          <BSOption text={'Known issues'} onPress={onChat} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
  },
  top: {
    marginTop: 104,
  },
  mainText: {
    fontSize: 28,
    color: '#E7E8E8',
    textAlign: 'center',
    fontFamily: 'Metropolis Extra Bold',
  },
  subText: {
    fontSize: 14,
    maxWidth: 300,
    marginTop: 10,
    color: '#96979A',
    fontFamily: 'Metropolis',
    textAlign: 'center',
    alignSelf: 'center',
  },
  center: {
    // flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  actionButton: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    borderColor: '#ffffff14',
    borderWidth: 1,
    borderRadius: 20,
  },
  actionImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  actionText: {
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Metropolis',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },
  mainImg: {
    resizeMode: 'contain',
    maxWidth: '100%',
    borderWidth: 1,
    height: 250,
  },
  bottom: {
    padding: 20,
    marginTop: 'auto',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: '#171717',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },
  bsTitle: {
    fontSize: 20,
    color: '#E7E8E8',
    fontFamily: 'Metropolis Extra Bold',
    paddingBottom: 16,
    textAlign: 'center',
  },
  bsOption: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  optionText: {
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Metropolis Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  optionSubText: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontFamily: 'Metropolis',
    fontSize: 14,
    lineHeight: 20,
  },
  chevron: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default FamCareIntro;
