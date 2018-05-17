# Arporaattori

Arporizes awards in movie theater venues.

## Requirements

* MacOS and Linux are grade A citizens. Should work in Windows too, but I don't
  always test because I'm not a Windows man.
* If it doesn't work, just use a Unix virtual machine.
* The current version of Node.js (8.x). Might work on older ones, but no guarantees!
* The [Yarn package manager](https://yarnpkg.com).

## Howto

### develop

* check out the code
* `yarn`
* `cp .env.example .env`
* `yarn run start`
  * open browser and go to http://localhost:8888

Builds to `dist/`. Then just put somewhere in the internets.

* `yarn run build`
