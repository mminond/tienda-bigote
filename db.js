const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: ""
});

var db = firebase.firestore();

var productos = [
    { "categoryId": 1, "isDeal": false, "productTitle": "Pochoclera", "productPrice": 120, "productStock": 10 },
    { "categoryId": 2, "isDeal": true, "productTitle": "Martillo", "productPrice": 100, "productStock": 20 },
    { "categoryId": 3, "isDeal": false, "productTitle": "Ajedrez", "productPrice": 80, "productStock": 15 },
    { "categoryId": 4, "isDeal": false, "productTitle": "Lapicera", "productPrice": 200, "productStock": 8 },
    { "categoryId": 5, "isDeal": true, "productTitle": "Escoba", "productPrice": 250, "productStock": 12 },
    { "categoryId": 3, "isDeal": true, "productTitle": "Camión", "productPrice": 260, "productStock": 12 },
    { "categoryId": 3, "isDeal": false, "productTitle": "Mis Ladrillos", "productPrice": 100, "productStock": 8 },
    { "categoryId": 5, "isDeal": false, "productTitle": "Guantes de goma", "productPrice": 110, "productStock": 50 },
    { "categoryId": 5, "isDeal": false, "productTitle": "Escobillón", "productPrice": 60, "productStock": 55 },
    { "categoryId": 2, "isDeal": true, "productTitle": "Cortapluma", "productPrice": 400, "productStock": 32 },
    { "categoryId": 0, "isDeal": false, "productTitle": "Cubiertero", "productPrice": 140, "productStock": 24 }
]

productos.forEach((obj) => {
    db.collection("productos")
    .add({
        categoryId: obj.categoryId,
        isDeal: obj.isDeal,
        productPrice: obj.productPrice,
        productStock: obj.productStock,
        productTitle: obj.productTitle,
    })
    .then((docRef)=>{
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) =>{ console.log("Error al agregar un documento: ", error);})
});