# MeinThereum

Docker compose of a private Ethereum network which includes boot node, miner (using ‘Clique’ proof-of-authority (PoA) consensus algorithm) and JSON RPC node

## How to Run

If you have Docker in your machine, you can run with just:

```sh
docker-compose up -d
```

Docker will build and run 3 containers:

1. Bootnode: Nothing remarkable, it's just there to get things work
2. Miner: using ‘Clique’ proof-of-authority (PoA) consensus algorithm
3. JSON RPC: 
   - Expose HTTP at `http://localhost:8545`
   - GraphQL at `http://localhost:8545/graphql`. It's shipped with UI at `http://localhost:8545/graphql/ui`
   - Web socket at `http://localhost:8546`



The network is created with some test accounts and their passwords are all `123456`

