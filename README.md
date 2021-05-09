# Caesar cipher cli tool

### Description:
Console utility for Caesar encryption / decryption.
(encrypts only Latin letters, regardless of case)

## Getting Started

### Installation:
#### Run `npm install` to install dependencies

### Instructions:

Implement CLI tool that will encode and decode a text by Caesar cipher.

#### To run the tool use:
   `node index.js -s 1 -a encode` 
   `node index.js -s 1 -a decode`

#### To exit the tool use:
`CTRL+C` 

#### Examples:
`node index.js -s 1 -i ./input.txt -o ./output.txt --action encode`
`node index.js -s 1 -o ./output.txt --action encode`
`node index.js -s 1 -a encode`

CLI tool should accept 4 options (short alias and full name):
1.  `-s`, `--shift`: **required numerical value** of the shift (can be negative)
2.  `-i`, `--input`: an input file
3.  `-o`, `--output`: an output file
4.  `-a`, `--action`: **required** `encode`/`decode` action

