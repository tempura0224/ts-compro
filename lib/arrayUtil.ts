declare global {
	interface Array<T> {
		/** f(a[i]) === true => f(a[i+1]) === true が成立するような f について
		 * f(a[i]) === true となる最小の index を返却する
		 * 1 つも存在しなければ arr.length を返却
		 */
		binarySearch(f: (val: T) => boolean): number;
	}
}
Array.prototype.binarySearch = function <T>(f: (val: T) => boolean) {
	const arr = this as T[];
	let l = -1,
		r = arr.length;
	while (r - l > 1) {
		const mid = (l + r) >> 1;
		if (f(arr[mid])) r = mid;
		else l = mid;
	}
	return r;
};

export const fill = <T>(n: number, val: T) =>
	Array.from({ length: n }, () => val);
export const fill2 = <T>(n: number, m: number, val: T) =>
	Array.from({ length: n }, () => Array.from({ length: m }, () => val));

export const iota = (from: number, to: number) =>
	Array.from({ length: to - from }, (_, i) => i + from);
