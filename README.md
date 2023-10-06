# react-roll-dice

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

You can clone it and step by step create your own NPM package and publish it.

It is an react roll Dice.

[**Live Demo**]("")

## Installation:

```bash
npm install react-roll-dice
```

## Usage:

Add `Dice` to your component:

```javascript
import Dice from 'react-roll-dice'

export default function Home() {
  return (
    <div>
      <h1>Default:</h1>
      <Dice />
    </div>
  )
}
```

# How to colaborate

## Install the dependencies

```bash
npm install
```

## install the dependencies of example page

This step is necessary to visualize the change during development:

```bash
cd ./example && npm install && cd ..
```

Use the [semântic commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)

[npm-url]: https://www.npmjs.com/package/react-roll-dice
[npm-image]: https://img.shields.io/npm/v/react-roll-dice
[github-license]: https://img.shields.io/github/license/gapon2401/react-roll-dice
[github-license-url]: https://github.com/gapon2401/react-roll-dice/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/react-roll-dice/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/react-roll-dice/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-roll-dice
