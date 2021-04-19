export class SegmentTree<T> {
	private n: number;
	private node: T[];
	constructor(a: T[] | number, private e: T, private op: (l: T, r: T) => T) {
		this.n = 1;
		if (typeof a === "number") {
			while (this.n <= a) this.n <<= 1;
			this.node = Array(this.n).fill(this.e);
		} else {
			while (this.n <= a.length) this.n <<= 1;
			this.node = Array(this.n).fill(this.e);
			a.forEach((v, idx) => (this.node[this.n + idx] = v));
			for (let i = this.n - 1; i >= 1; i--) {
				this.node[i] = this.op(
					this.node[i << 1],
					this.node[(i << 1) | 1]
				);
			}
		}
	}

	get = (k: number): T => this.node[k + this.n];

	update = (k: number, x: T): void => {
		k += this.n;
		this.node[k] = x;
		while (k > 1) {
			k >>= 1;
			this.node[k] = this.op(this.node[k << 1], this.node[(k << 1) | 1]);
		}
	};

	query = (l: number, r: number): T => {
		let vl = this.e,
			vr = this.e;
		l += this.n;
		r += this.n;
		while (l < r) {
			if (l & 1) vl = this.op(vl, this.node[l++]);
			if (r & 1) vr = this.op(this.node[--r], vr);
			l >>= 1;
			r >>= 1;
		}
		return this.op(vl, vr);
	};
}
