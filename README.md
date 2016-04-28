# Blackjack CLI Tools


## Contents

* [Background](#background)
* [Installation](#installation)
* [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Running](#running)
* [Contributors](#contributors)
* [Contributing & Bug Reports](#contributing--bug-reports)


## Background

These CLI tools are designed to ease working on Blackjack related projects. They should arm anyone unfamiliar with a typical Blackjack project with the necessary tools to run and contribute to such projects.

Once installed, you can be able to start a new component from scratch and run that component in isolation on a server. You can also perform additional tasks such as lint the codebase, or run unit tests.


## Installation

You can install the toolkit via NPM:

```
npm install -g sky-uk/blackjack-tools
```


## Prerequisites

The target application you're running tests on should have the following babel packages installed:

* babel-loader

*Note:* we're working on ensuring these dependencies are managed outside of the application.


## Usage

For more information on the supported commands, run `blackjack --help`.

Commands are currently being developed, the status of them is defined below.


### Complete

* **init** - create a new component.
* **lint** - lint all in test and lib dirs.
* **test** - run JS tests in your test directory.
* **preview** - preview the built component locally.


### Pending

_No pending commands right now._


## Contributors

- [Richard McIntyre](https://github.com/mackstar)
- [Callum Barratt](https://github.com/cbarratt)
- [Josh Nesbitt](https://github.com/joshnesbitt)


## Contributing & Bug Reports

Contribution guidelines are shared with the main project, please see the [CONTRIBUTING.md](CONTRIBUTING.md) there.

We keep a list of features and bugs [in the issue tracker](https://github.com/sky-uk/blackjack-tools/issues).
