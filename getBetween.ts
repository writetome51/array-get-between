import { getAdjacentAt } from '@writetome51/array-get-adjacent-at/getAdjacentAt';
import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';


export function getBetween(numItemsToIgnoreAtEachEnd, array): any[] {
	errorIfNotInteger(numItemsToIgnoreAtEachEnd);
	if (numItemsToIgnoreAtEachEnd < 1) throw new Error('The number of items to' +
		' preserve at each end must be at least 1');
	if ((numItemsToIgnoreAtEachEnd * 2) >= array.length) {
		throw new Error('The number of items to preserve multiplied by 2' +
			' is equal to or exceeds the length of the array. This is not allowed.');
	}
	let numToGet = array.length - (numItemsToIgnoreAtEachEnd * 2);
	return getAdjacentAt(numItemsToIgnoreAtEachEnd, numToGet, array);
}
