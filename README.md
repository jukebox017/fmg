# FMG

## Tools used

- Node: 16.15.1
- NPM: 8.12.1
- Docker (optional): 20.10.16

## Running the app

### Using NPM scripts

- `cd ./api && npm install && npm start`
- UI available at `localhost:4000`, API at `localhost:4000/graphql`

### Using Docker

Note: Using this method, the UI and API are hosted on two separate servers.

- Run `./dc.sh`
- UI is available at `localhost:3000`, API is available at `localhost:4000/graphql`
