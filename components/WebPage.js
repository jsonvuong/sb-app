import React from 'react';

import { Text, View, StyleSheet, WebView } from 'react-native';

// Stateless functional component
const WebPage = ({ navigation }) => {
    return (   
        <WebView style={styles.webview} source={{ uri: navigation.state.params }} />
    )
};

const styles = StyleSheet.create({
    webview: {
        flex: 1
    }
});

export default WebPage;