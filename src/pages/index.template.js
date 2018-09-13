module.exports = markup =>
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hypernova test</title>
</head>
<body>
  ${markup}
  <script type="text/javascript" src="/ssr/ssr-bundle.js"></script>
</body>
</html>

  `;
