var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var dataSource = new React.ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
var sf_lists = [
  {
    title: "12 Must Do Experiences In San Francisco",
    image: "http://media.afar.com/uploads/images/post_images/images/u4LxFfuZ4C/large_open-uri20121009-8764-16cahet?1383797165"
  },
  {
    title: "Chefs' Feed Picks: Where Chefs Eat in San Francisco",
    image: "http://media.afar.com/uploads/images/post_images/images/5gJpCNxQ6S/large_be98cfbd9a82885ed46ee43e0d1970b1?1438159880"
  },
  {
    title: "If You Only Have 3 Days In San Francisco",
    image: "http://media.afar.com/uploads/images/post_images/images/newSLyGAjA/large_open-uri20130529-13039-16f4v7k?1383814579"
  },
  {
    title: "San Francisco For Families",
    image: "http://media.afar.com/uploads/images/post_images/images/FYARTo3nbX/large_open-uri20121203-1890-7a19bt?1383799902"
  },
  {
    title: "San Francisco's Golden Gate Park",
    image: "http://media.afar.com/uploads/images/post_images/images/nekJSuJMCX/large_7e5c33a89f5ef76b81c80d79c364f984?1438669641"
  },
  {
    title: "The Best Hotels in San Francisco",
    image: "http://media.afar.com/uploads/images/post_images/images/K3MTkQf7Js/large_3d60acd59c0dcd4340de023b73190a70?1438324236"
  }
]

var DestinationPage = React.createClass({

  getInitialState: function() {
    return {
      dataSource: dataSource.cloneWithRows(sf_lists),
    };
  },

  renderItem: function(item) {
    return (
      <React.View style={{position: "relative", height: 200}}>
        <React.Image source={{uri: item.image}} style={{width: 360, height: 200, position: "absolute"}} />
        <React.View style={{position: "absolute", top: 75, marginLeft: 75, marginRight: 75}}>
          <React.Text style={{position: "absolute", color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center"}}>{item.title}</React.Text>
        </React.View>
      </React.View>
    );
  },

  render: function() {
    return (
      <React.ListView dataSource={this.state.dataSource} renderRow={this.renderItem}></React.ListView>
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