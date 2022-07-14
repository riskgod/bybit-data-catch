# bybit-data-catch

collect bybit orderbook data in moogo

#### how to run 
```
npm i
node run lib socket.js
```
#### mongo docker
```
docker run --name moon -p 27017:27017 -v /data/mongo:/data/db -d -d mongo   
```
#### docker ps
```
docker exec -it <--docker-id--> /bin/bash
```
#### mongo
```
mongo
show dbs
use hft
show collections
```
you will see bybits
