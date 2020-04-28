/**
 * En esta carpeta se manejaran dos entornos el de prod y el local
 * Los path de prod y los path de la maquina local
 * este archivo permite cambiar de local a producción mas facil
 */




//=================================
// Puerto
//=================================

process.env.PORT = process.env.PORT || 3000;