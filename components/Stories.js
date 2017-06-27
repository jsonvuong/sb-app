import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import StoryItem from './StoryItem';

class Stories extends React.Component { 
    constructor() {
        super();
        
        // default state
        this.state = {
            stories: [],
            fetching: false
        }
    }

    optimizeSummaries(stories){
        return stories.map( story => {
            story.summary = story.summary.replace(/[<p>|</p>]/g, '');
            story.summary = story.summary.slice(0, 80).concat('...');
            return story;
        });
    }
    
    sortByDate(stories){
        return stories.sort( (a, b) => b.order - a.order);
    }

    // Init
    componentDidMount() {
        // Activate busy indicator
        this.setState({ fetching: true});
        
        // Retrieve stories for Education
        fetch('http://www.smartbrief.com/endpoint/industry/education/')
            .then( resp => resp.json()) // to JSON
            .then( resp => resp.filter( obj=> typeof obj.image_url == 'string')) // filter stories with image
            .then(this.optimizeSummaries) // remove HTML tags, limit word count
            .then(this.sortByDate)
            .then(stories => {
                this.setState({
                    stories,
                    fetching: false
                })
            });
    }
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ScrollView style={[styles.storiesList]}>
                <ActivityIndicator size="large"
                style={styles.spinner}
                animating={this.state.fetching} />
                {
                    this.state.stories.map( (story,i) => {
                         return <StoryItem story={story} key={i} clickHandler={ () => this.props.navigation.navigate('WebPage', story.source[0].url)} />
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    storiesList: {
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    spinner: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});

export default Stories;


