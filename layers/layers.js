ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([415227.177687, 979925.799207, 416583.103388, 980574.171050]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Predio_1 = new ol.format.GeoJSON();
var features_Predio_1 = format_Predio_1.readFeatures(json_Predio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Predio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_1.addFeatures(features_Predio_1);
var lyr_Predio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_1, 
                style: style_Predio_1,
                popuplayertitle: 'Predio',
                interactive: false,
                title: '<img src="styles/legend/Predio_1.png" /> Predio'
            });
var format_Lotes_Divididos_2 = new ol.format.GeoJSON();
var features_Lotes_Divididos_2 = format_Lotes_Divididos_2.readFeatures(json_Lotes_Divididos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lotes_Divididos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_Divididos_2.addFeatures(features_Lotes_Divididos_2);
var lyr_Lotes_Divididos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_Divididos_2, 
                style: style_Lotes_Divididos_2,
                popuplayertitle: 'Lotes_Divididos',
                interactive: true,
                title: '<img src="styles/legend/Lotes_Divididos_2.png" /> Lotes_Divididos'
            });
var format_Parcela_3 = new ol.format.GeoJSON();
var features_Parcela_3 = format_Parcela_3.readFeatures(json_Parcela_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Parcela_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcela_3.addFeatures(features_Parcela_3);
var lyr_Parcela_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcela_3, 
                style: style_Parcela_3,
                popuplayertitle: 'Parcela',
                interactive: false,
                title: '<img src="styles/legend/Parcela_3.png" /> Parcela'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Predio_1.setVisible(true);lyr_Lotes_Divididos_2.setVisible(true);lyr_Parcela_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Predio_1,lyr_Lotes_Divididos_2,lyr_Parcela_3];
lyr_Predio_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'm2': 'm2', 'Foto': 'Foto', 'Datos': 'Datos', 'Ha': 'Ha', });
lyr_Lotes_Divididos_2.set('fieldAliases', {'id': 'id', 'Foto': 'DFP Consultores', 'Área': 'Área de Lotes', 'Datos': 'OBSERVACIONES', });
lyr_Parcela_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Predio_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'm2': 'TextEdit', 'Foto': 'ExternalResource', 'Datos': 'TextEdit', 'Ha': '', });
lyr_Lotes_Divididos_2.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', 'Área': 'TextEdit', 'Datos': 'TextEdit', });
lyr_Parcela_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Predio_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'hidden field', 'm2': 'hidden field', 'Foto': 'inline label - always visible', 'Datos': 'inline label - always visible', 'Ha': 'inline label - always visible', });
lyr_Lotes_Divididos_2.set('fieldLabels', {'id': 'hidden field', 'Foto': 'inline label - always visible', 'Área': 'inline label - always visible', 'Datos': 'inline label - always visible', });
lyr_Parcela_3.set('fieldLabels', {'id': 'no label', 'Área': 'no label', });
lyr_Parcela_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});