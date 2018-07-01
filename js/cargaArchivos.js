
$.get("lojatienefuturo-users-locates.csv", function(csvString) { 
    var data = $.csv.toObjects(csvString);
    console.log(data);
 });

// var data = $.csv.toObjects("lojatienefuturo-users-locates.csv");

// console.log(data);
// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "lojatienefuturo-users-locates.csv",
//         dataType: "text",
//         success: function(data) {
//             csv2list(data);
//         }
//     });

//     function csv2list(data) {
//         var filas = data.split(/\r\n|\r/);
//         var latLongList = [];

//         for (let fila = 1; fila < filas.length; fila++) {
//             var columnas = filas[fila].split(",");
//             for (let columna = 1; columna < columnas.length; columna++) {
//                 const element = columnas[columna];
//                 console.log(element);
//             }
//         }
//     };
// });