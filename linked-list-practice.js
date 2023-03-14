const myLinkedList = {
	head: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: null
			}
		}
	}
}

console.log(myLinkedList.head.next.next.next)
