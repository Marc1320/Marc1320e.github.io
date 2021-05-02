ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32630").setExtent([-409344.650092, 432271.956948, 886771.084243, 1372332.642170]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ci_region_1 = new ol.format.GeoJSON();
var features_ci_region_1 = format_ci_region_1.readFeatures(json_ci_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_ci_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ci_region_1.addFeatures(features_ci_region_1);
var lyr_ci_region_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ci_region_1, 
                style: style_ci_region_1,
                interactive: true,
                title: '<img src="styles/legend/ci_region_1.png" /> ci_region'
            });
var format_dpt_issia_2 = new ol.format.GeoJSON();
var features_dpt_issia_2 = format_dpt_issia_2.readFeatures(json_dpt_issia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_dpt_issia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dpt_issia_2.addFeatures(features_dpt_issia_2);
var lyr_dpt_issia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dpt_issia_2, 
                style: style_dpt_issia_2,
                interactive: true,
                title: '<img src="styles/legend/dpt_issia_2.png" /> dpt_issia'
            });
var format_sp_boguedia_3 = new ol.format.GeoJSON();
var features_sp_boguedia_3 = format_sp_boguedia_3.readFeatures(json_sp_boguedia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_sp_boguedia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sp_boguedia_3.addFeatures(features_sp_boguedia_3);
var lyr_sp_boguedia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sp_boguedia_3, 
                style: style_sp_boguedia_3,
                interactive: true,
                title: '<img src="styles/legend/sp_boguedia_3.png" /> sp_boguedia'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ci_region_1.setVisible(true);lyr_dpt_issia_2.setVisible(true);lyr_sp_boguedia_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ci_region_1,lyr_dpt_issia_2,lyr_sp_boguedia_3];
lyr_ci_region_1.set('fieldAliases', {'NOM': 'NOM', 'CODE_ZONE': 'CODE_ZONE', 'NUM_ZONE': 'NUM_ZONE', 'ZONE_TOUR': 'ZONE_TOUR', });
lyr_dpt_issia_2.set('fieldAliases', {'NOM': 'NOM', 'AIRE': 'AIRE', 'SUPERF': 'SUPERF', });
lyr_sp_boguedia_3.set('fieldAliases', {'NOM': 'NOM', 'SUPERF': 'SUPERF', 'date': 'date', });
lyr_ci_region_1.set('fieldImages', {'NOM': 'TextEdit', 'CODE_ZONE': 'Range', 'NUM_ZONE': 'TextEdit', 'ZONE_TOUR': 'Range', });
lyr_dpt_issia_2.set('fieldImages', {'NOM': 'TextEdit', 'AIRE': 'TextEdit', 'SUPERF': 'TextEdit', });
lyr_sp_boguedia_3.set('fieldImages', {'NOM': 'TextEdit', 'SUPERF': 'TextEdit', 'date': 'DateTime', });
lyr_ci_region_1.set('fieldLabels', {'NOM': 'no label', 'CODE_ZONE': 'no label', 'NUM_ZONE': 'no label', 'ZONE_TOUR': 'no label', });
lyr_dpt_issia_2.set('fieldLabels', {'NOM': 'no label', 'AIRE': 'no label', 'SUPERF': 'no label', });
lyr_sp_boguedia_3.set('fieldLabels', {'NOM': 'header label', 'SUPERF': 'no label', 'date': 'no label', });
lyr_sp_boguedia_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});