var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "https://openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  '13920',
        Height: '10200'
      }
    }
  };
  
  var viewer = OpenSeadragon({
    id: 'main-viewer',
    prefixUrl: '//openseadragon.github.io/openseadragon/images/',
    tileSources: duomo,
    showNavigator: true
  });
  
  var extraNavigator = new OpenSeadragon.Navigator({
    viewer: viewer,
    position:          'BOTTOM_RIGHT',
    background:        '#000',
    opacity:           0.8,
    borderColor:       '#555',
    displayRegionColor: '#900',
  });
  
  viewer.addHandler('open', function() {
    extraNavigator.addTiledImage({ 
      tileSource: duomo,
      originalTiledImage: viewer.world.getItemAt(0)
     });
  });
  
  viewer.addHandler('animation', function() {
    extraNavigator.update(viewer.viewport)
  });
  