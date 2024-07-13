const fs = require("fs");

const text = async () => {
  const flagOptions = ["c", "l", "w", "m"];

  const flag = process.argv[2];
  const filePath = process.argv[3];

  if (!flag) {
    console.log("Flag was not provided");
    return;
  }

  if (flag && !flagOptions.includes(flag.slice(1))) {
    console.log("Flag value is incorrect");
    return;
  }

  if (!process.argv[3]) {
    console.log("File path was not provided");
    return;
  }

  const dirent = new fs.Dirent();

  console.log(
    dirent.isFile(
      "./text.txt"
    )
  );
  if (!dirent.isFile(__dirname + "/" + filePath)) {
    console.log("File path not valid");
    return;
  }

  switch ("value") {
    case "value":
      break;

    default:
      break;
  }

  try {
    const res = await fs.readFile("./text.txt", "utf-8");

    const words = res.split(/\s+/).filter((word: string) => word.length);

    console.log(words.length);
    return res;
  } catch (error) {}
};

// console.log(text());
text();
