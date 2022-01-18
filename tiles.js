function fill(arr,r,c){
    // console.log(arr);
    let dp=[...Array(r)].map(e=>Array(c).fill(1));
    console.log(dp);
   dp[0][0]=arr[0][0];
    for(let p=1;p<c;p++){
        dp[0][p]=arr[0][p]+dp[0][p-1];
    }
    for(let p=1;p<r;p++){
        dp[p][0]=arr[p][0]+dp[p-1][0];
    }
    for(let i=1;i<r;i++){
        for(let j=1;j<c;j++){
            dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+arr[i][j];
          
        }
    }
    console.log(dp);
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line=1;
    for(let i=0;i<test;i++){
        let [r,c]=input[line++].trim().split(" ").map(Number);
        let arr=[];
        for(let j=0;j<r;j++){
            a=input[line++].trim().split(" ").map(Number);
            arr.push(a);
        }
        fill(arr,r,c);
    }
   
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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