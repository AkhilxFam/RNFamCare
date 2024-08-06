// Import Module
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// Import Design
import AppBar from '../design/AppBar';

// Import Components
import TicketCard from '../components/TicketCard';
import ResolvedTicketCard from '../components/ResolvedTicketCard';

// Import Data
import { ActiveTicketsData, ResolvedTicketsData } from '../utils/FakeData';

const FamCareHistory = (): React.JSX.Element => (
  <View>
    <StatusBar translucent={true} backgroundColor="transparent" />
    <LinearGradient
      colors={['#242845', '#121212']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.3 }}
      style={styles.linearGradient}>
      <AppBar />
      <Text style={styles.title}>Help request history</Text>

      <View>
        <Text style={styles.sectionTitle}>Ongoing</Text>
        <View>
          {ActiveTicketsData.data.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Resolved</Text>
        <View>
          {ResolvedTicketsData.data.results.map(ticket => (
            <ResolvedTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </View>
      </View>
    </LinearGradient>
  </View>
);

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
  sectionTitle: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Metropolis Bold',
    color: 'rgba(255, 255, 255, 0.55)',
  },
});
