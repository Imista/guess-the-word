const wordData = (category) => {
    // 'Herramientas','Frutas','Marcas','Personajes'
    const words = {
        Herramientas: ['Martillo'],
        Frutas: ['Limon','Fresa','Melon','Mango','Mora','Naranja','Pera','Platano','Pomelo','Sandia','Cereza','Uva','Lima','Manzana'],
        Marcas: ['Cocacola'],
        Personajes: ['Sonic','Mario']
    }
    return words[category];
}

export default wordData;