// Import Modules
import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { StyleSheet, View, Dimensions } from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

// Import Components
import TicketCard from './TicketCard';

// Import Data
import { ActiveTicketsData } from '../utils/FakeData';

const TicketCarousel = () => {
  const progress = useSharedValue<number>(0);

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ count: index - progress.value, animated: true });
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
        data={ActiveTicketsData.data}
        renderItem={({ index, item }) => (
          <TicketCard
            key={index}
            ticket={item}
            hideChevron={ActiveTicketsData.data.length > 1}
          />
        )}
      />

      {ActiveTicketsData.data.length > 1 && (
        <Pagination.Basic
          progress={progress}
          data={ActiveTicketsData.data}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={styles.containerStyle}
          onPress={onPressPagination}
        />
      )}
    </View>
  );
};

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

export default TicketCarousel;
