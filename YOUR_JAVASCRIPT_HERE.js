const hero = { name: 'Shrek', heroic: true, inventory: [], health: 10, weapon: { type: 'club', damage: 2 } };
const villain1 = { name: 'Prince Charming', heroic: false, inventory: [], health: 2, weapon: { type: 'Sword', damage: 5 } };
const villain2 = { name: 'Lord Farquaad', heroic: false, inventory: [], health: 2, weapon: { type: 'fist', damage: 5 } };



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
const weapon2 = { type: 'club', damage: 2 }

function pickUpItem(person, weapon) {
  person.inventory.push(weapon)
  // const removeDagger = document.getElementById("dagger")
  // removeDagger.parentNode.removeChild(removeDagger)
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
  statsPara.innerHTML = (`Your hero is called ${hero.name}. He has ${hero.health} health is currently equipped with a ${hero.weapon.type} that deals ${hero.weapon.damage} damage.`)
  dataSection.appendChild(statsPara)
}

function fightEnemy(enemy) {
  if (hero.health <= enemy.weapon.damage) {
    alert(`${hero.name} is too weak to fight this enemy, perhaps we should rest.`)
  } else {
    enemy.health -= hero.weapon.damage
    hero.health -= enemy.weapon.damage
    displayStats()
    if (enemy === villain1 && hero.weapon !== weapon) {
      alert(`Ouch! ${enemy.name} has inflicted ${enemy.weapon.damage} points of damage to ${hero.name}. Fortunately we have defeated him!`)
      removeElement1()
    } else if (enemy === villain1 && hero.weapon === weapon) {
      return alert(`Ouch! ${enemy.name} has inflicted ${enemy.weapon.damage} points of damage to ${hero.name}. Unfortunately our ${weapon.type} was no match for his sword.`)
    } else if (enemy === villain2 && hero.weapon !== weapon) {
      alert(`Oh no! ${enemy.name} was able to duck under the swing of our club and kicked ${hero.name} in the shin, dealing ${enemy.weapon.damage} damage.`)
    } else if (enemy === villain2 && hero.weapon === weapon) {
      alert(`Hooray! ${hero.name} managed to defeat ${enemy.name} by stabbing him right in the eye. ${hero.name} will live happily ever after. Congratulations!`)
      removeElement2()
    }
  }
}

function removeElement1() {
  const enemyToBeRemoved = document.getElementById('villain1')
  enemyToBeRemoved.parentNode.removeChild(enemyToBeRemoved)
}

function removeElement2() {
  const enemyToBeRemoved = document.getElementById('villain2')
  const enemyTerritory = document.getElementById("enemyTerritory")
  const img = document.createElement('img')
  img.src = "images/shrekHappy.png"
  img.className = "img"
  enemyToBeRemoved.parentNode.removeChild(enemyToBeRemoved)
  enemyTerritory.appendChild(img)
  document.body.appendChild(enemyTerritory)
}

function howToWin() {
  document.getElementById("howToWin").innerHTML = `Defeat Prince Charming first with your club, then equip the dagger to finish off Farquaad!`
}

displayStats();