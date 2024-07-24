ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([152.837573, -27.134514, 152.946770, -27.058358]);
var wms_layers = [];

var format_BellmereComplete_0 = new ol.format.GeoJSON();
var features_BellmereComplete_0 = format_BellmereComplete_0.readFeatures(json_BellmereComplete_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_BellmereComplete_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BellmereComplete_0.addFeatures(features_BellmereComplete_0);
var lyr_BellmereComplete_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BellmereComplete_0, 
                style: style_BellmereComplete_0,
                popuplayertitle: "Bellmere Complete",
                interactive: true,
                title: '<img src="styles/legend/BellmereComplete_0.png" /> Bellmere Complete'
            });
var format_BellmereRemaining_1 = new ol.format.GeoJSON();
var features_BellmereRemaining_1 = format_BellmereRemaining_1.readFeatures(json_BellmereRemaining_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_BellmereRemaining_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BellmereRemaining_1.addFeatures(features_BellmereRemaining_1);
var lyr_BellmereRemaining_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BellmereRemaining_1, 
                style: style_BellmereRemaining_1,
                popuplayertitle: "Bellmere Remaining",
                interactive: true,
                title: '<img src="styles/legend/BellmereRemaining_1.png" /> Bellmere Remaining'
            });
var format_BellmereRemainingUrbanLiving8Ha_2 = new ol.format.GeoJSON();
var features_BellmereRemainingUrbanLiving8Ha_2 = format_BellmereRemainingUrbanLiving8Ha_2.readFeatures(json_BellmereRemainingUrbanLiving8Ha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_BellmereRemainingUrbanLiving8Ha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BellmereRemainingUrbanLiving8Ha_2.addFeatures(features_BellmereRemainingUrbanLiving8Ha_2);
var lyr_BellmereRemainingUrbanLiving8Ha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BellmereRemainingUrbanLiving8Ha_2, 
                style: style_BellmereRemainingUrbanLiving8Ha_2,
                popuplayertitle: "Bellmere Remaining Urban Living 8+Ha",
                interactive: true,
                title: '<img src="styles/legend/BellmereRemainingUrbanLiving8Ha_2.png" /> Bellmere Remaining Urban Living 8+Ha'
            });
var format_LocalPlanPrecint_3 = new ol.format.GeoJSON();
var features_LocalPlanPrecint_3 = format_LocalPlanPrecint_3.readFeatures(json_LocalPlanPrecint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_LocalPlanPrecint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalPlanPrecint_3.addFeatures(features_LocalPlanPrecint_3);
var lyr_LocalPlanPrecint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalPlanPrecint_3, 
                style: style_LocalPlanPrecint_3,
                popuplayertitle: "Local Plan Precint",
                interactive: false,
    title: 'Local Plan Precint<br />\
    <img src="styles/legend/LocalPlanPrecint_3_0.png" /> Enterprise and employment<br />\
    <img src="styles/legend/LocalPlanPrecint_3_1.png" /> Green network<br />\
    <img src="styles/legend/LocalPlanPrecint_3_2.png" /> Rural living<br />\
    <img src="styles/legend/LocalPlanPrecint_3_3.png" /> Town centre<br />\
    <img src="styles/legend/LocalPlanPrecint_3_4.png" /> Urban living<br />\
    <img src="styles/legend/LocalPlanPrecint_3_5.png" /> <br />'
        });
var format_Schools_4 = new ol.format.GeoJSON();
var features_Schools_4 = format_Schools_4.readFeatures(json_Schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_4.addFeatures(features_Schools_4);
var lyr_Schools_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_4, 
                style: style_Schools_4,
                popuplayertitle: "Schools",
                interactive: false,
                title: '<img src="styles/legend/Schools_4.png" /> Schools'
            });
var format_30mBufferWaterways_5 = new ol.format.GeoJSON();
var features_30mBufferWaterways_5 = format_30mBufferWaterways_5.readFeatures(json_30mBufferWaterways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_30mBufferWaterways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30mBufferWaterways_5.addFeatures(features_30mBufferWaterways_5);
var lyr_30mBufferWaterways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30mBufferWaterways_5, 
                style: style_30mBufferWaterways_5,
                popuplayertitle: "30m Buffer Waterways",
                interactive: false,
                title: '<img src="styles/legend/30mBufferWaterways_5.png" /> 30m Buffer Waterways'
            });
var format_Grange_Parameters_Overlay_6 = new ol.format.GeoJSON();
var features_Grange_Parameters_Overlay_6 = format_Grange_Parameters_Overlay_6.readFeatures(json_Grange_Parameters_Overlay_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Grange_Parameters_Overlay_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grange_Parameters_Overlay_6.addFeatures(features_Grange_Parameters_Overlay_6);
var lyr_Grange_Parameters_Overlay_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grange_Parameters_Overlay_6, 
                style: style_Grange_Parameters_Overlay_6,
                popuplayertitle: "Grange_Parameters_Overlay",
                interactive: false,
                title: '<img src="styles/legend/Grange_Parameters_Overlay_6.png" /> Grange_Parameters_Overlay'
            });
