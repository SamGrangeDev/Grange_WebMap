ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([152.841566, -27.122571, 152.978997, -27.053358]);
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
var lyr_WarabaPDAInterimLUPlan_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Waraba PDA Interim LU Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WarabaPDAInterimLUPlan_1.png",
    attributions: ' ',
                                projection: 'EPSG:7844',
                                alwaysInRange: true,
                                imageExtent: [152.845779, -27.126834, 152.921604, -27.052796]
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
var format_DeveloperheldParcels_3 = new ol.format.GeoJSON();
var features_DeveloperheldParcels_3 = format_DeveloperheldParcels_3.readFeatures(json_DeveloperheldParcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_DeveloperheldParcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeveloperheldParcels_3.addFeatures(features_DeveloperheldParcels_3);
var lyr_DeveloperheldParcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeveloperheldParcels_3, 
                style: style_DeveloperheldParcels_3,
                popuplayertitle: "Developer-held Parcels",
                interactive: true,
                title: '<img src="styles/legend/DeveloperheldParcels_3.png" /> Developer-held Parcels'
            });
var format_KeyOpportunities_4 = new ol.format.GeoJSON();
var features_KeyOpportunities_4 = format_KeyOpportunities_4.readFeatures(json_KeyOpportunities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_KeyOpportunities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyOpportunities_4.addFeatures(features_KeyOpportunities_4);
var lyr_KeyOpportunities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyOpportunities_4, 
                style: style_KeyOpportunities_4,
                popuplayertitle: "Key Opportunities",
                interactive: true,
                title: '<img src="styles/legend/KeyOpportunities_4.png" /> Key Opportunities'
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
    <img src="styles/legend/LocalPlanPrecint_5_4.png" /> Urban living<br />'
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
var group_Overlay = new ol.layer.Group({
                                layers: [lyr_LocalPlanPrecint_5,lyr_Grange_Parameters_Overlay_6,lyr_30mBufferWaterways_7,],
                                fold: "open",
                                title: "Overlay"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_WarabaPDAInterimLUPlan_1,lyr_CabooltureWestParcels_2,lyr_DeveloperheldParcels_3,lyr_KeyOpportunities_4,],
                                fold: "open",
                                title: "Base"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_WarabaPDAInterimLUPlan_1.setVisible(true);lyr_CabooltureWestParcels_2.setVisible(true);lyr_DeveloperheldParcels_3.setVisible(true);lyr_KeyOpportunities_4.setVisible(true);lyr_LocalPlanPrecint_5.setVisible(true);lyr_Grange_Parameters_Overlay_6.setVisible(true);lyr_30mBufferWaterways_7.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_Base,group_Overlay];
lyr_CabooltureWestParcels_2.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'Remarks': 'Remarks', 'SP NDH': 'SP NDH', 'Lead Link': 'Lead Link', });
lyr_DeveloperheldParcels_3.set('fieldAliases', {'Developer': 'Developer', });
lyr_KeyOpportunities_4.set('fieldAliases', {'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'GrangeNDH': 'GrangeNDH', 'Lot Plan': 'Lot Plan', 'Gross HA': 'Gross HA', 'Suburb': 'Suburb', 'Remarks': 'Remarks', 'Urban Liv': 'Urban Liv', 'Lead Link': 'Lead Link', });
lyr_LocalPlanPrecint_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GAZ_DATE': 'GAZ_DATE', 'AMD_DATE': 'AMD_DATE', 'CAD_VER': 'CAD_VER', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Grange_Parameters_Overlay_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LGA_CODE': 'LGA_CODE', 'CAT_DESC': 'CAT_DESC', 'OVL_CAT': 'OVL_CAT', 'OVL2_DESC': 'OVL2_DESC', 'OVL2_CAT': 'OVL2_CAT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'hsm_core': 'hsm_core', 'Descriptio': 'Descriptio', 'Source': 'Source', 'gridcode': 'gridcode', 'Mask': 'Mask', 'layer': 'layer', 'path': 'path', 'LayerName': 'LayerName', });
lyr_30mBufferWaterways_7.set('fieldAliases', {'id': 'id', });
lyr_CabooltureWestParcels_2.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'Remarks': 'TextEdit', 'SP NDH': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_DeveloperheldParcels_3.set('fieldImages', {'Developer': 'TextEdit', });
lyr_KeyOpportunities_4.set('fieldImages', {'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'GrangeNDH': 'TextEdit', 'Lot Plan': 'TextEdit', 'Gross HA': 'TextEdit', 'Suburb': 'TextEdit', 'Remarks': 'TextEdit', 'Urban Liv': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_LocalPlanPrecint_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'GAZ_DATE': 'TextEdit', 'AMD_DATE': 'TextEdit', 'CAD_VER': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Grange_Parameters_Overlay_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'LGA_CODE': 'TextEdit', 'CAT_DESC': 'TextEdit', 'OVL_CAT': 'TextEdit', 'OVL2_DESC': 'TextEdit', 'OVL2_CAT': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'hsm_core': 'TextEdit', 'Descriptio': 'TextEdit', 'Source': 'TextEdit', 'gridcode': 'TextEdit', 'Mask': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'LayerName': 'TextEdit', });
lyr_30mBufferWaterways_7.set('fieldImages', {'id': 'TextEdit', });
lyr_CabooltureWestParcels_2.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'inline label - visible with data', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', 'SP NDH': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_DeveloperheldParcels_3.set('fieldLabels', {'Developer': 'inline label - visible with data', });
lyr_KeyOpportunities_4.set('fieldLabels', {'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'hidden field', 'local_auth': 'hidden field', 'address': 'inline label - visible with data', 'GrangeNDH': 'inline label - visible with data', 'Lot Plan': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'Suburb': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', 'Urban Liv': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_LocalPlanPrecint_5.set('fieldLabels', {'OBJECTID': 'no label', 'GAZ_DATE': 'no label', 'AMD_DATE': 'no label', 'CAD_VER': 'no label', 'LGA_CODE': 'no label', 'LP': 'no label', 'LP_PREC': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Grange_Parameters_Overlay_6.set('fieldLabels', {'OBJECTID': 'no label', 'LGA_CODE': 'no label', 'CAT_DESC': 'no label', 'OVL_CAT': 'no label', 'OVL2_DESC': 'no label', 'OVL2_CAT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'hsm_core': 'no label', 'Descriptio': 'no label', 'Source': 'no label', 'gridcode': 'no label', 'Mask': 'no label', 'layer': 'no label', 'path': 'no label', 'LayerName': 'no label', });
lyr_30mBufferWaterways_7.set('fieldLabels', {'id': 'no label', });
lyr_30mBufferWaterways_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});