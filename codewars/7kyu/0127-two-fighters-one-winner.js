// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

// Two fighters, one winner.

// Description:

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// PREP

// parameters -
// fighter1: new Fighter object;
// fighter2: new Fighter object;
// firstAttacker: value of "this.name" key of Fighter object that attacks first;
// return - value of "this.name" key of Fighter object that wins fight
// examples -
// (Fighter ("Kyle", 10, 4), Fighter ("Ryan", 12, 4), "Ryan") => "Ryan"
// (Fighter ("Kyle", 10, 4), Fighter ("Ryan", 12, 4), "Kyle") => "Kyle"
// psuedocode -
// while health > 0:
// attack
// swap
// return fighter whose health > 0

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;

    let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

    function attack() {
        defender.health -= attacker.damagePerAttack;
    }

    function swap() {
        attacker = attacker.name === fighter1.name ? fighter2 : fighter1;
        defender = defender.name === fighter1.name ? fighter2 : fighter1;
    }

    function stillFighting() {
        return fighter1.health > 0 && fighter2.health > 0;
    }

    function getWinner() {
        return fighter1.health > 0 ? fighter1.name : fighter2.name;
    }

    while (stillFighting()) {
        attack();
        swap();
    }

    return getWinner();
}

// 2022-07-27