var group_Overlay = new ol.layer.Group({
                                layers: [lyr_LocalPlanPrecint_3,lyr_Schools_4,lyr_30mBufferWaterways_5,lyr_Grange_Parameters_Overlay_6,],
                                fold: "open",
                                title: "Overlay"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_BellmereComplete_0,lyr_BellmereRemaining_1,lyr_BellmereRemainingUrbanLiving8Ha_2,],
                                fold: "open",
                                title: "Base"});

lyr_BellmereComplete_0.setVisible(true);lyr_BellmereRemaining_1.setVisible(true);lyr_BellmereRemainingUrbanLiving8Ha_2.setVisible(true);lyr_LocalPlanPrecint_3.setVisible(true);lyr_Schools_4.setVisible(true);lyr_30mBufferWaterways_5.setVisible(true);lyr_Grange_Parameters_Overlay_6.setVisible(true);
var layersList = [group_Base,group_Overlay];
lyr_BellmereComplete_0.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'Remarks': 'Remarks', 'SP NDH': 'SP NDH', });
lyr_BellmereRemaining_1.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', });
lyr_BellmereRemainingUrbanLiving8Ha_2.set('fieldAliases', {'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'NDH': 'NDH', 'Pri_Vendor': 'Pri_Vendor', 'Lead Link': 'Lead Link', });
lyr_LocalPlanPrecint_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GAZ_DATE': 'GAZ_DATE', 'AMD_DATE': 'AMD_DATE', 'CAD_VER': 'CAD_VER', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Schools_4.set('fieldAliases', {'id': 'id', });
lyr_30mBufferWaterways_5.set('fieldAliases', {'id': 'id', });
lyr_Grange_Parameters_Overlay_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LGA_CODE': 'LGA_CODE', 'CAT_DESC': 'CAT_DESC', 'OVL_CAT': 'OVL_CAT', 'OVL2_DESC': 'OVL2_DESC', 'OVL2_CAT': 'OVL2_CAT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'hsm_core': 'hsm_core', 'Descriptio': 'Descriptio', 'Source': 'Source', 'gridcode': 'gridcode', 'Mask': 'Mask', 'layer': 'layer', 'path': 'path', 'LayerName': 'LayerName', });
lyr_BellmereComplete_0.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'Remarks': 'TextEdit', 'SP NDH': 'TextEdit', });
lyr_BellmereRemaining_1.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', });
lyr_BellmereRemainingUrbanLiving8Ha_2.set('fieldImages', {'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'NDH': 'TextEdit', 'Pri_Vendor': '', 'Lead Link': '', });
lyr_LocalPlanPrecint_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'GAZ_DATE': 'TextEdit', 'AMD_DATE': 'TextEdit', 'CAD_VER': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Schools_4.set('fieldImages', {'id': 'TextEdit', });
lyr_30mBufferWaterways_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Grange_Parameters_Overlay_6.set('fieldImages', {'OBJECTID': '', 'LGA_CODE': '', 'CAT_DESC': '', 'OVL_CAT': '', 'OVL2_DESC': '', 'OVL2_CAT': '', 'Shape__Are': '', 'Shape__Len': '', 'hsm_core': '', 'Descriptio': '', 'Source': '', 'gridcode': '', 'Mask': '', 'layer': '', 'path': '', 'LayerName': '', });
lyr_BellmereComplete_0.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'Remarks': 'no label', 'SP NDH': 'inline label - always visible', });
lyr_BellmereRemaining_1.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', });
lyr_BellmereRemainingUrbanLiving8Ha_2.set('fieldLabels', {'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'hidden field', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_LocalPlanPrecint_3.set('fieldLabels', {'OBJECTID': 'no label', 'GAZ_DATE': 'no label', 'AMD_DATE': 'no label', 'CAD_VER': 'no label', 'LGA_CODE': 'no label', 'LP': 'no label', 'LP_PREC': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Schools_4.set('fieldLabels', {'id': 'no label', });
lyr_30mBufferWaterways_5.set('fieldLabels', {'id': 'no label', });
lyr_Grange_Parameters_Overlay_6.set('fieldLabels', {'OBJECTID': 'no label', 'LGA_CODE': 'no label', 'CAT_DESC': 'no label', 'OVL_CAT': 'no label', 'OVL2_DESC': 'no label', 'OVL2_CAT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'hsm_core': 'no label', 'Descriptio': 'no label', 'Source': 'no label', 'gridcode': 'no label', 'Mask': 'no label', 'layer': 'no label', 'path': 'no label', 'LayerName': 'no label', });
lyr_Grange_Parameters_Overlay_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});