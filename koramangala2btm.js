let sum=0;
function ways(arr,n,cur){

    for(let i=cur;i<n;i++){
        sum+=Math.min(arr[i])
    }
}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   
   let n=+input[0];
   let arr=input[1].trim().split(" ").map(Number);

   ways(arr,n,0)
   
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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
      process.exit(0) ;
    });
  }