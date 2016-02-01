var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var sf_lists = require('./sf_lists.json');

var DestinationPage = React.createClass({

  getInitialState: function() {
    return {
      sf_lists: sf_lists, //replace with ajax network call for real data
    };
  },

  render: function() {
    return (
      <React.View style={{position: "relative"}}>
      <React.Image
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{width: 360, height: 200, position: "absolute"}} />
      <React.Text style={{position: "absolute", color: "white", fontSize: 24, left: 150, top: 75, fontWeight: "bold"}}>Title</React.Text>
      </React.View>
    )
  },
});

var MapsPage = React.createClass({
  render: function() {
    return (
      <React.View >
        <React.Text>
            Map Page:
        </React.Text>
      </React.View>
    )
  },
});

var Demo = React.createClass({
 render: function() {
    return (
          <ScrollableTabView>
            <DestinationPage tabLabel="San Francisco" />
            <MapsPage tabLabel="Map" />
          </ScrollableTabView>
        );
  },
});

var styles = React.StyleSheet.create({
 
    // For the container View
    parent: {
        padding: 16
    },
 
    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

React.AppRegistry.registerComponent('DemoProject', () => Demo);