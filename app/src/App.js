import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Content, NewPost, Stories, Posts } from './components';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Content header tabs />
                <ScrollView>

                <NewPost />
                <View style={{ borderBottomWidth: 12, borderBottomColor: '#e6e3e3' }}>
                    <Stories />
                </View>
                <Posts/>
                </ScrollView>
            </View>
        )
    }
}

export default App;