var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var MapView = require('react-native-maps');

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

  getInitialState: function() {
    return { 
      detailView: false, 
      region: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421},
      markers: [
        {coordinate: {latitude: 37.792537, longitude: -122.3933}, title: "Yank Sing", description: "Expensive dim sum", address: "1 Rincon Center", image_url: "http://cdn2.vox-cdn.com/uploads/chorus_asset/file/765230/yanksing_dimsumcart.0.jpg"}
      ]
    };
  },

  onRegionChange: function(region) {
    this.setState({state: region });
  },

  pressedMarkerCallout: function(){
    this.setState({detailView: true });
  },

  _onPressButton: function(){
    this.setState({detailView: false });
  },

  render: function() {
    return (
      <React.View>
        {(() => {
            if (this.state.detailView) {
             return (
                <React.View>
                  <React.Image source={{uri: this.state.markers[0].image_url}} style={{width: 360, height: 200}} />
                  <React.Text style={{fontSize: 16, fontWeight: 'bold', textAlign: "left"}}>{this.state.markers[0].title}</React.Text>
                  <React.Text>{this.state.markers[0].description}</React.Text>
                  <React.Text>{this.state.markers[0].address}</React.Text>
                  <React.Text style={{color: "black"}}>{"Sniff other cat's butt and hang jaw half open thereafter scream at teh bath. Chase mice chase mice plan steps for world domination. Inspect anything brought into the house intrigued by the shower, so sun bathe tuxedo cats always looking dapper. Claws in your leg sleep on keyboard bathe private parts with tongue then lick owner's face yet touch water with paw then recoil in horror. If it fits, i sits."}</React.Text>
                  <React.TouchableNativeFeedback
                      onPress={this._onPressButton}
                      background={React.TouchableNativeFeedback.SelectableBackground()}>
                      <React.View style={{width: 40, height: 30, backgroundColor: 'blue'}}>
                      <React.Text style={{paddingLeft: 30, color: "white"}}>Back</React.Text>
                    </React.View>
                  </React.TouchableNativeFeedback>
                </React.View>
              );
            } else {
              return (
                <MapView style={{width: 360, height: 360}} region={this.state.region} onRegionChange={this.onRegionChange}>
                  {this.state.markers.map(marker => (
                    <MapView.Marker key={marker.title}
                      coordinate={marker.coordinate}
                      title={marker.title}
                      description={marker.description}
                      onCalloutPress={this.pressedMarkerCallout}
                    />
                  ))}
                </MapView>
              );
            }
          })()}
      </React.View>
    )
  },
})

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

React.AppRegistry.registerComponent('DemoProject', () => Demo);