# Take Home Exercise

A JavaScript function that accepts two parameters that are paths to 2 different text files, and outputs words interleaved from the two files.
  

## Prerequisites

1. [Node.js](https://nodejs.org) - version 16.13.0 or later
  
___
## Usage

To run, please execute the following command in your terminal:  
`node index.js`  

The following sample files are provided:  
`file_a.txt` and `file_b.txt`

The following output is expected given the 2 sample files:
`cat fox apple dog zebra orange pluto`
  
Line 24 in `index.js` can be edited to point to your txt files:  
combineFiles('`file_a.txt`', '`file_b.txt`').then((res) => {

___
## Assumptions

The following assumptions were made during the development of this exercise:
1. There will only be 2 files to combine.
2. The 2 files that are passed in the parameters point to existing and valid text files.
3. The text files will contain words that are separated by a single space or new line.