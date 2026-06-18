import { Text } from "react-native";
import { styles } from "@/css/styles";
import { View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.text}>Herro</Text>
      </View>
    </View>
  );
}