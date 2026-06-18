import { styles } from '@/css/styles';
import { View } from "react-native";
import Index from '.';

export default function AppLayout() {
  return (
    <View style={styles.mainContainer}>
      <Index />
    </View>
  );
}
