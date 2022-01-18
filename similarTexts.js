function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let s1 = input[0].trim();
  let s2 = input[1].trim();
  let n = s1.length;
  let m = s2.length;
  let dp = [...Array(n + 1)].map((e) => Array(m + 1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
//   console.log(dp);
  console.log(dp[n][m]);
}
if (process.env.USERNAME === "PUMMY SHARMA") {
  runProgram(`AEDFHR
    ABCDGH`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
