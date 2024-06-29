import type { Item } from "$lib/types";

class StreamerState {
	streamers: Item[] = $state([])

	constructor () { }

	addStreamer(item: Item) { 
		let found = this.streamers.find(el => el.value === item.value);
		if (!found)
			this.streamers.push(item); 
	}
	removeStreamer(item: Item) {
		this.streamers = this.streamers.filter(el => el.value !== item.value);
	}
}

export const streamerState = new StreamerState();
