import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const StoryItem = ( {story, clickHandler = f => f} ) => ( // destructure props
    <View style={storyItemStyles.storyItem}>
        <View style={storyItemStyles.row}>
        <View style={storyItemStyles.leftCol}>
            <Text style={storyItemStyles.industry} onPress={clickHandler}>{story.industry_subtopics[0].industry.toUpperCase()}</Text>
            <Text style={storyItemStyles.headline} onPress={clickHandler}>{story.headline}</Text>
        </View>
            <Image style={storyItemStyles.img} source={{uri:story.image_url}} onPress={clickHandler} />
        </View>
        <Text style={storyItemStyles.summary} onPress={clickHandler}>{story.summary}</Text>
    </View>
)

const storyItemStyles = StyleSheet.create({
    storyItem: {
        flexDirection: 'column',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#CCC",
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    leftCol: {
        flexDirection: 'column',
        flex: 0.7,
        paddingRight: 15
    },
    column: {
        flexDirection: 'column',
        flex: 3
    },
    img: {
        flex: 0.3
    },
    industry: {
        color: '#54BED9',
        fontSize: 14
    },
    headline: {
        color: '#097ABF',
        fontSize: 25,
        fontWeight: '300',
        paddingTop: 5,
    },
    summary: {
        alignSelf: 'flex-start',
        color: '#666',
        fontSize: 18,
        lineHeight: 20,
        paddingTop: 10
    }
})

export default StoryItem;