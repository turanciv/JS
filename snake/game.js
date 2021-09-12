import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
	if (gameOver) {
		if (confirm('You lost. Press ok to restart.')) {
			window.location = '/'
		}
		return 
	}


	window.recuestAnimationFrame(main)
	const secondsSinceLestRender = (currentTime - lastRenderTime) / 1000
	if (secondsSinceLestRender < 1 / SNAKE_SPEED) return
	

	lastRenderTime = currentTime

	update()
	draw()
}

window.recuestAnimationFrame(main)

function update() {
updateSnake()
updateFood()
checkDeath()
}

function draw() {
	gameBoard.innerHTML = ''
	drawSnake(gameBoard)
	drawFood(gameBoard)
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}