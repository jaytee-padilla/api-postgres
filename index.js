const server = require('./server');
const { sequelize, models } = require('./src/models');

const eraseDatabaseOnSync = true;

sequelize.sync({ force: true }).then(() => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  server.listen(process.env.PORT, () =>
    console.log('\nListening on port 3000\n')
  );
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'Jaytee',
      messages: [
        {
          text: 'Message 1 for Jaytee'
        },
      ],
    },
    {
      include: [models.Message],
    },
  );

  await models.User.create(
    {
      username: 'Baiken',
      messages: [
        {
          text: 'Message 1 for Baiken',
        },
        {
          text: 'Message 2 for Baiken',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );
};
