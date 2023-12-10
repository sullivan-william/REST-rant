# Project REST-Rant

REST-Rant is an app made using JavaScript, CSS, Express, MongoDB, and Mongoose. This app follows the model, views, controller file formatting using JSX as the view engine. This app demonstrates full CRUD capabilities with the options to create new places and comments, edit places, and delete places and comments.

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above)

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |
| founded | Number |
| comments | Array |

**comments**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| author | String |
| rant | Boolean |
| stars | Number |
| content | String |
