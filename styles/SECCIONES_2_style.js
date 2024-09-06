var size = 0;
var placement = 'point';
function categories_SECCIONES_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CUARTA SECCION':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,37,205,1.0)', lineDash: [20.139999999999997,4.028], lineCap: 'butt', lineJoin: 'miter', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QUINTA SECCION':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,78,242,1.0)', lineDash: [20.139999999999997,4.028], lineCap: 'butt', lineJoin: 'miter', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SEXTA SECCION':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,107,9,1.0)', lineDash: [20.139999999999997,4.028], lineCap: 'butt', lineJoin: 'miter', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SECCIONES_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("SECCIONES");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Open Sans Condensed ExtraBold\', sans-serif";
    var labelFill = "#201e0f";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("SECCIONES") !== null) {
        labelText = String(feature.get("SECCIONES"));
    }
    
var style = categories_SECCIONES_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
