#!/bin/bash
docker exec -i fdj-db-container mongorestore ./dump --db=football_explorer --drop
