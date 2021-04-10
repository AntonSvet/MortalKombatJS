const $arenas = document.querySelector('.arenas'),
  $randomButton = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['katana'],
  atack: function () {
    console.log(`${name} Fight`)
  },
}

const player2 = {
  player: 2,
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['IceSword'],
  atack: function () {
    console.log(`${name} Fight`)
  },
}
function createElement(tag, className) {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className)
  }

  return $tag
}

function createaplayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player),
    $progressbar = createElement('div', 'progressbar'),
    $character = createElement('div', 'character'),
    $life = createElement('div', 'life'),
    $name = createElement('div', 'name'),
    $img = createElement('img')

  $img.src = playerObj.img
  $life.style.width = playerObj.hp + '%'
  $name.innerText = playerObj.name

  $player.appendChild($progressbar)
  $player.appendChild($character)
  $progressbar.appendChild($life)
  $progressbar.appendChild($name)
  $character.appendChild($img)

  return $player
}
function randomHP(num) {
  const random = Math.ceil(Math.random() * num)
  return random
}

function changeHP(player, count) {
  const $playerLife = document.querySelector(
    '.player' + player.player + ' .life'
  )

  player.hp -= count
  $playerLife.style.width = player.hp + '%'
  if (player.hp <= 0) {
    $randomButton.disabled = true
    $playerLife.style.width = 0
    player.hp = 0
    $arenas.appendChild(
      playerWin(player.name === player1.name ? player2.name : player1.name)
    )
  }
}

$randomButton.addEventListener('click', () => {
  changeHP(player1, randomHP(20))
  changeHP(player2, randomHP(20))
})

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle')
  $winTitle.innerText = name + ' Win'
  return $winTitle
}

$arenas.appendChild(createaplayer(player1))
$arenas.appendChild(createaplayer(player2))
