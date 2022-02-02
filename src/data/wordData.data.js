const wordData = (category) => {
    // 'Herramientas','Frutas','Marcas','Personajes'
    const words = {
        Herramientas: ['Martillo','Sierra','Alicate','Taladro'],
        Frutas: ['Limon','Fresa','Melon','Mango','Mora','Naranja','Pera','Platano','Pomelo','Sandia','Cereza','Uva','Lima','Manzana'],
        Marcas: ['Cocacola','Nintendo','Microsoft','Sony'],
        Personajes: ['Sonic','Mario','Link','Zelda','Crash','Spiderman','Batman']
    }
    return (words[category]).map(word => word.toUpperCase());
}

export default wordData;