export default function ({ html }) {
  return `
<html lang="en">
  <head><title>HELLO DOLLY!</title></head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <body id="body">
    <div id="outlet">
      ${html}
    </div>
    <script src="index.js"></script>
  </body>
</html>
`
}
