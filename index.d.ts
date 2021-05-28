// make types are actually strict

type StringKeys<T extends object> = Extract<keyof T, string>;

interface ObjectConstructor {
    keys<T extends object>(obj: T): (keyof T)[];
    entries<T extends object>(obj: T): [keyof T, T[keyof T]][];
    // todo review https://stackoverflow.com/questions/57390305/trying-to-get-fromentries-type-right
    fromEntries<T extends [string, any][]>(obj: T): Record<T[number][0], T[number][1]>;
}