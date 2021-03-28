importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.2/workbox-sw.js');

workbox.setConfig({ modulePathPrefix: "workbox-v6.1.2/" });

const precacheManifest = [[{"revision":"85d7e70755c705d5a6f53fe74d04e42b","url":"about-me.html"},{"revision":"47fbf6694e189d45ca2045d5bac6e4b1","url":"index.html"},{"revision":"fc3a01c88ae60eaeb09bddcc35b3d458","url":"projects-archive.html"},{"revision":"1f14689cd0e5442be9fd4fa607f5bb1f","url":"public/assets/src/img/asset-videira.webp"},{"revision":"cc26439860bbde750cb4b8076a43523e","url":"public/assets/src/img/B9.webp"},{"revision":"7637ec22dc3477b447924108be6c2ccb","url":"public/assets/src/img/behance.svg"},{"revision":"cbdc43d295ce0b57891b714d3a300e7e","url":"public/assets/src/img/BelasArtes.webp"},{"revision":"496fddf9764874bfd53552b0d9cf7a5f","url":"public/assets/src/img/close.svg"},{"revision":"d5ef8e67ea29101330670e7fb18aac58","url":"public/assets/src/img/Compasso.webp"},{"revision":"ee7808e01c8e5f685963a10b48d281e2","url":"public/assets/src/img/CompassoBlog.webp"},{"revision":"17e3ee1d9078fe17dfa2dca52130325b","url":"public/assets/src/img/facebook.svg"},{"revision":"b4876aeb2043d06ae507ff04cc8912e1","url":"public/assets/src/img/Getnet.webp"},{"revision":"147ac57279c2c45c46663fb906ffdcda","url":"public/assets/src/img/github.svg"},{"revision":"37bfc69274df92f708413b3b4a37c141","url":"public/assets/src/img/hamburger.svg"},{"revision":"4063ff57a463fae5181dbfef3e029c0d","url":"public/assets/src/img/instagram.svg"},{"revision":"f3a4b5fdfc1b6cc37e71775d01bf8222","url":"public/assets/src/img/IPG.webp"},{"revision":"686e97fba6e16b942eb5b7c3a0561f73","url":"public/assets/src/img/levante.webp"},{"revision":"16978f0bf7260450464a5d45830c7848","url":"public/assets/src/img/linkedin.svg"},{"revision":"aacb583a7b9ba4ad94283ac1ce73e73d","url":"public/assets/src/img/logo.webp"},{"revision":"328c930e126069a1e3c6a6b90c335eba","url":"public/assets/src/img/red-arrow.webp"},{"revision":"69d7b9f92de385e6e79f4fb118c083f6","url":"public/assets/src/img/vitorvideira.webp"},{"revision":"38deae1c60a87405dcc21e9c403c1af8","url":"public/css/main.css"},{"revision":"e0c722af41d3bc611ffa3283152b631a","url":"public/js/main.js"},{"revision":"6af1d96d5d09f659427f09276c1806ad","url":"public/js/single.js"},{"revision":"af96bbadf807773405cfcbbcfbceda6e","url":"single-b9.html"},{"revision":"357e22e2a0b6fe99ae150da057857420","url":"single-caixa-belas-artes.html"},{"revision":"c188275120500dded31f23ebd16dfdc7","url":"single-compasso-blog.html"},{"revision":"7de0f223b1d5a4259b683ac306ca3bea","url":"single-compassouol.html"},{"revision":"bd3e938f6574fa2e0a328dce3132c2ca","url":"single-getnet.html"},{"revision":"7ad304332dfe9f2e79efc93199ea00f9","url":"single-violencia-sexual.html"},{"revision":"1e45da9b3d27cc0d616468baecfcf4ac","url":"sw.js"},{"revision":"508f199f2b2b24ac6dbc641f956329b2","url":"workbox-d17b4d8d.js"}]];

workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([]);