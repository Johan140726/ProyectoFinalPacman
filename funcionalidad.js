document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid');
  const cells =Array.from(grid.querySelectorAll('div'));
  const width =10;
  let pacmanIndex = 13;

  class Ghost {
  constructor(name, startIndex, className, speed=500){
    this.name = name;
    this.currentIndex = startIndex;
    this.className = className;
    this.speed =speed;
    this.timerId = null;
    this.directions = [-1, 1, -width, width]
  }
  
  draw() {
    cells[this.currentIndex].classList.add('ghost', this.className);
  }

  erase() {
    cells[this.currentIndex].classList.remove('ghost', this.className);
  } 


  move() {
            this.timerId = setInterval(() => {
                const direction = this.directions[Math.floor(Math.random() * this.directions.length)];
                const nextIndex = this.currentIndex + direction;
 
                // no moverse si hay pared o fuera de límites
                if (
                    nextIndex < 0 ||
                    nextIndex >= cells.length ||
                    cells[nextIndex].classList.contains('wall')
                ) return;
 
                this.erase();
                this.currentIndex = nextIndex;
                this.draw();
            }, this.speed);
        }
 

 
}

const blinky = new Ghost('blinky', 11, 'red', 2000);
const pinky = new Ghost('pinky', 14, 'pink', 600);
const ghosts = [blinky, pinky];

  ghosts.forEach(ghost => {
      ghost.draw();
      ghost.move();
    // Asegúrate de tener la función `move()` implementada
  });

 /* function drawPacman(){
    cells.forEach(cell => cell.classList.remove('pacman'));
    cells[pacmanIndex].classList.add('pacman');
  }
  drawPacman();*/
});
 