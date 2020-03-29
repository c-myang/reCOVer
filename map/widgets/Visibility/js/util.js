// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/Deferred","esri/tasks/GeometryService"],function(f,g,e,h){return f(null,{constructor:function(a){this.appConfig=a.appConfig;this.nls=a.nls;(a=this.appConfig.geometryService)||(a="//utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer");this.geomService=new h(a)},getCleanInput:function(a){a=a.replace(/\n/g,"");a=a.replace(/\s+/g," ").trim();return a.toUpperCase()},getCoordValues:function(a,c,b){var d=new e;a={sr:4326,coordinates:[[a.x,
a.y]],conversionType:c.name?c.name:c,numOfDigits:b||6,rounding:!0,addSpaces:!1};switch(c){case "DD":a.numOfDigits=6;break;case "USNG":a.numOfDigits=5;break;case "MGRS":a.conversionMode="mgrsDefault";a.numOfDigits=5;break;case "UTM (H)":a.conversionType="utm";a.conversionMode="utmNorthSouth";a.addSpaces=!0;break;case "UTM":a.conversionType="utm";a.conversionMode="utmDefault";a.addSpaces=!0;break;case "GARS":a.conversionMode="garsDefault"}this.geomService.toGeoCoordinateString(a).then(function(a){d.resolve(a)},
function(){d.resolve(null)});return d.promise},getXYNotation:function(a,c){var b=new e,d;d=c.name?c.name:c;c={sr:4326,conversionType:d,strings:[]};switch(d){case "DD":case "DDM":case "DMS":c.numOfDigits=2;a=a.replace(/[\u00b0\u02da\u00ba^~*"'\u2032\u00a8\u02dd]/g,"");c.strings.push(a);break;case "USNG":c.strings.push(a);c.addSpaces="false";break;case "MGRS":c.conversionMode="mgrsNewStyle";c.strings.push(a);c.addSpaces="false";break;case "UTM (H)":c.conversionType="utm";c.conversionMode="utmNorthSouth";
c.strings.push(a);break;case "UTM":c.conversionType="utm";c.conversionMode="utmDefault";c.strings.push(a);break;case "GARS":c.conversionMode="garsCenter";c.strings.push(a);break;case "GEOREF":c.strings.push(a)}this.geomService.fromGeoCoordinateString(c).then(function(a){b.resolve(a)},function(){b.resolve(null)});return b.promise},getNotations:function(){return[{name:"DD",pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([NS\+\-\s])*)([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([EW\+\-\s])*)$/].map(function(a){return a.source}).join("")),
notationType:this.nls.DDLatLongNotation,conversionType:"DD"},{name:"DDrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([EW\+\-\s])*)/,/([,:;\s|\/\\]+)(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([\u00b0\u02da\u00ba^~*]*)([NS\+\-\s])*)$/].map(function(a){return a.source}).join("")),notationType:this.nls.DDLongLatNotation,conversionType:"DD"},{name:"DDM",pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['\u2032\s_]*([NS\+\-\s])*)/,
/([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['\u2032\s_]*([EW\+\-\s])*)/,/[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DDMLatLongNotation,conversionType:"DDM"},{name:"DDMrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['\u2032\s_]*([EW\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['\u2032\s_]*([NS\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),
notationType:this.nls.DDMLongLatNotation,conversionType:"DDM"},{name:"DMS",pattern:new RegExp([/^(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]?\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([NS\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([EW\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DMSLatLongNotation,
conversionType:"DMS"},{name:"DMSrev",pattern:new RegExp([/^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([EW\+\-\s])*)/,/([,:;\s|\/\\]+)/,/(([NS\+\-\s])*([0-8]?\d|90)[\u00b0\u02da\u00ba^~*\s\-_]+([0-5]?\d|\d)['\u2032\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["\u00a8\u02dd\s_]*([NS\+\-\s])*)[\s]*$/].map(function(a){return a.source}).join("")),notationType:this.nls.DMSLongLatNotation,conversionType:"DMS"},{name:"GARS",
pattern:/^\d{3}[a-zA-Z]{2}[1-4]?[1-9]?$/,notationType:this.nls.GARSNotation,conversionType:"GARS"},{name:"GEOREF",pattern:/^[a-zA-Z]{4}\d{1,8}$/,notationType:this.nls.GEOREFNotation,conversionType:"GEOREF"},{name:"MGRS",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,/(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/,/$|^(\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*)/,/(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,
/(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/,/$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$/].map(function(a){return a.source}).join("")),notationType:this.nls.MGRSNotation,conversionType:"MGRS"},{name:"UTM",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[c-hj-np-xC-HJ-NP-X][-,;:\s]*\d{1,6}\.?\d*[mM]?[-,;:\s]?\d{1,7}\.?\d*[mM]?$/].map(function(a){return a.source}).join("")),notationType:this.nls.UTMBandNotation,conversionType:"UTM"},
{name:"UTM (H)",pattern:new RegExp([/^\d{1,2}[-,;:\s]*[NnSs][-,;:\s]*\d{1,6}\.?\d*[mM]?[-,;:\s]+\d{1,7}\.?\d*[mM]?$/].map(function(a){return a.source}).join("")),notationType:this.nls.UTMHemNotation,conversionType:"UTM (H)"}]},getCoordinateType:function(a){var c=this.getCleanInput(a);a=new e;var b=this.getNotations(),c=g.filter(b,function(a){return a.pattern.test(this.v)},{v:c});0<c.length?a.resolve(c):a.resolve(null);return a.promise},getFormattedDDStr:function(a,c,b){var d={};d.sourceValue=a;d.sourceFormatString=
c;a=a[0].split(/[ ,]+/);d.latdeg=a[0].replace(/[nNsS]/,"");d.londeg=a[1].replace(/[eEwW]/,"");b&&(d.latdeg="N"===a[0].slice(-1)?"+"+d.latdeg:"-"+d.latdeg,d.londeg="W"===a[1].slice(-1)?"-"+d.londeg:"+"+d.londeg);c=c.replace(/X/,d.londeg);c=c.replace(/[eEwW]/,a[1].slice(-1));c=c.replace(/[nNsS]/,a[0].slice(-1));c=c.replace(/Y/,d.latdeg);d.formatResult=c;return d},getFormattedDDMStr:function(a,c,b){var d={};d.sourceValue=a;d.sourceFormatString=c;d.parts=a[0].split(/[ ,]+/);d.latdeg=d.parts[0];d.latmin=
d.parts[1].replace(/[nNsS]/,"");d.londeg=d.parts[2];d.lonmin=d.parts[3].replace(/[eEwW]/,"");b&&(d.latdeg="N"===d.parts[1].slice(-1)?"+"+d.latdeg:"-"+d.latdeg,d.londeg="W"===d.parts[3].slice(-1)?"-"+d.londeg:"+"+d.londeg);a=c.replace(/[EeWw]/,d.parts[3].slice(-1));a=a.replace(/Y/,d.lonmin);a=a.replace(/X/,d.londeg);a=a.replace(/[NnSs]/,d.parts[1].slice(-1));a=a.replace(/B/,d.latmin);a=a.replace(/A/,d.latdeg);d.formatResult=a;return d},getFormattedDMSStr:function(a,c,b){var d={};d.sourceValue=a;d.sourceFormatString=
c;d.parts=a[0].split(/[ ,]+/);d.latdeg=d.parts[0];d.latmin=d.parts[1];d.latsec=d.parts[2].replace(/[NnSs]/,"");d.londeg=d.parts[3];d.lonmin=d.parts[4];d.lonsec=d.parts[5].replace(/[EWew]/,"");b&&(d.latdeg="N"===d.parts[2].slice(-1)?"+"+d.latdeg:"-"+d.latdeg,d.londeg="W"===d.parts[5].slice(-1)?"-"+d.londeg:"+"+d.londeg);a=c.replace(/A/,d.latdeg);a=a.replace(/B/,d.latmin);a=a.replace(/C/,d.latsec);a=a.replace(/X/,d.londeg);a=a.replace(/Y/,d.lonmin);a=a.replace(/Z/,d.lonsec);a=a.replace(/[NnSs]/,d.parts[2].slice(-1));
a=a.replace(/[EeWw]/,d.parts[5].slice(-1));d.formatResult=a;return d},getFormattedUSNGStr:function(a,c){var b={};b.sourceValue=a;b.sourceFormatString=c;a[0].match(/^[ABYZ]/)?b.gzd=a[0].match(/[ABYZ]/)[0].trim():b.gzd=a[0].match(/\d{1,2}[C-HJ-NP-X]/)[0].trim();b.grdsq=a[0].replace(b.gzd,"").match(/[a-hJ-zA-HJ-Z]{2}/)[0].trim();b.easting=a[0].replace(b.gzd+b.grdsq,"").match(/^\d{1,5}/)[0].trim();b.northing=a[0].replace(b.gzd+b.grdsq,"").match(/\d{1,5}$/)[0].trim();a=c.replace(/Y/,b.northing);a=a.replace(/X/,
b.easting);a=a.replace(/S/,b.grdsq);a=a.replace(/Z/,b.gzd);b.formatResult=a;return b},getFormattedMGRSStr:function(a,c){var b={};b.sourceValue=a;b.sourceFormatString=c;a[0].match(/^[ABYZ]/)?b.gzd=a[0].match(/[ABYZ]/)[0].trim():b.gzd=a[0].match(/\d{1,2}[C-HJ-NP-X]/)[0].trim();b.grdsq=a[0].replace(b.gzd,"").match(/[a-hJ-zA-HJ-Z]{2}/)[0].trim();b.easting=a[0].replace(b.gzd+b.grdsq,"").match(/^\d{1,5}/)[0].trim();b.northing=a[0].replace(b.gzd+b.grdsq,"").match(/\d{1,5}$/)[0].trim();a=c.replace(/Y/,b.northing);
a=a.replace(/X/,b.easting);a=a.replace(/S/,b.grdsq);a=a.replace(/Z/,b.gzd);b.formatResult=a;return b},getFormattedGARSStr:function(a,c){var b={};b.sourceValue=a;b.sourceFormatString=c;b.lon=a[0].match(/\d{3}/);b.lat=a[0].match(/[a-zA-Z]{2}/);a=a[0].match(/\d*$/);b.quadrant=a[0][0];b.key=a[0][1];c=c.replace(/K/,b.key);c=c.replace(/Q/,b.quadrant);c=c.replace(/Y/,b.lat);c=c.replace(/X/,b.lon);b.formatResult=c;return b},getFormattedGEOREFStr:function(a,c){var b={};b.sourceValue=a;b.sourceFormatString=
c;b.lon=a[0].match(/[a-zA-Z]{1}/)[0].trim();b.lat=a[0].replace(b.lon,"").match(/[a-zA-Z]{1}/)[0].trim();b.quadrant15lon=a[0].replace(b.lon+b.lat,"").match(/[a-zA-Z]{1}/)[0].trim();b.quadrant15lat=a[0].replace(b.lon+b.lat+b.quadrant15lon,"").match(/[a-zA-Z]{1}/)[0].trim();a=a[0].replace(b.lon+b.lat+b.quadrant15lon+b.quadrant15lat,"");b.quadrant1lon=a.substr(0,a.length/2);b.quadrant1lat=a.substr(a.length/2,a.length);c=c.replace(/Y/,b.quadrant1lat);c=c.replace(/X/,b.quadrant1lon);c=c.replace(/D/,b.quadrant15lat);
c=c.replace(/C/,b.quadrant15lon);c=c.replace(/B/,b.lat);c=c.replace(/A/,b.lon);b.formatResult=c;return b},getFormattedUTMStr:function(a,c){var b={};b.sourceValue=a;b.sourceFormatString=c;b.parts=a[0].split(/[ ,]+/);b.zone=b.parts[0].replace(/[A-Z]/,"");b.bandLetter=b.parts[0].slice(-1);b.easting=b.parts[1];b.westing=b.parts[2];a=c.replace(/Y/,b.westing);a=a.replace(/X/,b.easting);a=a.replace(/B/,b.bandLetter);a=a.replace(/Z/,b.zone);b.formatResult=a;return b},getFormattedUTMHStr:function(a,c){var b=
{};b.sourceValue=a;b.sourceFormatString=c;b.parts=a[0].split(/[ ,]+/);b.zone=b.parts[0].replace(/[A-Z]/,"");b.hemisphere=b.parts[0].slice(-1);b.easting=b.parts[1];b.westing=b.parts[2];a=c.replace(/Y/,b.westing);a=a.replace(/X/,b.easting);a=a.replace(/H/,b.hemisphere);a=a.replace(/Z/,b.zone);b.formatResult=a;return b},convertMetersToUnits:function(a,c){var b=0;switch(c.toLowerCase()){case "meters":b=a;break;case "feet":b=3.28084*a;break;case "kilometers":b=.001*a;break;case "miles":b=6.21371E-4*a;
break;case "nauticalMiles":b=5.39957E-4*a;break;case "yards":b=1.09361*a}return b},convertToMeters:function(a,c){var b=a;switch(c){case "meters":b=a;break;case "feet":b=.3048*a;break;case "kilometers":b=1E3*a;break;case "miles":b=1609.34*a;break;case "nauticalMiles":b=1852.001376036*a;break;case "yards":b=.9144*a}return b}})});