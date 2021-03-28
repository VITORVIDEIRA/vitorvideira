/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-d17b4d8d'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "about-me.html",
    "revision": "85d7e70755c705d5a6f53fe74d04e42b"
  }, {
    "url": "index.html",
    "revision": "47fbf6694e189d45ca2045d5bac6e4b1"
  }, {
    "url": "projects-archive.html",
    "revision": "fc3a01c88ae60eaeb09bddcc35b3d458"
  }, {
    "url": "public/assets/src/img/asset-videira.webp",
    "revision": "1f14689cd0e5442be9fd4fa607f5bb1f"
  }, {
    "url": "public/assets/src/img/B9.webp",
    "revision": "cc26439860bbde750cb4b8076a43523e"
  }, {
    "url": "public/assets/src/img/behance.svg",
    "revision": "7637ec22dc3477b447924108be6c2ccb"
  }, {
    "url": "public/assets/src/img/BelasArtes.webp",
    "revision": "cbdc43d295ce0b57891b714d3a300e7e"
  }, {
    "url": "public/assets/src/img/close.svg",
    "revision": "496fddf9764874bfd53552b0d9cf7a5f"
  }, {
    "url": "public/assets/src/img/Compasso.webp",
    "revision": "d5ef8e67ea29101330670e7fb18aac58"
  }, {
    "url": "public/assets/src/img/CompassoBlog.webp",
    "revision": "ee7808e01c8e5f685963a10b48d281e2"
  }, {
    "url": "public/assets/src/img/facebook.svg",
    "revision": "17e3ee1d9078fe17dfa2dca52130325b"
  }, {
    "url": "public/assets/src/img/Getnet.webp",
    "revision": "b4876aeb2043d06ae507ff04cc8912e1"
  }, {
    "url": "public/assets/src/img/github.svg",
    "revision": "147ac57279c2c45c46663fb906ffdcda"
  }, {
    "url": "public/assets/src/img/hamburger.svg",
    "revision": "37bfc69274df92f708413b3b4a37c141"
  }, {
    "url": "public/assets/src/img/instagram.svg",
    "revision": "4063ff57a463fae5181dbfef3e029c0d"
  }, {
    "url": "public/assets/src/img/IPG.webp",
    "revision": "f3a4b5fdfc1b6cc37e71775d01bf8222"
  }, {
    "url": "public/assets/src/img/levante.webp",
    "revision": "686e97fba6e16b942eb5b7c3a0561f73"
  }, {
    "url": "public/assets/src/img/linkedin.svg",
    "revision": "16978f0bf7260450464a5d45830c7848"
  }, {
    "url": "public/assets/src/img/logo.webp",
    "revision": "aacb583a7b9ba4ad94283ac1ce73e73d"
  }, {
    "url": "public/assets/src/img/red-arrow.webp",
    "revision": "328c930e126069a1e3c6a6b90c335eba"
  }, {
    "url": "public/assets/src/img/vitorvideira.webp",
    "revision": "69d7b9f92de385e6e79f4fb118c083f6"
  }, {
    "url": "public/css/main.css",
    "revision": "38deae1c60a87405dcc21e9c403c1af8"
  }, {
    "url": "public/js/main.js",
    "revision": "e0c722af41d3bc611ffa3283152b631a"
  }, {
    "url": "public/js/single.js",
    "revision": "6af1d96d5d09f659427f09276c1806ad"
  }, {
    "url": "single-b9.html",
    "revision": "af96bbadf807773405cfcbbcfbceda6e"
  }, {
    "url": "single-caixa-belas-artes.html",
    "revision": "357e22e2a0b6fe99ae150da057857420"
  }, {
    "url": "single-compasso-blog.html",
    "revision": "c188275120500dded31f23ebd16dfdc7"
  }, {
    "url": "single-compassouol.html",
    "revision": "7de0f223b1d5a4259b683ac306ca3bea"
  }, {
    "url": "single-getnet.html",
    "revision": "bd3e938f6574fa2e0a328dce3132c2ca"
  }, {
    "url": "single-violencia-sexual.html",
    "revision": "7ad304332dfe9f2e79efc93199ea00f9"
  }], {});

});
//# sourceMappingURL=sw.js.map
