import {
  Page,
  Rule,
  middleNumber,
  parsePages,
  parseRules,
  rulesInvolvingNumber,
  validPage,
} from './day5_1';

const solve = (input: string): number => {
  const rules = parseRules(input);
  const pages = parsePages(input);
  const invalidPages = pages.filter((page) => !validPage(page, rules));
  const compare = numberComparison(rules);
  const sortedPages = invalidPages.map((page) => page.sort(compare));
  return sortedPages.map(middleNumber).reduce((acc, cur) => acc + cur);
};

const numberComparison = (rules: Rule[]) => {
  const compare = (a: number, b: number) => {
    const rulesInvolvingA = rulesInvolvingNumber(rules, a);
    const rule = rulesInvolvingA.find(
      (rule) => rule.first === b || rule.second === b,
    );
    if (rule?.first === a) return -1;
    if (rule?.second === a) return 1;
    return 0;
  };
  return compare;
};

export { solve };
