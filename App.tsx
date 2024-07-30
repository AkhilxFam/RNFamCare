// Import Modules
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import Pages
import FamCareIntro from './pages/FamCareIntro';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FamCareIntro />
    </GestureHandlerRootView>
  );
}
