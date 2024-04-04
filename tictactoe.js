const boxs = document.querySelectorAll('.box');
let currentPlayer = 'O';
let gameEnded = false;
boxs.forEach(box => 
    {
  box.addEventListener('click', () => 
  {
    if (!gameEnded && !box.textContent) 
    {
      box.textContent = currentPlayer;
      if (checkWin()) 
      {
        alert(`" ${currentPlayer} "   WIN THE MATCH`);
        gameEnded = true;
      } else if (checkDraw()) 
      {
        alert("IT IS A DRAW");
        gameEnded = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});
function checkWin() 
{
    const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
    ];
    return winConditions.some(condition => 
    {
        const [a, b, c] = condition;
        return boxs[a].textContent && boxs[a].textContent === boxs[b].textContent && boxs[a].textContent === boxs[c].textContent;
  });
}
function checkDraw()
{
  return [...boxs].every(box => box.textContent);
}
function restartGame() 
{
  boxs.forEach(box => 
    {
        box.textContent = '';
     });
  currentPlayer = 'X';
  gameEnded = false;
}