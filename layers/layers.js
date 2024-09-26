ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([152.779059, -27.140246, 152.974510, -27.038859]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_WarrabaILUP_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Warraba ILUP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WarrabaILUP_1.png",
    attributions: ' ',
                                projection: 'EPSG:7844',
                                alwaysInRange: true,
                                imageExtent: [152.845222, -27.127746, 152.922084, -27.051795]
                            })
                        });
var format_CabooltureWestParcels_2 = new ol.format.GeoJSON();
var features_CabooltureWestParcels_2 = format_CabooltureWestParcels_2.readFeatures(json_CabooltureWestParcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_CabooltureWestParcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabooltureWestParcels_2.addFeatures(features_CabooltureWestParcels_2);
var lyr_CabooltureWestParcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabooltureWestParcels_2, 
                style: style_CabooltureWestParcels_2,
                popuplayertitle: "Caboolture West Parcels",
                interactive: true,
                title: '<img src="styles/legend/CabooltureWestParcels_2.png" /> Caboolture West Parcels'
            });
var format_StackedOverlays_3 = new ol.format.GeoJSON();
var features_StackedOverlays_3 = format_StackedOverlays_3.readFeatures(json_StackedOverlays_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_StackedOverlays_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StackedOverlays_3.addFeatures(features_StackedOverlays_3);
var lyr_StackedOverlays_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StackedOverlays_3, 
                style: style_StackedOverlays_3,
                popuplayertitle: "Stacked Overlays",
                interactive: false,
                title: '<img src="styles/legend/StackedOverlays_3.png" /> Stacked Overlays'
            });
var format_30mBufferWaterways_4 = new ol.format.GeoJSON();
var features_30mBufferWaterways_4 = format_30mBufferWaterways_4.readFeatures(json_30mBufferWaterways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_30mBufferWaterways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30mBufferWaterways_4.addFeatures(features_30mBufferWaterways_4);
var lyr_30mBufferWaterways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30mBufferWaterways_4, 
                style: style_30mBufferWaterways_4,
                popuplayertitle: "30m Buffer Waterways",
                interactive: false,
                title: '<img src="styles/legend/30mBufferWaterways_4.png" /> 30m Buffer Waterways'
            });
var group_Overlay = new ol.layer.Group({
                                layers: [lyr_StackedOverlays_3,lyr_30mBufferWaterways_4,],
                                fold: "open",
                                title: "Overlay"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_CabooltureWestParcels_2,],
                                fold: "open",
                                title: "Base"});
var group_subgroup2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "sub-group2"});
var group_Overlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Overlays"});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "sub-group1"});
var group_ND_Overlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ND_Overlays"});
var group_Administrativelayers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Administrative layers"});
var group_DUMP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DUMP"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_WarrabaILUP_1.setVisible(true);lyr_CabooltureWestParcels_2.setVisible(true);lyr_StackedOverlays_3.setVisible(false);lyr_30mBufferWaterways_4.setVisible(false);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_WarrabaILUP_1,group_Base,group_Overlay];
lyr_CabooltureWestParcels_2.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'Remarks': 'Remarks', 'SP NDH': 'SP NDH', 'Lead Link': 'Lead Link', });
lyr_StackedOverlays_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LGA_CODE': 'LGA_CODE', 'CAT_DESC': 'CAT_DESC', 'OVL_CAT': 'OVL_CAT', 'OVL2_DESC': 'OVL2_DESC', 'OVL2_CAT': 'OVL2_CAT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'hsm_core': 'hsm_core', 'Descriptio': 'Descriptio', 'Source': 'Source', 'gridcode': 'gridcode', 'Mask': 'Mask', 'layer': 'layer', 'path': 'path', 'LayerName': 'LayerName', });
lyr_30mBufferWaterways_4.set('fieldAliases', {'id': 'id', });
lyr_CabooltureWestParcels_2.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'Remarks': 'TextEdit', 'SP NDH': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_StackedOverlays_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LGA_CODE': 'TextEdit', 'CAT_DESC': 'TextEdit', 'OVL_CAT': 'TextEdit', 'OVL2_DESC': 'TextEdit', 'OVL2_CAT': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'hsm_core': 'TextEdit', 'Descriptio': 'TextEdit', 'Source': 'TextEdit', 'gridcode': 'TextEdit', 'Mask': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'LayerName': 'TextEdit', });
lyr_30mBufferWaterways_4.set('fieldImages', {'id': 'TextEdit', });
lyr_CabooltureWestParcels_2.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'inline label - visible with data', 'locality': 'inline label - visible with data', 'local_auth': 'inline label - visible with data', 'address': 'inline label - visible with data', 'Remarks': 'hidden field', 'SP NDH': 'inline label - visible with data', 'Lead Link': 'inline label - always visible', });
lyr_StackedOverlays_3.set('fieldLabels', {'OBJECTID': 'no label', 'LGA_CODE': 'no label', 'CAT_DESC': 'no label', 'OVL_CAT': 'no label', 'OVL2_DESC': 'no label', 'OVL2_CAT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'hsm_core': 'no label', 'Descriptio': 'no label', 'Source': 'no label', 'gridcode': 'no label', 'Mask': 'no label', 'layer': 'no label', 'path': 'no label', 'LayerName': 'no label', });
lyr_30mBufferWaterways_4.set('fieldLabels', {'id': 'no label', });
lyr_30mBufferWaterways_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});