import app from './config/server.js';

import noticiasRoutes from './app/routes/noticias.js';
noticiasRoutes(app);

import adminRoutes from './app/routes/admin.js';
adminRoutes(app);

import homeRoutes from './app/routes/home.js';
homeRoutes(app);

app.listen(3000, () => {
  console.log("Servidor ON");
});