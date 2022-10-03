#### mongo docker

```
docker run --name fuckMongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123456 -p 27017:27017 -d -d mongo
```

#### docker ps

```
docker exec -it 8a8f8e6adc5f /bin/bash
```

#### mongo

```
mongo
show dbs
use hft
show collections
```

you will see bybits
