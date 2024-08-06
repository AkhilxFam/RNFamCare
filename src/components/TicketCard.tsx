// Import Modules
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import Assets
const ChevronRight = require('../assets/icons/ChevronRight.png');
const LookingForPartner = require('../assets/icons/LookingForPartner.png');
const InProgress = require('../assets/icons/InProgress.png');
const ActionNeeded = require('../assets/icons/ActionNeeded.png');

// Import Helpers
import { formatDate } from '../utils/HelperFunctions';

// Import Types
import { RootStackParamList, TicketCardProps } from '../utils/Interfaces';

const TicketCard = ({
  ticket,
  hideChevron,
}: {
  ticket: TicketCardProps;
  hideChevron?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const statuses = {
    LOOKING_FOR_PARTNER: {
      text: 'Looking for a partner to join',
      icon: LookingForPartner,
    },
    IN_PROGRESS: {
      text: 'Partner is working on the issue',
      icon: InProgress,
    },
    ACTION_NEEDED: {
      text: 'Action needed',
      icon: ActionNeeded,
    },
  };

  return (
    <View style={styles.ticketCardContainer}>
      <Pressable
        key={ticket.id}
        onPress={() => {
          navigation.navigate('FamCareTicket', {
            ticketId: ticket.id,
          });
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#f0f0f01a' : 'transparent',
            paddingBottom: hideChevron ? 28 : 16,
            width: Dimensions.get('window').width - 40,
          },
          styles.ticketCard,
        ]}>
        <Image style={styles.image} source={statuses[ticket.status].icon} />
        <View>
          <Text style={styles.resolveText}>
            Should be resolved by {formatDate(ticket.estimated_tat)}
          </Text>
          <Text numberOfLines={1} style={styles.statusText}>
            {statuses[ticket.status].text}
          </Text>
        </View>
        {!hideChevron && <Image style={styles.chevron} source={ChevronRight} />}
      </Pressable>
    </View>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  ticketCardContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  ticketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    gap: 16,
    backgroundColor: '#1D1D1D',
  },
  image: {
    width: 48,
    height: 48,
  },
  resolveText: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(255, 255, 255, 0.35)',
    fontFamily: 'Metropolis',
  },
  statusText: {
    fontSize: 16,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Metropolis Bold',
    maxWidth: Dimensions.get('window').width - 40 - 32 - 40 - 32 - 24,
  },
  chevron: {
    width: 24,
    height: 24,
  },
});
