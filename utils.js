function randomDamage(nam) {
    const damage = Math.ceil(Math.random() * nam);
    // console.log(damage);
    return damage;
};

export default randomDamage;