import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { readAsStringAsync } from 'expo-file-system';
import { Asset } from 'expo-asset';
import { WebViewSourceHtml } from 'react-native-webview/lib/WebViewTypes';

const useHtmlSource = (virtualAssetModule: string | number) => {
  const [source, setSource] = useState<WebViewSourceHtml>();
  const asset = Asset.fromModule(virtualAssetModule);

  useEffect(() => {
    (async () => {
      await asset.downloadAsync();
      if (asset.localUri) {
        const html = await readAsStringAsync(asset.localUri);
        setSource({ html });
      }
    })();
  }, [virtualAssetModule, setSource]);

  return source;
};

export const Editor = () => {
  const htmlSource = useHtmlSource(require('../../../assets/test.html'));

  return (
    <View style={styles.container}>
      {htmlSource && <WebView style={styles.webview} source={htmlSource} />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
