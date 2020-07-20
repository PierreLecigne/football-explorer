# Football Explorer App

Football Explorer App allows you to browse the different leagues, and to consult the list of teams participating in these leagues as well as their players.

## Requirements

* [Docker](https://www.docker.com/)

## Setup

All components of this application work with Docker.

1. Clone repository: `git clone https://github.com/PierreLecigne/football-explorer`
2. Create a `server/.env` file, using the example file `server/.env.sample` (use the same values as in the sample file).
2. Launch startup script: `sh ./start.sh`
3. Import data to the Mongo DB container by running `sh ./db/scripts/import.sh`
4. Go to http://localhost:4200/ for the frontend, http://localhost:3000/ for the API

# More

* [Frontend App README](app/README.md)
* [Backend App README](server/README.md)