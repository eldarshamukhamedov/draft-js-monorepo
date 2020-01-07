import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Editor } from './core/components/Editor';

export const Entry = () => (
  <View style={styles.container}>
    <Text>HELLO HELLO</Text>
    <Editor />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#aaa",
    backgroundColor: '#000',
  },
});
