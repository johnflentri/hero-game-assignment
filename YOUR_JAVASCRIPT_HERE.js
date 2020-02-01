const hero = { name: 'Shrek', heroic: true, inventory: [], health: 10, weapon: { type: 'club', damage: 2 } };
const villain = { name: 'Lord Farquaad', heroic: false, inventory: [], health: 2, weapon: { type: 'fist', damage: 1 } };


function rest(person) {
  if (person.health === 10) {
    return alert('Health already at maximum!')
  } else {
    person.health = 10
    displayStats()
    return person
  }
}

const weapon = { type: 'dagger', damage: 2 }

function pickUpItem(person, weapon) {
  person.inventory.push(weapon)
  displayStats()
  return person
}

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    return null
  } else {
    person.weapon = person.inventory[0]
    displayStats()
    return person
  }
}

function bag(person) {
  equipWeapon(person)
  displayStats()
  return person
}

function changeName() {
  hero.name = prompt("Enter your hero name!")
  displayStats()
}

function displayStats() {
  const dataSection = document.getElementById("heroData")
  const statsPara = document.getElementById('statsPara')
  statsPara.innerHTML = (`Your hero is called ${hero.name}. He/She has ${hero.health} health and has a ${hero.weapon.type} that deals ${hero.weapon.damage} damage.`)
  dataSection.appendChild(statsPara)
}

// const randomNumber = Math.floor(Math.random() * 2) + 1

function fightEnemy() {
  villain.health -= hero.weapon.damage
  hero.health -= villain.weapon.damage
  removeElement()
  displayStats()
}

function removeElement() {
  const enemyFarquaad = document.getElementById("enemyFarquaad")
  enemyFarquaad.parentNode.removeChild(enemyFarquaad)
}

displayStats();


