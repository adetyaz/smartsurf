#SmartSurf

<p align="center">
  <img src="./assets/webstore-image.png" width="80%" />
</p>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
   - [Using npm](#using-npm)
   - [Using Yarn](#using-yarn)
   - [Using Pnpm](#using-pnpm)
4. [Configuration](#configuration)
5. [Usage](#usage)
   - [Data Collection and Privacy](#data-collection-and-privacy)
   - [Building Your Own Extension](#building-your-own-extension)
   - [Calling Functions](#calling-functions)
6. [Examples](#examples)
7. [Documentation](#documentation)
8. [Contributing](#contributing)
9. [License](#license)
10. [Acknowledgments](#acknowledgments)

# Introduction

[NetSepio](https://netsepio.com/) is a crypto wallet that can be used to manage digital assets and post review for a particular domain on the Aptos blockchain. You can download the extension directly from the chrome web store and use it .

# Features

Unlock a world of possibilities with our crypto wallet extension designed to streamline your digital asset management on the Ethereum blockchain. Download the extension directly from the Chrome Web Store to experience the following features:

- **Domain Reviews:** Post reviews for any domain effortlessly, providing valuable insights on the Ethereum blockchain.

- **Aptos-Based Wallet Creation:** Seamlessly create a secure Aptos-based wallet, ensuring the safety and accessibility of your digital assets.

- **Token Transactions:** Effortlessly send tokens to streamline your cryptocurrency transactions and enhance your overall digital asset management experience.

Download now and elevate your crypto experience with a powerful and user-friendly extension.

## Installation

You can Install the extention from the chrome webstore. You can find it in our [website](https://netsepio.com/)

## Getting started

To get started, clone the repository and install the dependencies:

git clone [https://github.com/NetSepio/ChromiumExtension.git](https://github.com/NetSepio/ChromiumExtension.git)

### Using npm

```

cd ChromiumExtension
npm install

```

### Using yarn

```

cd ChromiumExtension
yarn install

```

### Using pnpm

```

cd ChromiumExtension
pnpm install

```

## Running the app

To run the app locally, use the following command:

### Using npm

```
npm run dev
```

### Using yarn

```
yarn run dev
```

### Using pnpm

```
pnpm run dev
```

This will start a development server at `http://localhost:3000`.

## Building the app

To build the app for production, use the following command:

### Using npm

```

npm run build

```

### Using yarn

```

yarn run build

```

### Using pnpm

```

pnpm run build

```

This will generate a production build in the `build` directory.

## Configuration

Before running the project, make sure to set the following configuration variables in your environment:

NB: you can get the api key for NFT Storage from [NFTStorage](https://nft.storage/manage/)

```bash
export PUBLIC_GATEWAY_URL="https://gateway.netsepio.com/api/v1.0"
export PUBLIC_SUBGRAPH_URL="https://api.thegraph.com/subgraphs/name/netsepio/netsepio-mumbai"
export PUBLIC_NFT_STORAGE_API_KEY="your-api-key-here"
export PUBLIC_NODE_URL="https://fullnode.testnet.aptoslabs.com/v1"

```

## Data Collection and Privacy

### Overview

SmartSurf is a comprehensive suite of features designed to streamline your online experience in the Web3 world. It currently offers:

AI-Powered Website Summarization
Secure Aptos Wallet Integration
With planned future additions including:

Decentralized Identity Management
NFT Management and Discovery Tool

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was built using [Svelte Kit](https://kit.svelte.dev/) and [TypeScript](https://www.typescriptlang.org/). Special thanks to the creators and maintainers of these tools.
