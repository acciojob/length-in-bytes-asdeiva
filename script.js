const byteSize = (str) => {
	// Convert the string to a UTF-8 encoded byte array
  const byteArray = new TextEncoder().encode(str);

  // Return the length of the byte array
  return byteArray.length;
  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
