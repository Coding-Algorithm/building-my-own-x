# `wc` Tool - Word Count Utility

A Node.js command-line utility that replicates the basic functionality of the Unix `wc` (word count) command. This tool can count the number of bytes, words, characters, and lines in a text file or input provided via the terminal.

## Features

- Count bytes (`-c` flag)
- Count words (`-w` flag)
- Count characters (`-m` flag)
- Count lines (`-l` flag)
- Works with both file input and standard input

## Installation

To use this tool, you need to have Node.js installed. Download or clone the repository and then navigate to the project directory.

```bash
git clone <repository_url>
cd <repository_directory>
```

## Usage
Running the Tool
The basic syntax for running the `wc` tool is as follows:

## bash
```node wc.js [flag] [filePath]```

### Flags
`-c:` Count bytes in the file.
`-w:` Count words in the file.
`-m:` Count characters in the file.
`-l:` Count lines in the file.
If no flag is provided, the tool will display bytes, words, and lines in the file.

### Examples
#### Count Bytes:

``node wc.js -c sample.txt``
<br>
Output: 1234 (number of bytes)

#### Count Words:
``node wc.js -w sample.txt``
<br>
Output: 250 (number of words)

#### Count Characters:
``node wc.js -m sample.txt``
<br>
Output: 1234 (number of characters)

#### Count Lines:
``node wc.js -l sample.txt``
<br>
Output: 50 (number of lines)


#### No Flag Provided:
``node wc.js sample.txt``
<br>
Output: 1234 250 50 sample.txt (bytes, words, lines, filename)

#### Using Standard Input:

``node wc.js -w``
After running this command, you can start typing or pasting text. The word count will be displayed once you end the input (e.g., by pressing Ctrl+D).

## Error Handling
If an unrecognized flag is provided, the tool will display:

`Flag is not recognized`
<br>
If the file path is invalid or not provided, the tool will display:

File provided is not valid
If there is an error reading the file, the error message will be displayed.


### Dependencies
fs: For file system operations.
readline: For reading input from the terminal.

### License
This project is licensed under the MIT License - see the LICENSE file for details.


