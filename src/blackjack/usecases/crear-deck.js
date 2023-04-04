import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejm: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejm: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 * 
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}