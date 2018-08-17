export default {
  id: 'ex00',
  name: 'Example',
  // TODO: Find something more elegant for the dead code problem
  function: () => {
    if (process.env.APPLICATION_BACKEND) {
      return import('./function.js');
    }
  },
  content: () => {
    if (!process.env.APPLICATION_BACKEND) {
      return import('./Content.md');
    }
  },
  authors: [
    {
      name: 'LightDiscord',
      email: 'root@arnaud.sh',
      website: 'https://arnaud.sh'
    }
  ]
};
