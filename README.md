# [Course program module (for RS School students)](https://github.com/rolling-scopes-school/tasks/blob/master/node/modules/testing/README.md)

<h1 align="center">Assignment: Basic testing</h1>

## Description

Your task is to write unit tests using [Jest](https://jestjs.io) API.

Fork [this repository](https://github.com/AlreadyBored/basic-testing)

Assignment contains several nested folders inside `src`. Your task is to write unit tests inside test cases

## Technical requirements

Follow instructions in repository's `Readme.md`

---
<h1 align="center">Scoring: Basic testing</h1>

## Check
For check simplification you have pre-implemented npm-scripts in `package.json`

## Basic Scope

For each implemented test-case:
- **+6** if test case is implemented correctly
- **+3** if test case is implemented incorrectly
- **0** if test case is not implemented

Test case is considered to be correctly implemented if:  
- Actually tests what's described in its title

Bad:
```ts
test('should return null if one of arguments is negative number', () => {
    const result = sumPositiveNumbers(2, 3);
    expect(result).toBe(5);
});
```
Good:
```ts
test('should return null if one of arguments is negative number', () => {
    const result = sumPositiveNumbers(1, -1);
    expect(result).toBeNull();
});
```
- Doesn't break in case if we break functionality that is being tested
```ts
// isEven.ts

export const isEven = (num: number) => {
    return num % 2 === 0 ? 'Yes' : 'No';
};
```
Good:
```ts
test('should return "Yes" for even numbers', () => {
    const result = isEven(8);
    expect(result).toBe('Yes');
});
```
Bad:
```ts
test('should return "Yes" for even numbers', () => {
    const result = isEven(8);
    expect(typeof result).toBe('string');
});
```
- Stable (multiple runs produce same test result)
- Isolated (don't rely on external data/don't perform external API calls)

## Forfeits

- **-5** for each linter warning
- **-10** for each linter/TS compiler error
- **-30% of total task score** Commits after deadline (except commits that affect only Readme.md, .gitignore, etc.)