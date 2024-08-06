// Import Module
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import Design
import AppBar from '../design/AppBar';

// Import Helpers
import { formatDate } from '../utils/HelperFunctions';

// Import Data
import { TicketData1 } from '../utils/FakeData';

// Import Assets
const Info = require('../assets/icons/Info.png');

// Define Types
import { FamCareTicketProps } from '../utils/Interfaces';

const FamCareTicket = ({ route }: FamCareTicketProps) => {
  const { ticketId } = route.params;
  const ticketData = TicketData1;

  const MainData = {
    1: {
      status: 'LOOKING_FOR_PARTNER',
      title: 'Looking for a partner to work on the issue...',
      bgColor: '#242845',
    },
    2: {
      status: 'IN_PROGRESS',
      title: 'Partner is working on the issue',
      subTitle: `Should be resolved by ${formatDate(ticketData.estimated_tat)}`,
    },
    3: {
      status: 'ACTION_NEEDED',
      title: 'Add attachment to proceed',
      subTitle: `Should be resolved by ${formatDate(ticketData.estimated_tat)}`,
    },
    4: {
      status: 'RESOLVED',
      title: 'This issue is resolved on time!',
      subTitle: `${ticketData.issue_type} #${ticketData.csm_ticket_id}`,
    },
    5: {
      status: 'CLOSED',
      title: 'This issue is resolved on time!',
      subTitle: `${ticketData.issue_type} #${ticketData.csm_ticket_id}`,
    },
  };

  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.topSection}>
        <LinearGradient
          colors={['#242845', '#121212']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 0.9 }}
          style={styles.linearGradient}>
          <AppBar
            rightAction={{
              icon: Info,
              onPress: () => {
                console.log('Close');
              },
            }}
          />
          <Text style={styles.mainTitle}>
            Looking for a partner to work on the issue...
          </Text>
          <Text style={styles.subTitle}>Should be resolved by 23rd May</Text>
        </LinearGradient>
      </View>
      <ScrollView style={styles.chatScreen}>
        <View>
          <Text>Details</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FamCareTicket;

const styles = StyleSheet.create({
  topSection: {
    height: 240,
    justifyContent: 'center',
    shadowColor: '#878787',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Metropolis Bold',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 26,
  },
  subTitle: {
    fontSize: 24,
    color: 'white',
    margin: 16,
  },
  chatScreen: {
    height: '100%',
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: '#121212',
  },
});
