/* eslint-disable no-console*/
import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import chalk from 'chalk'
import  fs  from "fs";

let generate = jsf.generate()
let extend = jsf.extend()

extend("faker", ()=> require("faker"))
const json = JSON.stringify(generate(schema))

fs.writeFile("./src/api/db.json", json, function(err){
  if(err){
    return console.log(chalk.red(err))
  }else{
    console.log(chalk.green("Mock data generated"))
  }
})
