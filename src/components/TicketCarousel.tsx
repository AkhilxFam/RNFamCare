import * as React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { StyleSheet, View, Dimensions } from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import TicketCard from './TicketCard';

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

function Index() {
  const progress = useSharedValue<number>(0);

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={ref}
        vertical={false}
        width={Dimensions.get('window').width}
        height={110}
        style={{
          width: Dimensions.get('window').width,
        }}
        loop
        pagingEnabled={true}
        snapEnabled={true}
        autoPlay={false}
        autoPlayInterval={1500}
        onProgressChange={progress}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={ActiveData.data}
        renderItem={({ index, item }) => (
          <TicketCard
            key={index}
            ticket={item}
            hideChevron={ActiveData.data.length > 1}
          />
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={ActiveData.data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        containerStyle={styles.containerStyle}
        onPress={onPressPagination}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 86,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: '#393939',
    borderRadius: 50,
    height: 6,
    width: 6,
  },
  activeDotStyle: {
    backgroundColor: '#FFF',
  },
  containerStyle: {
    gap: 5,
  },
});

export default Index;
