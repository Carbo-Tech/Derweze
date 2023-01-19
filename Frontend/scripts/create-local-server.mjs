import { createServer  } from 'https';
import next from 'next';
import fs from 'fs';
import chalk from 'chalk';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

if (!fs.existsSync('./certs/.capath')) {
  const macOsCommand = chalk.greenBright('sudo yarn ssl:setup');
  const linuxCommand = chalk.greenBright('yarn ssl:setup');

  console.error(chalk.red('\nError: Missing SSL certificates\n'));

  console.error(`To fix this error, run the command below:`);
  console.error(`→ MacOS: ${macOsCommand}`);
  console.error(`→ Linux: ${linuxCommand}\n`);

  process.exit();
}

app
  .prepare()
  .then(() => {
    const server = createServer(
      {
        key: fs.readFileSync('./certs/devcert.key'),
        cert: fs.readFileSync('./certs/devcert.cert'),
      },
      (req, res) => handle(req, res)
    );

    return server.listen(PORT, (err) => {
      if (err) throw err;

      console.log('> Ready on https://derweze:3000')
    });
  })
  .catch((err) => {
    console.error(err);
  });
