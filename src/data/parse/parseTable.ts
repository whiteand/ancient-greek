import { queryUnique, takeText } from "@/data/parse/takeText";

type ColDefinition<N extends string, T> = {
  name: N;
  parseValue: (value: string, td: HTMLTableCellElement) => T;
};

type TableDefinition<
  ColDefinitions extends readonly ColDefinition<string, unknown>[] = readonly ColDefinition<
    string,
    unknown
  >[],
> = {
  cols: ColDefinitions;
};

type AnyTableDefinition = TableDefinition<readonly ColDefinition<string, unknown>[]>;

type InferRow<T extends AnyTableDefinition> = {
  [k in T["cols"][number]["name"]]: ReturnType<
    Extract<T["cols"][number], { name: k }>["parseValue"]
  >;
};

export function parseTable<const T extends TableDefinition>(tableDef: T, parent: HTMLElement) {
  for (const [i, col] of tableDef.cols.entries()) {
    console.assert(
      takeText(parent, `table thead tr:first-child th:nth-child(${i + 1})`) === col.name,
    );
  }
  const trs = parent.querySelectorAll("tbody > tr");
  const res = [] as InferRow<T>[];
  for (const tr of trs) {
    console.assert(tr.children.length === tableDef.cols.length);
    const row = Object.create(null);
    for (const [i, col] of tableDef.cols.entries()) {
      const tdSelector = `td:nth-child(${i + 1})`;
      const td = queryUnique<HTMLTableCellElement>(tr, tdSelector);
      const value = col.parseValue(td.textContent, td);
      row[col.name] = value;
    }

    res.push(row);
  }

  return res;
}
