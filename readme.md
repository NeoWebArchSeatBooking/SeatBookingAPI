# SeatBooking API

This API provides various endpoints to fetch user seat preferences, infra facility information, seat booking history, available seats on given specific criteria and allows to pick & book seat.

## Version: 1.0.0
## API Reference

### base path
```
/v1/seat-management
```
### Get Infrastructure Information
#### GET
```http
Get /infra-information
```
##### Summary:
list of available location and facility

##### Description:
returns the list of available location and facility

##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | Bearer token | Yes | string |

##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 500 | System failed to respond |

### Get the booking Information
```http
Get /seats
```
##### Summary:
fetch user's booking details

##### Description:
fetch user's booking details if user role is user otherwise fetch all user's booking details for given date

##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | Bearer token | Yes | string |
| viewRole | query | default user, valid values are user,admin | No | string |
| date | query | required only if viewRole is admin and user is admin, dd-mm-yyyy format | No | string |

##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 500 | System failed to respond |

### Book a seat
```http
Post /seat
```
##### Summary:
book a seat

##### Description:
book a seat on specific date

##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | Bearer token | Yes | string |

##### Request Body
```
{
  'locationId': 'L1'
  'blockId': 'B11'
  'floorId': 'F1'
  'seatId': 'A302'
  'date': '06-08-2023'
}
```
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 500 | System failed to respond |

### Fetch facility's seats information
```http
Get /infra-seats
```
##### Summary:
fetch available seats to book

##### Description:
fetch available seats for the given inputs such as location, block, floor and date

##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header | Bearer token | Yes | string |
| date | query | dd-mm-yyyy format | Yes | string |
| locationId | query | specific location id | Yes | string |
| blockId | query | specific block | Yes | string |
| floorId | query | specific floor | Yes | string |

##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 500 | System failed to respond |

## Swagger Document
```http
/v1/seat-management/docs
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/NeoWebArchSeatBooking/SeatBookingAPI.git
```

Go to the project directory

```bash
  cd SeatBookingAPI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Authors

- [@DhamoSG](https://github.com/sgddaran)
- [@Nidhin CG](https://github.com/nidhincg)
- [@Sreeram CG](https://github.com/sreerambasam)
- [@Rahul](https://github.com/rahulsuda)

