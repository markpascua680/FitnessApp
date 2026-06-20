import { ScrollView, Text } from "react-native";
import { styles } from "@/css/styles";
import { View } from 'react-native';
import { SubmitButton, TextFieldInput } from "@/components/formElements";

export default function Signup() {
  return (
  <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
            <View style={styles.heroSection}>
                <Text style={styles.title}>Sign Up</Text>
            </View>
            <View style={styles.formContainer}>
                <TextFieldInput label="Email" value="" />
                <TextFieldInput label="Password" value="" />
                <TextFieldInput label="Re-Password" value="" />
                <SubmitButton label="Create Account" />
            </View>
        </View>
    </ScrollView>
  );
}