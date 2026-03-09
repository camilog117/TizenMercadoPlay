// ==UserScript==
// @name         Mercado Play Mejorado (TizenBrew)
// @namespace    http://tu-nombre/
// @version      1.1.0   // ¡Aumenta la versión para forzar actualización!
// @description  Mejora compatibilidad en Mercado Play spoofing User-Agent
// @author       Camilo + Grok
// @match        https://play.mercadolibre.com.co/*
// @match        https://*.mercadolibre.com.co/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Spoof User-Agent moderno (elige uno; prueba secuencialmente)
    const modernUAs = [
        'Mozilla/5.0 (SMART-TV; Linux; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.0 Chrome/108.0.0.0 TV Safari/537.36',  // Tizen reciente Samsung TV
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',  // Chrome desktop Windows (más permisivo)
        'Mozilla/5.0 (SMART-TV; Linux; Tizen 6.0) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/6.0 Chrome/98.0.4758.0 TV Safari/537.36'   // Otro Tizen medio
    ];

    // Elige uno (prueba primero el de Tizen 7.0)
    Object.defineProperty(navigator, 'userAgent', {
        get: () => modernUAs[0],  // Cambia el índice [0] a [1] o [2] si no funciona
        configurable: true
    });

    console.log('User-Agent spoofed a: ' + navigator.userAgent);

    // Resto de tu script (removeAds si quieres, o solo el log por ahora)
    console.log('Mercado Play cargado con spoof – prueba reproducir!');
})();
