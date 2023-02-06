# Introduction

This package enables you to use chatGpt in your application without worrying about underlying methods. You can get api key from openai labs and get started in a minute.

## Getting Started

Here are instructions on how you can get started.

### Prerequisites

You must have openai labs api key credentials before you can get going.

### Installation

```
# Npm
npm install chatgptapi
```

```
# yarn
yarn add chatgptapi
```

```
# pnpm
pnpm add chatgptapi
```

# Usage
```js
const gptapi = require('chatgptapi')

const myGpt = new gptapi({
    apiKey: process.env.OPEN_AI_API,
  })
async function myFunction()
{
    const myResponse = await myGpt.answer("who made tesla?")
    console.log(myResponse)

}
myFunction()
```

## Authors

* **Roshan K.C** - *Initial work* - [roshankcpkr](https://github.com/roshankcpkr)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

