// Import Module
import React from 'react';
import type { PropsWithChildren } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

type FamButtonProps = {
  text: string;
  icon?: any;
  onClick: () => void;
};

const FamButton = ({
  text,
  icon,
  onClick,
}: PropsWithChildren<FamButtonProps>): React.JSX.Element => {
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#C98621' : '#FAA629',
        },
        styles.wrapperCustom,
      ]}>
      {icon && <Image style={styles.actionImage} source={icon} />}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    height: 48,
    alignItems: 'center',
    gap: 8,
    flexDirection: 'row',
  },
  actionImage: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Metropolis Bold',
    color: 'rgba(0, 0, 0, 0.80)',
  },
});

export default FamButton;
