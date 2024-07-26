ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([152.838578, -27.125210, 152.935409, -27.052437]);
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
var format_CabooltureWestParcels_1 = new ol.format.GeoJSON();
var features_CabooltureWestParcels_1 = format_CabooltureWestParcels_1.readFeatures(json_CabooltureWestParcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_CabooltureWestParcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabooltureWestParcels_1.addFeatures(features_CabooltureWestParcels_1);
var lyr_CabooltureWestParcels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabooltureWestParcels_1, 
                style: style_CabooltureWestParcels_1,
                popuplayertitle: "Caboolture West Parcels",
                interactive: true,
                title: '<img src="styles/legend/CabooltureWestParcels_1.png" /> Caboolture West Parcels'
            });
var format_DeveloperheldParcels_2 = new ol.format.GeoJSON();
var features_DeveloperheldParcels_2 = format_DeveloperheldParcels_2.readFeatures(json_DeveloperheldParcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_DeveloperheldParcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeveloperheldParcels_2.addFeatures(features_DeveloperheldParcels_2);
var lyr_DeveloperheldParcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeveloperheldParcels_2, 
                style: style_DeveloperheldParcels_2,
                popuplayertitle: "Developer-held Parcels",
                interactive: true,
                title: '<img src="styles/legend/DeveloperheldParcels_2.png" /> Developer-held Parcels'
            });
var format_NonDeveloperheldParcels_3 = new ol.format.GeoJSON();
var features_NonDeveloperheldParcels_3 = format_NonDeveloperheldParcels_3.readFeatures(json_NonDeveloperheldParcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_NonDeveloperheldParcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonDeveloperheldParcels_3.addFeatures(features_NonDeveloperheldParcels_3);
var lyr_NonDeveloperheldParcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonDeveloperheldParcels_3, 
                style: style_NonDeveloperheldParcels_3,
                popuplayertitle: "Non-Developer-held Parcels",
                interactive: false,
                title: '<img src="styles/legend/NonDeveloperheldParcels_3.png" /> Non-Developer-held Parcels'
            });
var format_UrbanLiving8Ha_4 = new ol.format.GeoJSON();
var features_UrbanLiving8Ha_4 = format_UrbanLiving8Ha_4.readFeatures(json_UrbanLiving8Ha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_UrbanLiving8Ha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanLiving8Ha_4.addFeatures(features_UrbanLiving8Ha_4);
var lyr_UrbanLiving8Ha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanLiving8Ha_4, 
                style: style_UrbanLiving8Ha_4,
                popuplayertitle: "Urban Living 8+Ha",
                interactive: true,
                title: '<img src="styles/legend/UrbanLiving8Ha_4.png" /> Urban Living 8+Ha'
            });
var format_LocalPlanPrecint_5 = new ol.format.GeoJSON();
var features_LocalPlanPrecint_5 = format_LocalPlanPrecint_5.readFeatures(json_LocalPlanPrecint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_LocalPlanPrecint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalPlanPrecint_5.addFeatures(features_LocalPlanPrecint_5);
var lyr_LocalPlanPrecint_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalPlanPrecint_5, 
                style: style_LocalPlanPrecint_5,
                popuplayertitle: "Local Plan Precint",
                interactive: false,
    title: 'Local Plan Precint<br />\
    <img src="styles/legend/LocalPlanPrecint_5_0.png" /> Enterprise and employment<br />\
    <img src="styles/legend/LocalPlanPrecint_5_1.png" /> Green network<br />\
    <img src="styles/legend/LocalPlanPrecint_5_2.png" /> Rural living<br />\
    <img src="styles/legend/LocalPlanPrecint_5_3.png" /> Town centre<br />\
    <img src="styles/legend/LocalPlanPrecint_5_4.png" /> Urban living<br />\
    <img src="styles/legend/LocalPlanPrecint_5_5.png" /> <br />'
        });
var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_6.addFeatures(features_Schools_6);
var lyr_Schools_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                popuplayertitle: "Schools",
                interactive: false,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });
var format_30mBufferWaterways_7 = new ol.format.GeoJSON();
var features_30mBufferWaterways_7 = format_30mBufferWaterways_7.readFeatures(json_30mBufferWaterways_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_30mBufferWaterways_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30mBufferWaterways_7.addFeatures(features_30mBufferWaterways_7);
var lyr_30mBufferWaterways_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30mBufferWaterways_7, 
                style: style_30mBufferWaterways_7,
                popuplayertitle: "30m Buffer Waterways",
                interactive: false,
                title: '<img src="styles/legend/30mBufferWaterways_7.png" /> 30m Buffer Waterways'
            });
var format_Grange_Parameters_Overlay_8 = new ol.format.GeoJSON();
var features_Grange_Parameters_Overlay_8 = format_Grange_Parameters_Overlay_8.readFeatures(json_Grange_Parameters_Overlay_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Grange_Parameters_Overlay_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grange_Parameters_Overlay_8.addFeatures(features_Grange_Parameters_Overlay_8);
var lyr_Grange_Parameters_Overlay_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grange_Parameters_Overlay_8, 
                style: style_Grange_Parameters_Overlay_8,
                popuplayertitle: "Grange_Parameters_Overlay",
                interactive: false,
                title: '<img src="styles/legend/Grange_Parameters_Overlay_8.png" /> Grange_Parameters_Overlay'
            });
