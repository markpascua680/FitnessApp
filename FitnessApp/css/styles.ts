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
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  layoutHeader: {
    backgroundColor: darkTheme.backgroundPrimary,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },

  // Container styles
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: darkTheme.backgroundPrimary,
    margin: Spacing.four
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: darkTheme.backgroundSecondary,
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
    textAlign: 'center',
  },

  // Form styles
  input: {
    borderWidth: 1,
    borderColor: '#86939e',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#86939e',
    marginBottom: 6,
  },
});