This is a the Data Systems project of Group F1.
Find below the step by step instruction to run this application locally on your machine.

## Step 1: Download the project from GitHub

```
git clone https://github.com/MaxBoog/DSP-GroupF1.git
```

## Step 2: Installing the GraphDB back end.

- Go to [graphdb.com](https://graphdb.ontotext.com/) and download Graphdb.
- Install GraphDB on your machine
- Run GraphDB and open the database server on [http://localhost:7200](localhost:7200)
- Click on Import in the menu on the Left
- Click Upload RDF files and upload the DataGem5(1).ttl file (found in the root of the project).
- Click import

The database is now ready for use.

## Step 3: Running the application

Install [NodeJS](https://nodejs.org/en) if not already installed and follow the below steps to run the application locally.

```bash
cd datagem

npm install

npm run dev

```
