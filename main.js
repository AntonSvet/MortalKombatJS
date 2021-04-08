const player1 = {
  name: 'Liukang',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['katana'],
  atack: function () {
    console.log(`${name} Fight`)
  },
}

const player2 = {
  name: 'Subzero',
  hp: 70,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['IceSword'],
  atack: function () {
    console.log(`${name} Fight`)
  },
}

function createaplayer(player, { name, hp, img }) {
  const $arenas = document.querySelector('.arenas'),
    $player = document.createElement('div'),
    $progressbar = document.createElement('div'),
    $character = document.createElement('div'),
    $life = document.createElement('div'),
    $name = document.createElement('div'),
    $img = document.createElement('img')

  $player.classList.add(player)
  $progressbar.classList.add('progressbar')
  $character.classList.add('character')
  $life.classList.add('life')
  $name.classList.add('name')

  $img.src = img
  $life.style.width = `${hp}%`
  $name.innerText = name

  $arenas.appendChild($player)
  $player.appendChild($progressbar)
  $player.appendChild($character)
  $progressbar.appendChild($life)
  $progressbar.appendChild($name)
  $character.appendChild($img)
}

createaplayer('player1', player1)
createaplayer('player2', player2)
