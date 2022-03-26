const wordData = (category) => {
    // 'Frutas','Marcas','Colores','Red_Social','Paises'
    const words = {
        Frutas: ['Limon','Fresa','Melon','Mango','Mora','Naranja','Pera','Platano','Sandia','Cereza','Uva','Lima','Manzana'],
        Marcas: ['Apple','Amazon','Microsoft','Google','Samsung','Cocacola','Disney','Netflix','Nike','Spotify','Paypal','Lego'],
        Colores: ['Azul','Rojo','Amarillo','Naranja','Rosa','Morado','Violeta','Verde','Negro','Blanco','Cafe'],
        Red_social: ['Facebook','Youtube','Whatsapp','Instagram','Tiktok','Twitter','Telegram','Linkedin','Pinterest','Tinder'],
        Paises: ['Mexico','Canada','China','Brasil','Colombia','Argentina','Peru','Chile','Suecia','Japon','Dinamarca','Noruega','Suiza','Australia'],
        Vehiculos: ['Carro','Bicicleta','Motocicleta','Avion','Tren','Barco','Bote','Camion','Trailer','Tractor','Metro'],
        Deportes: ['Futbol','Atletismo','Ciclismo','Natacion','Tenis','Voley','Basquetbol','Golf','Beisbol','Gimnasia','Patinaje'],
        Astronomia: ['Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno','Pluton','Sol','Luna'],
        Signo_zodiacal: ['Aries','Tauro','Geminis','Cancer','Leo','Virgo','Libra','Escorpio','Sagitario','Acuario','Piscis'],
        Mamiferos: ['Ballena','Caballo','Delfin','Elefante','Leon','Gato','Hipopotamo','Jirafa','Oso','Humano','Perro']
    }
    return (words[category]).map(word => word.toUpperCase());
}

export default wordData;