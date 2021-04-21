export class UnionFind {
	private par: number[];

	constructor(n: number) {
		this.par = Array(n).fill(-1);
	}

	find = (x: number): number => {
		if (this.par[x] < 0) {
			return x;
		} else {
			return (this.par[x] = this.find(this.par[x]));
		}
	};

	unite = (x: number, y: number): boolean => {
		x = this.find(x);
		y = this.find(y);
		if (x == y) return false;
		if (this.par[x] > this.par[y]) {
			this.par[y] += this.par[x];
			this.par[x] = y;
		} else {
			this.par[x] += this.par[y];
			this.par[y] = x;
		}
		return true;
	};

	same = (x: number, y: number): boolean => this.find(x) === this.find(y);

	size = (x: number): number => -this.par[this.find(x)];
}
