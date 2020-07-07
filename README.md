# popcorn-cep


## Installation

```sh
$ npm install popcorn-cep --save
```

## How to use

### ES6

```js
// to import a specific method
import { local } from 'popcorn-cep';
// using  method
local(cep);
```

## Methods

> Follow the methods that the library provides.

### local(cep)

> Method that fetches information for a street through zip code.

**Arguments**

| Argument | Type    |
|----------|---------|
|`cep`     |*string* |


**Example**

```js
const data = local();
```

### locais(uf, cidade, rua)

> Method that searches for information about a street through the State, City and part of the street name.

**Arguments**

| Argument | Type    |
|----------|---------|
|`uf`      |*string* |
|`cidade`  |*string* |
|`rua`     |*string* |


**Example**

```js
const data = locais(uf, cidade, rua);
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Popcorn-BR/popcorn-cep/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Popcorn-BR/popcorn-cep/releases).

## Authors

| ![Denner Rondinely](https://avatars1.githubusercontent.com/u/14242874?s=460&u=bb7141e15c2ce0a34e2ca36ff4398eb774f4c99d&v=4)|
|:---------------------:|
|  [Denner Rondinely](https://github.com/dennerrondinely/)   |

See also the list of [contributors](https://github.com/Popcorn-BR/popcorn-cep/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Popcorn-BR/popcorn-cep/blob/master/LICENCE.md) file for details
