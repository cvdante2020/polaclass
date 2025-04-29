import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Política de Privacidad - Aclassblog</title>
      </head>
      <body style="font-family:Arial;padding:2rem">
        <h1>Política de Privacidad</h1>
        <p>En Aclassblog respetamos y protegemos tu información personal. Solo usamos tus datos para brindarte nuestros servicios educativos por WhatsApp.</p>
        <p>No compartimos tu información con terceros. Puedes solicitar la eliminación de tus datos escribiéndonos a soporte@aclassblog.com.</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