var group_Overlay = new ol.layer.Group({
                                layers: [lyr_LocalPlanPrecint_5,lyr_Schools_6,lyr_30mBufferWaterways_7,lyr_Grange_Parameters_Overlay_8,],
                                fold: "open",
                                title: "Overlay"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_CabooltureWestParcels_1,lyr_DeveloperheldParcels_2,lyr_NonDeveloperheldParcels_3,lyr_UrbanLiving8Ha_4,],
                                fold: "open",
                                title: "Base"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_CabooltureWestParcels_1.setVisible(true);lyr_DeveloperheldParcels_2.setVisible(true);lyr_NonDeveloperheldParcels_3.setVisible(true);lyr_UrbanLiving8Ha_4.setVisible(true);lyr_LocalPlanPrecint_5.setVisible(true);lyr_Schools_6.setVisible(true);lyr_30mBufferWaterways_7.setVisible(true);lyr_Grange_Parameters_Overlay_8.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_Base,group_Overlay];
lyr_CabooltureWestParcels_1.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'Remarks': 'Remarks', 'SP NDH': 'SP NDH', });
lyr_DeveloperheldParcels_2.set('fieldAliases', {'Developer': 'Developer', });
lyr_NonDeveloperheldParcels_3.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', });
lyr_UrbanLiving8Ha_4.set('fieldAliases', {'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'Pri_Vendor': 'Pri_Vendor', 'Urban_Liv': 'Urban_Liv', 'TownCentre': 'TownCentre', 'Grange_NDH': 'Grange_NDH', 'Lead Link': 'Lead Link', });
lyr_LocalPlanPrecint_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GAZ_DATE': 'GAZ_DATE', 'AMD_DATE': 'AMD_DATE', 'CAD_VER': 'CAD_VER', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Schools_6.set('fieldAliases', {'id': 'id', });
lyr_30mBufferWaterways_7.set('fieldAliases', {'id': 'id', });
lyr_Grange_Parameters_Overlay_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LGA_CODE': 'LGA_CODE', 'CAT_DESC': 'CAT_DESC', 'OVL_CAT': 'OVL_CAT', 'OVL2_DESC': 'OVL2_DESC', 'OVL2_CAT': 'OVL2_CAT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'hsm_core': 'hsm_core', 'Descriptio': 'Descriptio', 'Source': 'Source', 'gridcode': 'gridcode', 'Mask': 'Mask', 'layer': 'layer', 'path': 'path', 'LayerName': 'LayerName', });
lyr_CabooltureWestParcels_1.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'Remarks': 'TextEdit', 'SP NDH': 'TextEdit', });
lyr_DeveloperheldParcels_2.set('fieldImages', {'Developer': 'TextEdit', });
lyr_NonDeveloperheldParcels_3.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', });
lyr_UrbanLiving8Ha_4.set('fieldImages', {'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Urban_Liv': 'TextEdit', 'TownCentre': 'TextEdit', 'Grange_NDH': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_LocalPlanPrecint_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'GAZ_DATE': 'TextEdit', 'AMD_DATE': 'TextEdit', 'CAD_VER': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'id': 'TextEdit', });
lyr_30mBufferWaterways_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Grange_Parameters_Overlay_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'LGA_CODE': 'TextEdit', 'CAT_DESC': 'TextEdit', 'OVL_CAT': 'TextEdit', 'OVL2_DESC': 'TextEdit', 'OVL2_CAT': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'hsm_core': 'TextEdit', 'Descriptio': 'TextEdit', 'Source': 'TextEdit', 'gridcode': 'TextEdit', 'Mask': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'LayerName': 'TextEdit', });
lyr_CabooltureWestParcels_1.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'Remarks': 'no label', 'SP NDH': 'inline label - visible with data', });
lyr_DeveloperheldParcels_2.set('fieldLabels', {'Developer': 'inline label - visible with data', });
lyr_NonDeveloperheldParcels_3.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', });
lyr_UrbanLiving8Ha_4.set('fieldLabels', {'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Urban_Liv': 'inline label - visible with data', 'TownCentre': 'inline label - visible with data', 'Grange_NDH': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_LocalPlanPrecint_5.set('fieldLabels', {'OBJECTID': 'no label', 'GAZ_DATE': 'no label', 'AMD_DATE': 'no label', 'CAD_VER': 'no label', 'LGA_CODE': 'no label', 'LP': 'no label', 'LP_PREC': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Schools_6.set('fieldLabels', {'id': 'no label', });
lyr_30mBufferWaterways_7.set('fieldLabels', {'id': 'no label', });
lyr_Grange_Parameters_Overlay_8.set('fieldLabels', {'OBJECTID': 'no label', 'LGA_CODE': 'no label', 'CAT_DESC': 'no label', 'OVL_CAT': 'no label', 'OVL2_DESC': 'no label', 'OVL2_CAT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'hsm_core': 'no label', 'Descriptio': 'no label', 'Source': 'no label', 'gridcode': 'no label', 'Mask': 'no label', 'layer': 'no label', 'path': 'no label', 'LayerName': 'no label', });
lyr_Grange_Parameters_Overlay_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});