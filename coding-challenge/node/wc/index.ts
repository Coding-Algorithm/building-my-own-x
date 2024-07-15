const fs = require("fs");

const text = async () => {
  const flagOptions = ["-c", "-l", "-w", "-m"];

  const flag = process.argv[2];
  const filePath = process.argv[3];

  if (!flag) {
    console.log("Flag was not provided");
    return;
  }

  if (flag && !flagOptions.includes(flag)) {
    console.log("Flag is not recognized");
    return;
  }

  if (!process.argv[3]) {
    console.log("File path was not provided");
    return;
  }

  try {
    const isFile = fs.statSync(filePath).isFile();

    console.log("isFile", isFile);
  } catch (error: any) {
    console.log(error.message);
    return;
  }

  switch (flag) {
    case "-c":
      try {
        const res = await fs.readFileSync("./text.txt", "utf-8");

        const words = res.split(/\s+/).filter((word: string) => word.length);

        console.log(words.length);
      } catch (error: any) {
        console.log(error.message);
      }
      break;
    case "-l":
      break;

    default:
      break;
  }
};


text();
