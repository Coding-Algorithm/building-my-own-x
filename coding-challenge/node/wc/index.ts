#!/usr/bin/env node


const fs = require("fs");
const readLine = require("node:readline");

const text = async () => {
  const flagOptions = ["-c", "-l", "-w", "-m"];

  const flag = process.argv[2].includes("-") ? process.argv[2] : null;
  const filePath = !process.argv[2].includes("-")
    ? process.argv[2]
    : process.argv[3];

  if (flag && !flagOptions.includes(flag)) {
    console.log("Flag is not recognized");
    return;
  }

  let fileString: string = "";
  const isFile = fs.statSync(filePath ?? "").isFile();

  if (!isFile) {
    const fromTerminal = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    fromTerminal.on("line", (line: string) => {
      console.log(line, " .. ");
      fileString += line;
    });

    if (!fileString) {
      console.log("File provided is not valid");
      return;
    }
  } else {
    try {
      fileString = await fs.readFileSync(filePath, "utf-8");
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  }

  const getFileLines = (file: any) => {
    return new Promise((resolve, reject) => {
      let lineCount = 0;
      const fileStream = fs.createReadStream(file);

      fileStream.on("data", (chunk: Buffer) => {
        for (let i = 0; i < chunk.length; ++i) {
          if (chunk[i] === 10) {
            lineCount++;
          }
        }
      });

      fileStream.on("end", () => {
        resolve(lineCount);
      });

      fileStream.on("error", (error: any) => {
        reject(error);
      });
    });
  };

  const getByte = (fileString: any) => {
    return Buffer.byteLength(fileString, "utf-8");
  };

  const getWords = (fileString: any) => {
    return fileString.split(/\s+/).filter((word: string) => word.length).length;
  };

  const getCharacters = (fileString: string) => {
    return fileString.length;
  };

  switch (flag) {
    case "-c":
      console.log(getByte(fileString));
      break;

    case "-w":
      console.log(getWords(fileString));
      break;

    case "-m":
      console.log(getCharacters(fileString));
      break;

    case "-l":
      getFileLines(filePath);
      break;

    case null:
      getFileLines(filePath).then((res) =>
        console.log(getByte(fileString), getWords(fileString), res, filePath)
      );
      break;

    default:
      break;
  }
};

text();
