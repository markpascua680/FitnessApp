import { useState } from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../../lib/data/supabase'
import { router } from 'expo-router'

import { ThemedText, ThemedTextInput } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/styles';

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
      else login()
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
      else login()
    setLoading(false)
  }

  async function login() {
    router.replace('/');
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title" style={styles.title}>
            Final Form
          </ThemedText>
        </ThemedView>
        <SafeAreaView style={[styles.verticallySpaced]}>
            <ThemedText style={styles.label}>Email</ThemedText>
            <ThemedTextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            style={styles.input}
            />
        </SafeAreaView>
        <SafeAreaView style={styles.verticallySpaced}>
            <ThemedText style={styles.label}>Password</ThemedText>
            <ThemedTextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            style={styles.input}
            />
        </SafeAreaView>
        <SafeAreaView style={[styles.verticallySpaced]}>
            <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={() => signInWithEmail()}
            disabled={loading}
            >
            <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.verticallySpaced}>
            <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={() => signUpWithEmail()}
            disabled={loading}
            >
            <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </ThemedView>
  )
}
