console.log('\'Allo \'Allo!'); // eslint-disable-line no-console



var map = new OpenLayers.Map('map');
var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
                                   "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );

var layerControl = new OpenLayers.Control.LayerSwitcher({'div': OpenLayers.Util.getElement('layerswitcher')});

map.addControl(layerControl);
map.addLayer(wms);
map.zoomToMaxExtent();




// resize
window.onresize = function(event) {
  map.updateSize();
}


