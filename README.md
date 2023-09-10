<p align="center">
  <img src="assets/logo.svg" alt="Aero Toolbox Logo" />
</p>

Aero Toolbox CLI is a command-line tool that provides a variety of aviation-related utilities and functions, including the ability to decode METAR and more. It makes it easy to obtain weather and other useful information for pilots and aviation enthusiasts.

## Installation

To use the Aero Toolbox CLI, you must have [Node.js](https://nodejs.org/) installed on your system. Then, you can install the CLI as follows:

```bash
npm install -g aero-toolbox-cli
```

## Usage

Once installed, you can use the Aero Toolbox CLI directly from the command line. Here are some examples of commands and how to use the application:

### METAR Reports

You can use Aero Toolbox CLI to decode METAR reports. Simply run the following command:

```bash
aero-toolbox-cli metar <code>
```

or you can add `-d` to get a decoded report

```bash
aero-toolbox-cli metar <code> -d
```

## Other Functions

In addition to METAR decoding, Aero Toolbox CLI offers other useful aviation utilities and functions. You can explore all available options by running:

```bash
aero-toolbox-cli --help
```

## Contributing

Contributions are always welcome! If you would like to contribute to the Aero Toolbox CLI, please refer to the [Contributing Guide](CONTRIBUTING.md).
