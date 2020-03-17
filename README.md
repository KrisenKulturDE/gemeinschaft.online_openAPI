# Callcenter Client

This is the client that can write the necessary things to the database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

`npm run setup` will install all dependencys for the server and client.

`npm run dev` will then start both the server and client.

Do not forget that the server needs a .env file to work. An example .env.example is provided in the server files.

Also the client needs a jwt which is the empty token parameter in src/components/Form/Form.js on line 11

## Deployment

The client can be build by doing `cd client` to get into the client folder and then `npm run build`.

The server can just be deployed with `cd server` and `npm run start`.

Other files, which are not in the client or server folder are just used for local testing!
