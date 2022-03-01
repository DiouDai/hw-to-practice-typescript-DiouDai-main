// Maps are also called dictionaries, and are really just simple objects

/**
 * Modify and return the given map as follows: if the key "a" has a value,
 * set the key "b" to have that same value. In all cases remove the key "c",
 * leaving the rest of the map unchanged.
 */

export function mapShare(someMap): object {
    delete someMap.c;
    if (someMap.a != undefined){
        someMap.b = someMap.a;
        return someMap
    }
    return someMap;
}

/**
 * A Grocery object will have the fields "bananas", "apples", and "oranges".
 * Add together the number of bananas, apples, and oranges in a grocery object.
 */
export function addGroceries(grocery): number {
    return grocery.apples+grocery.bananas+grocery.oranges;
}