export interface IPredicateGroup<T> {
  value: T[];
  predicateValue: boolean;
}

export function* groupByPredicate<T>(
  predicate: (value: T, ind: number) => boolean,
  iter: Iterable<T>,
): Generator<IPredicateGroup<T>, void, unknown> {
  let last = null as IPredicateGroup<T> | null;
  let i = 0;
  for (const ch of iter) {
    const index = i;
    i += 1;
    const predicateValue = predicate(ch, index);
    if (!last) {
      last = {
        value: [ch],
        predicateValue,
      };
      continue;
    }
    if (last.predicateValue !== predicateValue) {
      yield last;
      last = {
        value: [ch],
        predicateValue,
      };
    } else {
      last.value.push(ch);
    }
  }
  if (last) {
    yield last;
  }
}
