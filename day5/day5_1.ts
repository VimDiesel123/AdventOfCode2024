interface Rule {
  first: number;
  second: number;
}

type Page = number[];

const solve = (input: string): number => {
  const rules = parseRules(input);
  const pages = parsePages(input);
  const validPages = pages.filter((page) => validPage(page, rules));
  return validPages.reduce((acc, page) => acc + middleNumber(page), 0);
};

const middleNumber = (page: Page): number => {
  return page[Math.floor(page.length / 2)];
};

const validPage = (page: Page, rules: Rule[]) => {
  return page.every((number) => validNumber(page, rules, number));
};

const validNumber = (page: Page, rules: Rule[], number: number) => {
  const before = numbersBefore(page, number);
  const after = numbersAfter(page, number);
  const mustComeBefore = numbersThatMustComeBefore(rules, number);
  const mustComeAfter = numbersThatMustComeAfter(rules, number);
  return (
    !before.some((number) => mustComeAfter.includes(number)) &&
    !after.some((number) => mustComeBefore.includes(number))
  );
};

const numbersBefore = (page: Page, number: number) => {
  return page.slice(0, page.indexOf(number));
};

const numbersAfter = (page: Page, number: number) => {
  return page.slice(page.indexOf(number) + 1);
};

const rulesInvolvingNumber = (rules: Rule[], number: number) => {
  return rules.filter((rule) => rule.first == number || rule.second == number);
};

const numbersThatMustComeBefore = (rules: Rule[], number: number): number[] => {
  return rulesInvolvingNumber(rules, number)
    .filter((rule) => rule.second == number)
    .map((rule) => rule.first);
};

const numbersThatMustComeAfter = (rules: Rule[], number: number): number[] => {
  return rulesInvolvingNumber(rules, number)
    .filter((rule) => rule.first == number)
    .map((rule) => rule.second);
};

const parseRules = (input: string): Rule[] => {
  const rulesRegex = /(\d{2})\|(\d{2})\r\n/g;
  return [...input.matchAll(rulesRegex)].map((match) => ({
    first: Number(match[1]),
    second: Number(match[2]),
  }));
};

const parsePages = (input: string): Page[] => {
  const section = input.split('\r\n\r\n')[1];
  const pages = section
    .split('\r\n')
    .map((line) => line.split(','))
    .map((page) => page.map(Number));
  return pages;
};

export {
  solve,
  parsePages,
  parseRules,
  middleNumber,
  rulesInvolvingNumber,
  validPage,
  Page,
  Rule,
};
