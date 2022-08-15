const isWithinBoard = (pos) => {
    return pos[0] >= 1 && pos[0] <= 8 && pos[1] >= 1 && pos[1] <= 8;
  };
  const isPosEqual = (a, b) => {
      return (a[0] == b[0] && a[1] == b[1]);
  }
  const posToString = (pos) => {
      return `[${pos[0]},${pos[1]}]`;
  }
  const getAdjacentMoves = (node) => adjacencyList.get(`${node.pos[0]},${node.pos[1]}`);
  
  // BACKTRACK AND GET THE PATH THAT WAS TAKEN TO REACH THE SHORTEST PATH
  const getPath = (mappedMoves, start, end) => {
      const path = [posToString(end)];
      const startToString = posToString(start);
      let endToString = posToString(end);
  
      while (endToString !== startToString)
      {
          const predecessor = mappedMoves.get(endToString);
          path.unshift(predecessor);
          endToString = predecessor;
      }
      return path;
  }
  
  // CREATE ADJACENCY LIST FOR THE POSSIBLE MOVES AT EACH POSITION
  const adjacencyList = new Map();
  for (let x = 1; x <= 8; ++x)
  {
      for (let y = 1; y <= 8; ++y)
      {
          let possibleMoves = [
              [x+2,y+1],[x+2,y-1],
              [x-2,y+1],[x-2,y-1],
              [x+1,y+2],[x-1,y+2],
              [x+1,y-2],[x-1,y-2]
          ];
          possibleMoves = possibleMoves.filter(move => {
              return isWithinBoard(move);
          });
          adjacencyList.set(`${x},${y}`, possibleMoves);
      }
  }
  
  const knightMoves = (startPos, endPos) => {
      if (!isWithinBoard(startPos) || !isWithinBoard(endPos))
      {
          throw new Error("One of argument passed is outside board. Must be >= 1 && <= 8");
      }
      const queue = [{
          pos: startPos,
          steps: 0
      }];
      const previous = new Map();
      const visited = new Set();
      visited.add(posToString(startPos));
  
      while (queue.length > 0)
      {
          const node = queue.shift();
          if (isPosEqual(node.pos, endPos))
          {
              const path = getPath(previous, startPos, endPos);
              const result = `You made it in ${node.steps} moves! Here's your path:
                              ${path}`;
              return result;
          }
  
          const possibleMoves = getAdjacentMoves(node);
          for (const move of possibleMoves)
          {
              if (!visited.has(posToString(move)))
              {
                  queue.push({
                      pos: move,
                      steps: node.steps + 1
                  });
                  previous.set(posToString(move), posToString(node.pos));
                  visited.add(posToString(node.pos));
              }
          }
      }
  }
  
//Inside the board
const data1 = knightMoves([3,3],[4,8]);
console.log(data1);
const data2 = knightMoves([7,2],[4,3]);
console.log(data2);
const data3 = knightMoves([6,7],[3,3]);
console.log(data3);

//outside the board
const data4 = knightMoves([0,1],[3,3]); 
console.log(data4);