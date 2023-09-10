const argv = require('yargs')
  .scriptName('aero-toolbox-cli')
  .command('metar <code>', 'Decodificar METAR', yargs => {
    yargs
      .positional('metar', {
        describe: 'Código METAR a decodificar',
        type: 'string'
      })
      .option('decode', {
        alias: 'd',
        describe: 'Decodificar el METAR',
        type: 'boolean'
      });
  })
  // .options({
  //   metar: {
  //     alias: 'metar',
  //     describe: '...',
  //     demandOption: true
  //   },
  //   decode: {
  //     alias: 'decode',
  //     describe: 'provide a path to file'
  //   }
  // })
  .check((argv, options) => {
    if (argv.metar.length < 3 || argv.metar.length > 4) {
      throw 'Ingrese un código IATA/ICAO correcto';
    }
    return true;
  })
  .help().argv;

module.exports = argv;
