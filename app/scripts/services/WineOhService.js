'use strict';

angular.module('wineohApp')
  .service('WineOhService', function WineOhService($q, $http, $log, ServiceUrl) {

    var MOCK_DATA = {"result":{"ROWCOUNT":129,"COLUMNS":["WINE_ID","WINE_NAME","COUNTRY","REGION","SUB_REGION","VINTAGE","GRAPE","COLOR","CLASSIFICATION","VARIETAL"],"DATA":{"wine_id":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"wine_name":["Altos Monastrell Olivares","Andezon CDR","Apaltagua Carmenere Reserva","Aveleda Quinta de Avelda","Caldaro Pinot Grigio","Castano Hecula","Cercius Red","Cercius White","Chateau Ste. Michelle Cabernet Sauvignon","Chateau Ste. Michelle Merlot","Charles Smith Riesling Kung Fu Girl","Charles Smith Syrah Boom Boom","Clifford Bay Sauvignon Blanc","Columbia Crest H3 Cabernet Sauvignon","D Arenberg Hermit Crab","D Arenberg Stump Jump Red","Da Vinci Chianti","Filus Torrontes","Foxglove Cabernet Sauvignon","Foxglove Chardonnay","Kendall Jackson VR Merlot","Kendall Jackson VR Syrah","Kitchen Sink White","Kono Sauvignon Blanc","LA Carraia Sangiovese","La Posta Cocina Blend","Lafage Cote Este White","Lamarca Prosecco","M Chiarlo Barbera d Asti","Montebueno Rioja Red","Muga Rioja Rosado","Mumm Napa Cuvee M","Navacon Anciano Gran Reserva Ten YR","Obalo Rioja","Pacific Rim Columbia Riesling","Pacific Rim Dry Riesling","Pedroncelli Petit Sirah Dry Creek","Piping Shrike Shiraz","Santa Emfa Merlot Reserve","Nora Albarino","Scharaffenberger Brut","Seven Deadly Zins","Tarima Hill Monastrell","Von Schleinitz Riesling Highdef","Woop Woop Cabernet Sauvignon","Alamos Malbec","Beringer Founders Chardonnay","Beringer White Zinfandel","Bogle Chardonnay","Bogle Merlot","Bogle Petite Sirah","Chateau St. Jean Cabernet Sauvignon California","Chateau St. Jean Chardonnay North Coast","Chateau St. Michele Cabernet Sauvignon","Chateau St. Michele Merlot","Chateau St. Michele Riesling","Cline Zinfandel Lodi","Clos Dubois Chardonnay North Coast","Columbia Crest Grand Estate Cabernet","Columbia Crest Grand Estate Chardonnay","Columbia Crest Grand Estate Merlot","Columbia Crest Two Vines Chardonnay","Cupcake Red Velvet","Cupcake Chardonnay","Cooks Extra Dry","Cooks Brut","Cupcake Pinot Noir","Columbia Crest Two Vines Merlot","Cupcake Sauvignon Blanc","Folie A Deux Menage A Trois Red","Folie A Deux Menage A Trois White","Fourteen Hands Cabernet Sauvignon","Fourteen Hands Hot to Trot Red","Freixenet Cordon Negro Brut","Gascon Malbec","Gnarly Head Zin Old Vine","Hess Chardonnay Monterey","Insatiable Red","Rosemount Cab/Merlot","Yellowtail Shiraz","Yellowtail Chardonnay","Toasted Head Chardonnay","St. Francis Red","Rex Goliath Pinot Noir","Rex Goliath Cabernet Sauvignon","Ravenswood Zen of Zin","R Mondavi Chardonnay Private Select","R Mondavi Cabernet Sauvignon Private Select","Protocolo Tinto","Penascal Tempranillo","Mirassou Pinot Noir","Meridian Chardonnay","McManis Merlot","McManis Chardonnay","Marietta Old Vine Red Lot 59","Lunetta Prosecco","Louis Martini Cabernet Sauvignon Sonoma","Lindemans Chardonnay Bin 65","Korbel Brut","Kendall Jackson VR Chardonnay","Jaume Serra Christalino Brut","Jardot Beaujolais Villages","J Lohr Chardonnay","J Lohr Cabernet Sauvignon","Cupcake Petite Sirah","Cupcake Shiraz","Little Black Dress Divalisious Red","Ravenswood Petite Sirah VB","Ravenswood Merlot VB","Ravenswood Cabernet Sauvignon VB","Zestos","D Arenberg Stump Jump Cabernet Sauvignon","Kenwood Vintage Red","Rosemont Shiraz/Cabernet Sauvignon","Rosemont Cabernet Sauvignon","Cline Red Truck Red","Gnarly Head Authentic Red","Fat Louis Messy Business Red","Fat Louis Duck Tuck","Fat Louis Road to Nowhere Red","Bliss Family Schoolhouse Red","Beringer Founders Cabernet Sauvignon","Noble Vines 181 Merlot","Folie A Deux Menage a Trois Pinot Noir","Yellowtail Grenache/Shiraz","Yellowtail Cab/Merlot","Yellowtail Merlot","Yellowtail Shiraz/Cab","Yellowtail Sweet Red Roo"],"country":["Spain","France","Chile","Portugal","","Spain","France","France","USA","USA","USA","USA","New Zealand","USA","Australia","Australia","Italy","Argentina","USA","USA","USA","USA","USA","New Zealand","Italy","Argentina","France","Italy","Italy","Spain","Spain","USA","Spain","Spain","USA","USA","USA","Australia","Chile","Spain","USA","USA","Spain","Germany","Australia","Argentina","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","USA","New Zealand","USA","USA","USA","USA","Spain","Argentina","USA","USA","USA","Australia","Australia","Australia","USA","USA","USA","USA","USA","USA","USA","Spain","Spain","USA","USA","USA","USA","USA","Italy","USA","Australia","USA","USA","Spain","France","USA","USA","USA","Australia","USA","USA","USA","USA","Spain","Australia","USA","Australia","Australia","USA","USA","France","France","France","USA","USA","USA","USA","Australia","Australia","Australia","Australia","Australia"],"region":["Jumilla","Rhone","Repel Valley","Vinho Verde","","Murcia","Rhone Valley","Rhone Valley","Washington","Washington","Washington","Washington","Marlborough","Washington","South Australia","South Australia","Tuscany","Mendoza","California","California","California","California","California","Marlborough","Umbria","Mendoza","Vin de Pays","Venato","Piedmont","Rioja","Rioja","California","Valdepenas","Rioja","Washington","Washington","California","South Australia","Maipo Valley","Galicia","California","California","Murcia","","Southeastern Australia","Mendoza","California","California","California","California","California","California","California","Washington","Washington","Washington","California","California","Washington","Washington","Washington","Washington","California","California","California","California","California","Washington","Marlborough","California","California","Washington","Washington","Sant Sadurni d' Anoia","Mendoza","California","California","California","New South Wales","Southeastern Australia","Southeastern Australia","California","California","California","California","California","California","California","Castilla y Leon","Castilla y Leon","California","California","California","California","California","Trentino","California","New South Wales","California","California","Catalunya","Burgundy","California","California","California","Barossa Valley","California","California","California","California","Miscellaneous Spanish Regions","Southeastern Australia","California","Southeastern Australia","Southeastern Australia","California","California","St. Chinian","St. Chinian","South France","California","California","California","California","Southeastern Australia","Southeastern Australia","Southeastern Australia","Southeastern Australia","Southeastern Australia"],"sub_region":["Jumilla","Cotes du Rhone","Colchagua Valley","","","Yecla","Cotes du Rhone Villages","Cotes du Rhone Villages","Columbia Valley","Columbia Valley","Columbia Valley","Columbia Valley","Awatere Valley","Horse Heaven Hills","Adelaide Hills","Adelaide Hills","Chianti","","Paso Robles","Central Coast","Sonoma County","","","","","","Catalan","","Asti","NA","","Napa Valley","","","Columbia Valley","Columbia Valley","Sonoma County","Barossa Valley","","Rias Baixas","Mendocino County","Central Coast","Jumilla","","","","","","","","","","North Coast","Columbia Valley","Columbia Valley","Columbia Valley","","North Coast","Columbia Valley","Columbia Valley","Columbia Valley","","","Central Coast","","","Central Coast","","","","","","","","","Lodi","Monterey County","","","","","","Sonoma County","","","","","","Tierra de Castilla","","","","","","","","Sonoma County","","","","Penedes","Cote de Beaune","Arroyo Seco","Paso Robles","Central Coast","","","","Sonoma County","","Madrid","","","","","","Central Coast","","","Montes de la Grage","Mendocino","","Central Coast","North Coast","","","","",""],"vintage":["2011","2012","2012","2012","2012","2010","2011","2011","2011","2011","2012","2012","2013","2011","2012","2012","2011","2010","2012","2011","2011","2009","","2012","2012","2011","2011","","2011","2010","2012","","2003","2012","2011","2011","2009","2010","2010","2012","","2011","2011","2012","2012","2012","2012","","2012","2012","2011","2011","2012","2011","2011","2012","2012","2012","2011","2011","2012","2011","2012","2012","","","2012","2012","2013","2011","2012","2011","2011","","2011","2012","2012","","2012","","","2012","2008","","","2011","2012","2012","2010/2011","2012","2012","2012","2012","2012","","","2011","2012","","2012","","2011","2012","2011","2011","2012","2010","2011","2010","2011","2012","2009","2010","2012","2011","2012","2012","2010","2010","2012","","2010-2011","2011","2011","","","","",""],"grape":["Monastrell","Grenache","Carmenere","Vinho Verde","Pinot Grigio-Pinot Gris","Monastrell","Grenache","Grenache, Sauvignon Blanc","Cabernet Sauvignon","Merlot","Riesling","Syrah","Sauvignon Blanc","Cabernet Sauvignon","Marsanne","Grenache","Chianti","Torrontes","Cabernet Sauvignon","Chardonnay","Merlot","Syrah","Chardonnay","Sauvignon Blanc","Sangiovese","Bonarda","Chardonnay","Glera","Barbera","Misc","","Moscato","Tempranillo","Tempranillo","Riesling","Riesling","Petit Sirah","Shiraz","Merlot","Albarino","Chardonnay","Zinfandel","Monastrell","Riesling","Cabernet Sauvignon","Malbec","Chardonnay","White Zinfandel","Chardonnay","Merlot","Petite Sirah","Cabernet Sauvignon","Chardonnay","Cabernet Sauvignon","Merlot","Riesling","Zinfandel","Chardonnay","Cabernet Sauvignon","Chardonnay","Merlot","Chardonnay","","Chardonnay","","","Pinot Noir","Merlot","Sauvignon Blanc","Cabernet Sauvignon","Chardonnay","Cabernet Sauvignon","Red Blend","Macabeo","Malbec","Zinfandel","Chardonnay","Barbera","Cabernet Sauvignon","Shiraz","Chardonnay","Chardonnay","Cabernet Sauvignon","Pinot Noir","Cabernet Sauvignon","Zinfandel","Chardonnay","Cabernet Sauvignon","","Tempranillo","Pinot Noir","Chardonnay","Merlot","Chardonnay","Red Blend","Glera","Cabernet Sauvignon","Chardonnay","Chardonnay","Chardonnay","Macabeo","Gamay","Chardonnay","Cabernet Sauvignon","Petite Sirah","Shiraz","Red Blend","Petite Sirah","Merlot","Cabernet Sauvignon","Garnacha","Cabernet Sauvignon","Red Blend","Cabernet Sauvignon","Cabernet Sauvignon","Cabernet Franc","Cabernet Sauvignon","Carignan","Carignan","Cabernet Sauvignon","Cabernet Sauvignon","Cabernet Sauvignon","Merlot","Pinot Noir","Grenache","Cabernet Sauvignon","Merlot","Cabernet Sauvignon","Cabernet Sauvignon"],"color":["Red","Red","Red","White","White","Red","Red","White","Red","Red","White","Red","White","Red","White","Red","","White","Red","White","Red","Red","White","White","Red","Red","White","White","Red","Red","Rose","White","Red","Red","White","White","Red","Red","Red","White","White","Red","Red","White","Red","Red","White","Rose","White","Red","Red","Red","White","Red","Red","White","Red","White","Red","White","Red","White","Red","White","White","White","Red","Red","White","Red","White","Red","Red","White","Red","Red","White","Red","Red","Red","White","White","Red","Red","Red","Red","White","Red","Red","Red","Red","White","Red","White","Red","White","Red","White","White","White","White","Red","White","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red","Red"],"classification":["Misc red","Cotes du Rhone","Carmenere","Vinho Verde","","Misc red","","","Cabernet","Merlot","Riesling","Syrah","Sauvignon Blanc","Cabernet","Misc white","Misc red","","","Cabernet","Chardonnay","Merlot","Shiraz-Syrah","","Sauvignon Blanc","","Misc red","","","Barbera","Misc red","","Brut","Gran Reserva","","Riesling","Riesling-Gewurtz","Red Zinfandel","Shiraz","Merlot","Albarino","Brut","Red Zinfandel","Monastrell","Riesling","Cabernet","Malbec","Chardonnay","Rose","Chardonnay","Merlot","Petite Sirah","Cabernet","Chardonnay","Cabernet","Merlot","Riesling-Gewurtz","Red Zinfandel","Chardonnay","Cabernet","Chardonnay","Merlot","Chardonnay","","Chardonnay","Extra dry","Brut","Pinot Noir","Merlot","Sauvignon Blanc-Fume","Misc red","Misc white","Cabernet Sauvignon","","Brut","Malbec","Red Zinfandel","Chardonnay","Misc red","Cab Blend","Shiraz-Syrah","Chardonnay","Chardonnay","Misc red","Pinot Noir","Cabernet","Red Zinfandel","Chardonnay","Cabernet","Misc red","Misc red","Pinot Noir","Chardonnay","Merlot","Chardonnay","Misc red","Misc white","Cabernet","Chardonnay","Brut","Chardonnay","Brut","AOC","Chardonnay","Cabernet","Petite Sirah","Shiraz","Red Blend","Petite Sirah","Merlot","Cabernet","","Cabernet Sauvignon","Misc red","","Cabernet","Misc red","Red Blend","Red Blend","Red Blend","Red Blend","Red Blend","Cabernet","Merlot","Pinot Noir","Misc red","Cab Blend","Merlot","Cab Blend","Red Blend"],"varietal":["Monastrell","Grenache, syrah","Carmenere","Vinho Verde","Pinto Grigio-Pinot Gris","Monastrell","Grenache, syrah","Grenache blanc, Sauvignon Blanc","Cabernet","Merlot","Riesling","Syrah","Sauvignon Blanc","Cabernet Sauvignon","Marsanne, Viognier","Grenache, mourveedre, syrah","","Torrontes","Cabernet","Chardonnay","Merlot","Syrah","Chardonnay, Chenin Blanc, Gewurztraminer","","Sangiovese","Bonarda, Malbec, Syrah","Chardonnay, Grenache Blanc, Marsanne","Glera","Barbera","","","Moscato","Tempranillo","Tempranillo","Riesling","Riesling","Petit Sirah","","Merlot","Albarino","Chardonnay","Zinfandel","Monastrell","Riesling","Cabernet Sauvignon","Malbec","Chardonnay","White Zinfandel","Chardonnay","Merlot","Petite Sirah","Cabernet","Chardonnay","Cabernet Sauvignon","Merlot","Riesling","Zinfandel","Chardonnay","Cabernet Sauvignon","Chardonnay","Merlot","Chardonnay","","Chardonnay","","","Pinot Noir","Merlot","Sauvignon Blanc","Cabernet Sauvignon, Merlot, Zinfandel","Chardonnay, Chenin Blanc, Moscato","Cabernet Sauvignon","Red Blend","Macabeo","Malbec","Zinfandel","Chardonnay","Barbera, Cabernet Sauvignon, Syrah, Zinfandel","Cabernet Sauvignon, Merlot ","Shiraz","Chardonnay","Chardonnay","Cabernet Sauvignon, Merlot, Syrah, Zinfandel","Pinot Noir","Cabernet Sauvignon","Zinfandel","Chardonnay","Cabernet Sauvignon","","Tempranillo","Pinot Noir","Chardonnay","Merlot","Chardonnay","Red Blend","Glera","Cabernet Sauvignon","Chardonnay","Chardonnay, Pinot Noir","Chardonnay","Macabeo","Gamay","Chardonnay","Cabernet Sauvignon","Petite Sirah","Shiraz","Red Blend","Petite Sirah","Merlot","Cabernet Sauvignon","Garnacha, Tempranillo","Cabernet Sauvignon","Red Blend","Cabernet Sauvignon, Shiraz","Cabernet Sauvignon","Cabernet Franc, Petite Sirah, Syrah","Cabernet Sauvignon, Merlot, Zinfandel","Carignan, Grenache, Syrah","Carignan, Grenache, Syrah","Cabernet Sauvignon, Carignan, Cinsault, Syrah","Cabernet Sauvignon, Merlot, Syrah, Zinfandel","Cabernet Sauvignon","Merlot","Pinot Noir","Grenache, Shiraz","Cabernet Sauvignon, Merlot","Merlot","Cabernet Sauvignon, Shiraz","Cabernet Sauvignon, Shiraz, and other reds"]}},"prefix":{"executionTime":1,"SQL":"\n\t\t\t\t\tCALL pr_wines_lst();\n\t\t\t\t","RECORDCOUNT":129,"cached":false,"executionTimeNano":1472508,"COLUMNLIST":"wine_id,wine_name,country,region,sub_region,vintage,grape,color,classification,varietal"}};

    var _helper = {
      /** The REAL HTTP GET - we need CORS headers for this to work.  */
      doHttpGet: function(url) {
        var deferred = $q.defer();

        $log.info('requesting url: ' + url);

        $http.jsonp(url).success(function(result) {
          deferred.resolve(_helper.cleanupData(result));
        }).error(function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      },

      /** The Mock Implementation of the data (to use until we have CORS headers).  This can be ripped out after that.  */
      mockDoHttpGet: function(url, mockData) {
        var deferred = $q.defer();

        $log.info('Mocking Request Of: ' + url);

        deferred.resolve(_helper.cleanupData(mockData));

        return deferred.promise;
      },

      /** This Normalizes the data into a useful data structure.  */
      cleanupData: function(dataIn) {
        // The object to be returned (it gets populated below).
        var results = {
          red: {
            grape: [],
            classification:[],
            wine: []
          },
          white: {
            grape: [],
            classification:[],
            wine: []
          },
          other: {
            grape: [],
            classification:[],
            wine: []
          },
          idHash: {}
        };

        // Look at the entire set of results, build a wine object for each:
        for(var i=0; i<dataIn.result.DATA.wine_id.length; i++) {
          var wine = {
            wineId: dataIn.result.DATA.wine_id[i],
            wineName: dataIn.result.DATA.wine_name[i],
            country: dataIn.result.DATA.country[i],
            region: dataIn.result.DATA.region[i],
            vintage: dataIn.result.DATA.vintage[i],
            grape: dataIn.result.DATA.grape[i],
            color: dataIn.result.DATA.color[i],
            classification: dataIn.result.DATA.classification[i],
            varietal: dataIn.result.DATA.varietal[i]
          };

          // Populate the idHash with the wine objects for instant access by ID:
          results.idHash[wine.wineId] = wine;

          // Depending on the wine color, populate the appropriate collection in the results object.
          if(typeof(wine.color)==='undefined' || wine.color === null || wine.color === '') {
            results.other.wine.push(wine);
            _helper.populateArrayWithUnique(results.other.grape, wine.grape);
            _helper.populateArrayWithUnique(results.other.classification, wine.classification);
          } else if(wine.color.toLowerCase()==='red') {
            results.red.wine.push(wine);
            _helper.populateArrayWithUnique(results.red.grape, wine.grape);
            _helper.populateArrayWithUnique(results.red.classification, wine.classification);
          } else if(wine.color.toLowerCase()==='white') {
            results.white.wine.push(wine);
            _helper.populateArrayWithUnique(results.white.grape, wine.grape);
            _helper.populateArrayWithUnique(results.white.classification, wine.classification);
          }
        }

        // Sort the grapes and classifications of each:
        angular.forEach(results, function(colorType) {
          colorType.grape = _.sortBy(colorType.grape, function(grapeName){return grapeName;});
          colorType.classification = _.sortBy(colorType.classification, function(classType){return classType;});
        });

        // now return the results:
        return results;
      },

      /** Helper Method that only puts unique values into the array.  */
      populateArrayWithUnique: function(array, value) {
        var add=true;
        angular.forEach(array, function(arrayValue) {
          if(arrayValue === value) {
            add = false;
          }
        });
        if(add) {
          array.push(value);
        }
      }
    };

    var service = {
      getWineData: function() {
        var url = ServiceUrl + '/wine.json';

        // TODO - get CORS headers so this works:
        // return _helper.doHttpGet(url);

        // TODO - rip out the mock call:
        return _helper.mockDoHttpGet(url, MOCK_DATA);
      }
    };

    return service;
  });
