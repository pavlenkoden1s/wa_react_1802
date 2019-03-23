"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageTemplate = (initialState, app) => {
    const strStore = JSON.stringify(initialState);
    console.log('++++', strStore);
    const scripts = `
      <script>
         window.__STATE__ = ${strStore}
      </script>
    `;
    return `<!DOCTYPE html>
      <html>
      <head>
        <meta charset='utf-8'>
        <title>Server-side rendering with rehydration</title>
      </head>
      <body>
        <div id='app'>${app}</div>
        ${scripts}
        <script src='./bundle.js'></script>
      </body>
    </html>
  `;
    ;
};
//# sourceMappingURL=template.js.map