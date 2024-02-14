function capWords(texto) {
    return texto.replace(/\b\w/g, function (letra) {
      return letra.toUpperCase();
    });
};
export {capWords};