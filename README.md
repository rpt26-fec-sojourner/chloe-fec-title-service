# AirBnB Title Service

> The title service is responsible for storing and displaying the name and location of the AirBnB listing. It will also call on the Reviews service to get information needed for the header (number of reviews + stars).

## Related Projects

  - https://github.com/rpt26-fec-sojourner/carolyn-photos-service
  - https://github.com/rpt26-fec-sojourner/jrudio-description-service
  - https://github.com/rpt26-fec-sojourner/melanie-reviews-service
  - https://github.com/rpt26-fec-sojourner/chloe-fec-proxy-server.git

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

- Seed database:
  1. From root of directory, run "npm run seed" in the terminal.

- Start app:
  Pre-requisite: For the first time you pull this repo or for any time the repo is updated, please see Installing Dependencies section before continuing with Step 1.
  1. From root of directory, run "npm run start" in the terminal to start the server.
  2. From root of directory, run "npm run build" in a new terminal (separate from the terminal in 1.) to build using webpack.
  3. In browser, navigate to http://localhost:5500/:listing_id for a listing_id from 1 to 100 in order to see the title information for the provided listing id.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:
npm install
