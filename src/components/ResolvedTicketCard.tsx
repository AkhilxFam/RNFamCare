// Import Modules
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from 'react-native';

// Import Assets
const ChevronRight = require('../assets/icons/ChevronRight.png');

// Import Helpers
import { formatDateWithTime } from '../utils/HelperFunctions';

// Import Types
import { RootStackParamList } from '../App';

type ResolvedTicketProps = {
  closed_at: string;
  created_at: number;
  id: string;
  issue_type: string;
  ticket_id: string;
};

const ResolvedTicketCard = ({ ticket }: { ticket: ResolvedTicketProps }) => {
  console.log(ticket);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      key={ticket.id}
      onPress={() => {
        navigation.navigate('FamCareTicket', { ticketId: ticket.id });
      }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#f0f0f01a' : 'transparent' },
        styles.ticketCard,
      ]}>
      <View>
        <Text style={styles.issueText}>
          {`${ticket.issue_type} #${ticket.ticket_id}`}
        </Text>
        <Text style={styles.statusText}>
          Closed on {formatDateWithTime(ticket.closed_at)}
        </Text>
      </View>
      <Image style={styles.chevron} source={ChevronRight} />
    </Pressable>
  );
};

export default ResolvedTicketCard;

const styles = StyleSheet.create({
  ticketCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  issueText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Metropolis',
    color: 'rgba(255, 255, 255, 0.90)',
  },
  statusText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Metropolis',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  chevron: {
    width: 24,
    height: 24,
  },
});
