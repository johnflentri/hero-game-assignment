const hero = { name: 'Shrek', heroic: true, inventory: [], health: 10, weapon: { type: 'Club', damage: 2 } };

function rest(person) {
  if (person.health === 10) {
    return alert('Health already at maximum!')
  } else {
    person.health = 10
    return person
  }
}

const weapon = { type: 'dagger', damage: 2 }

function pickUpItem(person, weapon) {
  person.inventory.push(weapon)
  return person
}

function equipWeapon() { }