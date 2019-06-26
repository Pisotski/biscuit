// https://redux.js.org/recipes/server-rendering#inject-initial-component-html-and-state
export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Biscuit Tracker</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/react-table@latest/react-table.css" />
        ${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" type="text/css" href="/dist/main.style.css" />' : ''}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>var ReactTable = window.ReactTable.default</script>
        <script src="https://unpkg.com/react-table@latest/react-table.js"></script>
        <script src="https://unpkg.com/react-table@latest/react-table.min.js"></script>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/main.bundle.js"></script>
      </body>
    </html>
    `;
}
