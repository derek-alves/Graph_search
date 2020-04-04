function pontos(caminho){
    var defaultJson = []
    var nomes = [
    ['Coliseu'],
    ['Fontana di Trevi'],
    ['Basilica de São Pedro'],
    ['Panteão'],
    ['Museus do Vaticano'],
    ['Piazza Navona'],
    ['Piazza Di Spagna'],
    ['Forum Romano'],
    ['Jardins da Villa Borghese'],
    ['Castelo SantAngelo'],
    ['Monte Capitolino'],
    ['Mercado Trajano'],
    ['Galleria Borghese'],
    ['Sistine Chapel'],
    ['Museu Capitolino'],
    ['Campo de Fiori'],
    ['Arco de Constantino'],
    ['Teatro de Marcelo'],
    ['Bocca Della Verità'],
    ['Jardins Vaticanos']]
  
    var rota = []
    var pontos = [
    [12.492274,41.890290],
    [12.483309,41.900987],
    [12.453945,41.902208],
    [12.476864,41.898594],
    [12.453657,41.906512],
    [12.473099,41.899126],
    [12.482381,41.905945],
    [12.485389,41.892646],
    [12.485871,41.912844],
    [12.466287,41.903287],
    [12.466731,41.900510],
    [12.486334,41.895761],
    [12.486334,41.914450],
    [12.454816,41.903194],
    [12.482568,41.893103],
    [12.472176,41.895767],
    [12.490602,41.889866],
    [12.479930,41.892083],
    [12.481439,41.888210],
    [12.450128,41.903619]]

    var cordenadas = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                'properties': {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [ 
    
                    ],
                    'type': 'LineString'
                
                }
            }
        ]
    }
    


var geojson = {
    'type': 'FeatureCollection',
    'features': []
    }


    for(var cont in caminho){
        if(pontos.indexOf(caminho[cont]) && nomes.indexOf(caminho[cont])){
             var point = pontos[caminho[cont]]
             rota.push(pontos[caminho[cont]]);

             var name =  nomes[caminho[cont]];
             var pointDetail =
             {
                 'type': 'Feature',
                 'geometry': {
                     'type': 'Point',
                     'coordinates':point
                 },
                 'properties': {
                     'title': `${name}`,
                     'description': `${name}`
                 }
             }
             }
             geojson.features.push(pointDetail);
    }
    cordenadas.features[0].geometry.coordinates = rota;
    defaultJson.push(cordenadas,geojson);
    return defaultJson
}

var caminhos = [0,12,8,6];
var geojson = pontos(caminhos);
console.log(geojson);
