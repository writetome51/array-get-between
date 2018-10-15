import { getAdjacentAt } from './getAdjacentAt';
import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';


export function getBetween(numItemsToKeepAtEachEnd, array): any[] {
	errorIfNotInteger(numItemsToKeepAtEachEnd);
	if (numItemsToKeepAtEachEnd < 1) throw new Error('The number of items to' +
		' preserve at each end must be at least 1');
	if ((numItemsToKeepAtEachEnd * 2) > array.length) {
		throw new Error('The number of items to preserve multiplied by 2' +
			' exceeds the length of the array. This is not allowed.');
	}
	let numToGet = array.length - (numItemsToKeepAtEachEnd * 2);
	return getAdjacentAt(numItemsToKeepAtEachEnd, numToGet, array);
}
