# SeatBooking API
Seat Booking API is the REST based interface built on NodeJS which allows google users to fetch a location & facility information to view floor & seats, set/fetch preferences, view booked history & fetch available seats on given specific criteria such as date, location & facility.

## Version: 1.0.0
## Pre-Requirements
- Depends on MySql and MongoDB datasources for Booking and Infra data's respectively. 
- Requires Google user's token id as bearer token to access API.
- API using the https://github.com/NeoWebArchSeatBooking/IdentityAPI to authenticate & authorize the given token

## API Reference
### /facilities
#### GET
##### Summary:
list of available location and facility
##### Description:
returns the list of available location and facility
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass bearer token in authroization header |
| 401 | Unauthorized Request, pass valid bearer token in authroization |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
### /facilities/seats
#### GET
##### Summary:
fetch available seats to book
##### Description:
fetch available seats for the given inputs such as location, block, floor and date
##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| date | query | dd-mm-yyyy format | Yes | string |
| locationId | query | specific location id | Yes | string |
| blockId | query | specific block | Yes | string |
| floorId | query | specific floor | No | string |
| availability | query | returns available seats if true or unavailable seats if false. | No | string |
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 401 | Unauthorized Request, pass valid bearer token in authroization |
| 404 | given query parameter not found |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
### /booking/seats
#### GET
##### Summary:
fetch user's booking details
##### Description:
fetch user's booking details if user role is user otherwise fetch all user's booking details for given date
##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| viewRole | query | default user, valid values are user & admin | No | string |
| user | query | applicable only for admin | No | string |
| fromDate | query | required only if viewRole is admin and user has admin access, dd-mm-yyyy format. | No | string |
| toDate | query | required only if viewRole is admin and user has admin access, dd-mm-yyyy format. | No | string |
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, pass valid bearer token in authroization |
| 401 | Unauthorized Request, pass valid bearer token in authroization |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
#### POST
##### Summary:
book a seat
##### Description:
book a seat on specific date
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, request might failed in validation |
| 401 | Unauthorized, pass valid bearer token in authroization |
| 404 | requesting details not found |
| 409 | conflict error |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
### /booking/seats/{seatId}/cancel
#### PATCH
##### Summary:
update the status of user's booked seat
##### Description:
update the status of user's booked seat, for example cancelling a booked seat
##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| seatId | path | unique booked seat identity number | Yes | string |
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Bad Request, request might failed in validation |
| 401 | Unauthorized, pass valid bearer token in authroization |
| 404 | requesting details not found |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
### /preference
#### GET
##### Summary:
fetch list of preferences added by user
##### Description:
returns the list of preferences added by user
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | list of preferences |
| 401 | Unauthorized, pass valid bearer token in authroization |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
#### POST
##### Summary:
create a preference
##### Description:
create a new preference for user
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | success response |
| 401 | Unauthorized, pass valid bearer token in authroization |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |
### /preference/{id}/cancel
#### PATCH
##### Summary:
cancel the preference
##### Description:
cancel the preference
##### Parameters
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | unique preference identity number | Yes | string |
##### Responses
| Code | Description |
| ---- | ----------- |
| 200 | success response |
| 401 | Unauthorized, pass valid bearer token in authroization |
| 500 | System failed to respond |
##### Security
| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

## Swagger Document
```
http://host:port/v1/api-docs
```

## Local Setup
Refer Pre-Requirement section for dependency setup.

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

