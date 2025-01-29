import React from "react";

export default function TileGame() {
  
  let plateArray = [];
  let grid = {x: 1, y: 1}
  let playerPos = randomPos();
  let goalPos = randomPos();
  let score = 0
  let highScore = localStorage.getItem('highscore') | 0;

  function randomPos() {
    let x = Math.ceil(Math.random() * 12);
    let y = Math.ceil(Math.random() * 12);
    return {x, y}
  }

  function setValues() {
    grid.x = 1;
    grid.y = 1;
    playerPos = randomPos();
    goalPos = randomPos();
    plateArray = [];

    for (let i = 0; i < 144; i++) {
      const ranNum = (Math.random().toFixed(2)) * 100;
      let isGrey = false;
      if (ranNum <= 20) {
        if (grid.x === playerPos.x && grid.y === playerPos.y) {
          isGrey = false;
        } else if (grid.x === goalPos.x && grid.y === goalPos.y) {
          isGrey = false;
        } else {
          isGrey = true;
        }  
      }
      if (grid.x < 12) {
        plateArray.push({grey: isGrey, x: grid.x, y: grid.y})
        grid.x++;
      } else if (grid.x === 12) {
        plateArray.push({grey: isGrey, x: grid.x, y: grid.y})
        grid.x = 1;
        grid.y++;
      }
    }
  }

  let keyCount = 0

  function plateCreator(icon) {
    if (icon === 'floor' || icon === 'wall') {
      if (score < 5) {
        return <div key={keyCount++} className={`plate ${icon}-one`}></div>
      } else if (score >= 5 && score < 10) {
        return <div key={keyCount++}  className={`plate ${icon}-two`}></div>
      } else if (score >= 10 && score < 15) {
        return <div key={keyCount++}  className={`plate ${icon}-three`}></div>
      } else if (score >= 15 && score < 20) {
        return <div key={keyCount++}  className={`plate ${icon}-four`}></div>
      } else {
        return <div key={keyCount++}  className={`plate ${icon}-five`}></div>
      }
    } else {
      return <div key={keyCount++}  className={`plate ${icon}`}></div>
    }
    
  }

  const selectElement = document.querySelector('.js-colour-select') || 'Blue';

  const [gameElementHTML, setGameElementHTML] = React.useState(<p>test</p>);

  // let gameElementHTML = <p>test</p>
  function renderGrid() {
    setGameElementHTML(plateArray.map((plate) => {
      if (plate.grey) {
        return plateCreator('wall')
      } else if (plate.x === playerPos.x && plate.y === playerPos.y) {
        return (plateCreator(`player-icon player-icon-${selectElement.value}`))
      } else if (plate.x === goalPos.x && plate.y === goalPos.y) {
        return (plateCreator('key'))
      } else {
        return (plateCreator('floor'))
      }
    }))
    renderScores()
    generateEndMessage()
    if (playerPos.x === goalPos.x && playerPos.y === goalPos.y) {
      score++;
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('highscore', highScore)
      }
      setValues()
      renderGrid()
    }
  }

  React.useEffect(() => {
    setValues();
    renderGrid();
  },[])

  /* *********************************************************** */
  
  const [gameActive, setGameActive] = React.useState(false)

  function handleClick() {
    document.activeElement.blur();
    setGameActive(prev => !prev)
  }

  const [firstRender, setFirstRender] = React.useState(true)

  function addKeydown(input) {
    if (gameActive) {
      movePos(input.key);
      if (input.key === 'Enter') {
        setValues();
        renderGrid();
      }
    }
  }

  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      playGame()
    }
    document.addEventListener('keydown', addKeydown)
    return () => {
      document.removeEventListener('keydown', addKeydown)
    }
  },[gameActive])

  let timer = 300
  const tipElement = document.querySelector('.js-tip');
  const gameButtonElement = document.querySelector('.js-start-game-button');
  const endMessageElement = document.querySelector('.js-end-message')

  function playGame() {
    setRunInterval(prev => !prev)
    if (gameActive) {
      gameButtonElement.innerHTML = 'Stop'
      tipElement.classList.remove('hidden');
      setValues();
      renderGrid();
      endMessageElement.classList.add('hidden')
    } else {
      tipElement.classList.add('hidden');
      setGameActive(false)
      timer = 300;
      gameButtonElement.innerHTML = 'Start'
      endMessageElement.classList.remove('hidden')
    }
  }

  const intervalRef = React.useRef(null)
  const [runInterval, setRunInterval] = React.useState(false)
  const playGameRef = React.useRef(true)

  React.useEffect(() => {
    if (playGameRef.current) {
      playGameRef.current = false
    } else {
      if (runInterval) {
        intervalRef.current = setInterval(() => {
          if (timer > 0) {
            timer--;
            const timerElement = document.querySelector('.js-timer');
            timerElement.innerHTML = `${(timer / 10).toFixed(1)}`
          } else {
            tipElement.classList.add('hidden');
            setGameActive(false)
            clearInterval(intervalRef.current)
            timer = 300;
            gameButtonElement.innerHTML = 'Start'
          }
        }, 100)
      }
      return () => {
        clearInterval(intervalRef.current)
      }
    }
  },[runInterval])

  /* *********************************************************** */

  function resetHighScore() {
    highScore = 0;
    localStorage.setItem('highscore', highScore)
    renderScores()
  }

  const [count, setCount] = React.useState(0)

  function movePos(direction) { 
    if (playerPos.x > 1 && direction === 'ArrowLeft') {
      if (checkPos(direction)) { 
        setCount(prev => prev + 1)
        playerPos.x --;
        renderGrid()
      }
    } else if (playerPos.x < 12 && direction === 'ArrowRight') {
      if (checkPos(direction)) {
        setCount(prev => prev + 1)
        playerPos.x ++;
        renderGrid()
      }
    } else if (playerPos.y > 1 && direction === 'ArrowUp') {
      if (checkPos('ArrowUp')) {
        setCount(prev => prev + 1)
        playerPos.y--
        renderGrid()
      }
    } else if (playerPos.y < 12 && direction === 'ArrowDown') {
      if (checkPos('ArrowDown')) {
        setCount(prev => prev + 1)
        playerPos.y++
        renderGrid()
      }
    }
  }

  window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false); 

  function checkPos(move) {
    let result = true;
    plateArray.forEach((plate) => {
      if (move === 'ArrowLeft' && plate.x === playerPos.x - 1 && plate.y === playerPos.y) {
        if (plate.grey) result = false
      } else if (move === 'ArrowRight' && plate.x === playerPos.x + 1 && plate.y === playerPos.y) {
        if (plate.grey) result = false
      } else if (move === 'ArrowUp' && plate.x === playerPos.x && plate.y === playerPos.y - 1) {
        if (plate.grey) result = false
      } else if (move === 'ArrowDown' && plate.x === playerPos.x && plate.y === playerPos.y + 1) {
        if (plate.grey) result = false
      }
    })
    return result
  }

  const [scoreElement, setScoreElement] = React.useState(<p className="js-score score">1</p>)

  const [highScoreElement, setHighScoreElement] = React.useState(<p className="js-high-score high-score">0</p>)

  function renderScores() {
    setScoreElement(<p className="js-score score">{`Score: ${score}`}</p>);
    setHighScoreElement(<p className="js-high-score high-score">{`High Score: ${highScore}`}</p>)
  }

  const [endMessageHTML, setEndMessageHTML] = React.useState(<p>test</p>)

  function generateEndMessage() {
    let endMessage = '';
    if (score === highScore) {
      endMessage = 'Well done, that\'s an impressive score!'
    } else if (highScore - score < 1) {
      endMessage = 'So close! You almost made it!'
    } else if (highScore - score >= 3) {
      endMessage = 'Better luck next time!'
    }
    setEndMessageHTML(
      <>
        <h2>Game over!</h2>
        <p className="end-message-message">{endMessage}</p>
        <p
          className="end-message-score"
        >Your score: {score}</p>
        <p
          className="end-message-score"
        >High score: {highScore}</p>
        <button
          className="tg-button"
          onClick={closeEndMessage}
        >Close</button>
      </>
    )
  }

  function closeEndMessage() {
    endMessageElement.classList.add('hidden')
    // score = 0
  }
  
  return (
    <div className='tilegame'>
      <div className="grid">
        <div className="js-game game">
          {gameElementHTML}
        </div>
        <div className="control-panel">
          <button className="tg-button reset-score-button" onClick={resetHighScore}>Reset Highscore</button>
          <select className="colour-select js-colour-select" name="colour" id="colour-select">
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            {highScore >= 10
              ? <option value="teal">Teal</option>
              : <option disabled value="teal">Teal (required score: 10)</option>}
            {highScore >= 15
              ? <option value="orange">Orange</option>
              : <option disabled value="orange">Orange (required score: 15)</option>}
            {highScore >= 20
              ? <option value="purple">Purple</option>
              : <option disabled value="purple">Purple (required score: 20)</option>}
            
          </select>
          {scoreElement}
          {highScoreElement}
          <p className="js-tip tip hidden">Reset the board at any time by hitting the 'Enter' key!</p>
          <p className="js-timer timer">30.0</p>
          <button className="tg-button js-start-game-button start-game-button" onClick={handleClick}>Start</button>
        </div>
      </div>
      <div className="js-end-message end-message hidden">
        {endMessageHTML}
      </div>
    </div>
  )
}