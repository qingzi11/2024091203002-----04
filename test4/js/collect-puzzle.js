
function collectPuzzle(...puzzles) {
    // TODO:在这里写入具体的实现逻辑
    // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回

    //console.log("aaaa")
    let result =[];
    result.push(puzzles);
    let result1 = result.flat();
    console.log(result1);
    let result2 = result1.flat();
    console.log(result2);
    let result3 = [...new Set(result2)];
    console.log(result3);
    return result3;

  }
  
  