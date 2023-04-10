#!/usr/bin/env node

import minimist from 'minimist';
import { playRps } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.help_message || args.h){
    help_message();
    process.exit(0);
}
if (args.rules || args.s) {
    rules();
    process.exit(0);
}

const shot = args._[0]
try{
    //gameObject = playRps(shot)
    console.log(JSON.stringify(playRps(shot)));
} catch (e) {
    help_message();
    rules();
    process.exit(0);
}

// for help
function help_message() {
console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);


}

function rules(){
console.log(`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`);
}
