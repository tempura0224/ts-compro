const solve = (input: Input) => {
	return input.nextInt();
};

import * as fs from "fs";

class Input {
	private words: string[];
	private idx: number;
	constructor(rawText: string) {
		this.idx = 0;
		this.words = rawText.split(/\s/);
	}
	nextWord = () => this.words[this.idx++];
	nextWords = (n: number) => {
		const ret = this.words.slice(this.idx, this.idx + n);
		this.idx += n;
		return ret;
	};
	nextInt = () => Number(this.words[this.idx++]);
	nextInts = (n: number) => {
		const ret = this.words.slice(this.idx, this.idx + n).map(Number);
		this.idx += n;
		return ret;
	};
	nextLong = () => BigInt(this.words[this.idx++]);
	nextLongs = (n: number) => {
		const ret = this.words.slice(this.idx, this.idx + n).map(BigInt);
		this.idx += n;
		return ret;
	};
}

const loop = (n: number, callback: (i: number) => void) => {
	for (let i = 0; i < n; i++) {
		callback(i);
	}
};

const fill = <T>(n: number, val: T) => Array.from({ length: n }, () => val);
const iota = (from: number, to: number) =>
	Array.from({ length: to - from }, (_, i) => i + from);
const fill2 = <T>(n: number, m: number, val: T) =>
	Array.from({ length: n }, () => Array.from({ length: m }, () => val));

const main = () => {
	const inputText = fs.readFileSync("/dev/stdin", "utf8");
	const input = new Input(inputText);
	const ans = solve(input);
	console.log(ans);
};

main();
