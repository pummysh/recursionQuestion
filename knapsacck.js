function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for (let i = 0; i < test; i++) {
    let w = [];
    let v = [];
    let [c, n] = input[line++].trim().split(" ").map(Number);
    for (let j = 0; j < n; j++) {
      let [a, b] = input[line++].trim().split(" ").map(Number);
      w.push(a);
      v.push(b);
    }

    var t = [...Array(n + 1)].map((e) => Array(c + 1).fill(0));

    cal(w, v, c, n);
    console.log(t[n][c]);
  }

  function cal(w, v, c, n) {
    for (let i = 0; i < n+1; i++){
        for(let j = 0; j < c+1; j++){
            if(i==0 || j===0){
                t[i][j] =0;
            }else if(w[i-1]<=j){
                t[i][j]=Math.max(v[i-1]+t[i-1][j-w[i-1]],t[i-1][j])
                
            }
            else if(w[i-1]>j){
               t[i][j]=t[i-1][j];
            }
        }
    }
    console.log(t);
  }
}

if (process.env.USERNAME === "PUMMY SHARMA") {
  runProgram(`1
  4 5
  1 8
  2 4
  3 0
  2 5
  2 3`);
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
