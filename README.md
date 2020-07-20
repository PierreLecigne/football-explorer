# Football Explorer App

Football Explorer App allows you to browse the different leagues, and to consult the list of teams participating in these leagues as well as their players.

## Requirements

* [Docker](https://www.docker.com/)

## Setup
1. Clone repository: `git clone https://github.com/PierreLecigne/football-explorer`
2. Launch startup script: `sh ./start.sh`
3. Import data to the Mongo DB container by running `sh ./db/scripts/import.sh`
4. Go to http://localhost:4200/ for the frontend, http://localhost:3000/ for the API