const server = require('./server');
const { sequelize, models } = require('./src/models');

sequelize.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () =>
    console.log('\nListening on port 3000\n')
  );
});
