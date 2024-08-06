/// DELETE LATER

const ActiveData = {
  data: [
    {
      created_at: 1722596567442,
      estimated_tat: '2024-07-25T17:47:13+05:30',
      id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc09',
      issue_type: 'Wallet Transactions (N)',
      status: 'IN_PROGRESS',
      ticket_id: '4304926',
    },
  ],
  code: 'SUCCESS',
  message: '',
};

const ResolvedData = {
  data: {
    previous:
      'http://localhost:3000/tickets?cursor=eyJUaW1lIjoiMjAyNC0wOC0wMlQxNjozMjo0Ny40NDIrMDU6MzAiLCJJRCI6Ijc5OGFhMmE0LTBjYTAtNDg2OS04YmZiLTNhN2UyNzZiYmMwOSJ9',
    next: null,
    results: [
      {
        closed_at: 1722596567442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc08',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
      {
        closed_at: 1722596569442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc09',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
      {
        closed_at: 1722596569442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc07',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
    ],
    count: 1,
  },
  code: 'SUCCESS',
  message: '',
};

// Import Module
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// Import Design
import AppBar from '../design/AppBar';

// Import Components
import TicketCard from '../components/TicketCard';
import ResolvedTicketCard from '../components/ResolvedTicketCard';

const FamCareHistory = (): React.JSX.Element => {
  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['#242845', '#121212']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.3 }}
        style={styles.linearGradient}>
        <AppBar />
        <Text style={styles.title}>Help request history</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ongoing</Text>

          <View>
            {ActiveData.data.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resolved</Text>

          <View>
            {ResolvedData.data.results.map(ticket => (
              <ResolvedTicketCard key={ticket.id} ticket={ticket} />
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FamCareHistory;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    textAlign: 'center',
    marginVertical: 24,
    fontFamily: 'Metropolis Extra Bold',
    color: 'rgba(255, 255, 255, 0.90)',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    paddingTop: 24,
    paddingBottom: 8,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Metropolis Bold',
    color: 'rgba(255, 255, 255, 0.55)',
  },
});
