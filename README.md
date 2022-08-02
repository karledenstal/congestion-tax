Install dependencies

```
npm i
```

Run it

```
npm run dev
```

Query the api on

> http://localhost:9000/api/tax/:vehicleType

Body should be a json with dates, example:

```
{
  dates: [
    "2013-02-07 06:23:27",
    "2013-02-07 15:27:00"
  ]
}
```

Vehicle types

```
Car
Bus
Motorcycle
Military
Tractor
Emergency
Diplomat
Foreign
```
