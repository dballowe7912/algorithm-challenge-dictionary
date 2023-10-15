class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total + WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return index;
	}

	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1]
				}
			}
		}
		return undefined;
	}
}

const table = new HashTable();

// HashTable { keyMap: [ <53 empty items> ] }
table.set("Donald", "Ballowe");
table.set("Lachel", "Ballowe");
table.set("Pamela", "Jo");
table.set("John", "Gregg");
console.log(table.get("Donald"));
// console.log(table)
