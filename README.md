# Core Api Documentation
> Api doc for swagger

![GitHub Logo](http://worker.cloudfactory.com/images/cloudfactory.png)


Core api documentation is a place where all the api related information are stored. It is
difficult to maintain the api document and this repo helps building an api document file.

## Technology

1. node v6.4.0

## Setup
1. **Install Dependencies**

  * **node**

      _For mac_
      ```bash
      brew install node
      ```

      _For Debian_
      ```bash
      apt-get install nodejs
      ```

  Or follow this [link](https://nodejs.org/en/download/package-manager/) to install.


2. **Clone Repo**

  ```bash
  git clone git@github.com:cloudfactory/coreapi.git <your-project-directory>
  ```

3. **Go to project directory**

  ```bash
  cd your-project-directory
  ```

4. **Install project Dependencies**

  ```bash
  npm install
  ```

## Contributing (Development)
  For development and documentation follow [wiki](https://github.com/cloudfactory/coreapi/wiki).
  * Add or update yml file under `api_doc` directory.
  * Add api related files under api directory
  * Add definition related files under definitions directory

  File Structure
  ```javascript
  > api_doc
    > api
        > calendar
          calendar.yml
          schedules.yml
        > users
          users.yml
          time_offs.yml

    > definitions
        > calendar
          calendar_def.yml
          schedule.yml
        > user
          user_def.yml
          time_off_def.yml
  ```


## Build final document

  ```bash
  npm run build-doc
  ```

  It generates `final.yml` file.
  It generates `final.json` file into `public` directory.

## Run dev server

  ```bash
  npm run dev
  ```

## Run all in one

  ```bash
  npm start
  ```

  >_**Note**:_ After running the server, you do not have to reload the server, just run the command `npm run build-doc` and refresh the browser.

## Release
After building final document, copy final.yml file content and paste it into production [server](http://54.177.82.158:8080).

>_**Note**:_ While doing this process, make sure no other person is updating the yml document on the server.

