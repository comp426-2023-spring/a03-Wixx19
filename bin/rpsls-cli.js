#!/usr/bin/env node

import minimist from 'minimist';
import { playRpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.h || args.help){
    help_message();
    process.exit(0);
}
if (args.r|| args.rules) {
    rules();
    process.exit(0);
}

const shot = args._[0]
try{
    //gameObject = playRpsls(shot)
    console.log(JSON.stringify(playRpsls(shot)));
} catch (e) {
    help_message();
    rules();
    process.exit(0);
}

function help_message() {
console.log(`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
}

function rules(){
console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`);
}