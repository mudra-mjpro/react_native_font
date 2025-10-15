import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} allowFontScaling>
        Responsive Fonts with EStyleSheet
      </Text>
      <Text style={styles.body} allowFontScaling>
        Font sizes use <Text style={{ fontWeight: '700' }}>rem</Text> and scale
        with screen size and user text settings. Rotate or change system font
        size to see it adapt.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Hello')}
      >
        <Text style={styles.buttonText} allowFontScaling>
          Tap me
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1116',
    padding: '16rem',
    justifyContent: 'center',
  },
  title: {
    fontSize: '22rem',
    lineHeight: '28rem',
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: '8rem',
  },
  body: {
    fontSize: '14rem',
    lineHeight: '20rem',
    color: '#b9c0ca',
  },
  button: {
    marginTop: '24rem',
    paddingVertical: '12rem',
    paddingHorizontal: '16rem',
    backgroundColor: '#4f46e5',
    borderRadius: '8rem',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: '14rem',
    fontWeight: '600',
  },
});
