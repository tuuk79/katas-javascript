function Thing(name) {
	this.name = name
}

const thingster = new Thing("toad")

Thing.prototype = thingster
console.log(Thing.prototype.name)
