const STR = "hello world";

function startsWith(mainStr, searchStr, count) {
  let lengthStr = searchStr.length;
  let resultStr = mainStr.slice(count, lengthStr);

  if (
    searchStr.length === "" ||
    typeof mainStr !== "string" ||
    typeof searchStr !== "string"
  ) {
    throw new Error("Data is not correct!");
  }

  if (resultStr !== searchStr) {
    return false;
  } else {
    return true;
  }
}

console.log(startsWith(STR, "hello", 0));



