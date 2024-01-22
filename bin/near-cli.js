const yargs = require('yargs');
const chalk = require('chalk');

yargs // eslint-disable-line
    .strict()
    .scriptName('near')
    .middleware(require('../utils/check-version'))
    .middleware(require('../middleware/print-options'))
    .middleware(require('../middleware/key-store'))
    .command(require('../commands/credentials/add'))
    .command(require('../commands/keys/add'))
    .command(require('../commands/contract/call'))
    .command(require('../commands/account/create'))
    .command(require('../commands/account/delete'))
    .command(require('../commands/keys/delete'))
    .command(require('../commands/contract/deploy'))
    .command(require('../commands/credentials/generate'))
    .command(require('../commands/keys/list'))
    .command(require('../commands/account/login'))
    .command(require('../commands/transactions/send'))
    .command(require('../commands/account/state'))
    .command(require('../commands/contract/storage'))
    .command(require('../commands/transactions/status'))
    .command(require('../commands/contract/view'))
    .command(require('../commands/deprecated'))
    .option('verbose', { desc: 'Prints out verbose output', type: 'boolean', default: false })
    .showHelpOnFail(true)
    .recommendCommands()
    .demandCommand(1, chalk`Pass {bold --help} to see all available commands and options.`)
    .usage(chalk`Usage: {bold $0 <command> [options]}`)
    .wrap(null)
    .argv;