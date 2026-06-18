import { Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from '@/css/styles';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <Stack screenOptions={{
          headerStyle: styles.layoutHeader,
          headerTitle: 'Final Form',
          headerTitleStyle: styles.text,
          headerShadowVisible: false,
        }}>
          <Stack.Screen name="index" options={{ headerShown: true }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
