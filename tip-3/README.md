# Tokens fungible smart contracts

Tokens fungible contracts implementation with burn support + tests. Based on broxus smart contract for TIP-3 - https://github.com/broxus/ton-eth-bridge-token-contracts, but remastered for using with `locklift` tool.

## Configuration

Use `locklift.config.template.js` file to create `locklift.config.js`. Please check instructions for `locklift ` tool [here](https://github.com/broxus/ton-locklift)

## Local developing process

This section explains how to run and test contracts locally.

### Installation

Install all dependencies for your environment.

```
npm i
```

### Run the local Everscale node

Use the [Everscale local-node](https://hub.docker.com/r/tonlabs/local-node) for local environment.

```
docker run -d --name local-node -e USER_AGREEMENT=yes -p7777:80 tonlabs/local-node
```

### Building the smart contracts

```
npm run build
```

### Deploying the smart contracts on the local blockchain

```
npm run deploy
```

### Testing process

```
npm run test
```

### Generate documentation

```
npm run gendoc
```