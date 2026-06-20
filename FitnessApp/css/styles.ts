import { StyleSheet } from 'react-native';
import { BottomTabInset, MaxContentWidth, Spacing } from './constants/theme';
import { Colors } from './constants/theme';

const darkTheme = Colors.dark;

export const styles = StyleSheet.create({
  // General styles
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  layoutHeader: {
    backgroundColor: darkTheme.primary,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },

  // Card styles
  card: {
    alignSelf: 'stretch',
    borderColor: darkTheme.tertiary,
    borderWidth: 4,
    borderRadius: Spacing.four,
    backgroundColor: darkTheme.primary,
    padding: Spacing.six,
  },

  // Container styles
  container: {
    flex: 1,
    backgroundColor: darkTheme.secondary,
    padding: Spacing.four,
  },
  formContainer: {
    gap: Spacing.three,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: darkTheme.primary,
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  scrollContent: {
    flexGrow: 1,
  },

  // Button styles
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Text styles
  hyperlink: {
    color: '#00ccff',
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    color: darkTheme.text,
    fontSize: 16,
  },
  title: {
    color: darkTheme.text,
    textAlign: 'center',
    fontSize: 48,
  },

  // Form styles
  input: {
    borderWidth: 1,
    borderColor: darkTheme.tertiary,
    borderRadius: 4,
    color: darkTheme.text,
    padding: 12,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: darkTheme.accent,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: darkTheme.text,
    marginBottom: 6,
  },
});