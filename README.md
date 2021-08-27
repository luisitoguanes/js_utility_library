[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<p align="center">
  <h3 align="center">JS utility library implementation</h3>

  <p align="center">
    It implements some of the most commons functions of utility library like Lodash
    <br />
    <br />
    <a href="https://github.com/luisitoguanes/js_utility_library/issues">Report Bug</a>
    ·
    <a href="https://github.com/luisitoguanes/js_utility_library/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It implements some of the most commons functions of utility library like Lodash



### Built With

* Javascript


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/luisitoguanes/js_utility_library.git
   ```


<!-- USAGE EXAMPLES -->
## Usage
```
import _ from utils.js
```

**Each:**
Receives an array or an object and a callback function. It will loop on each element and the callback will receive the current object being looped, the index, and the entire list.
Doesn't return anything, it only executes the callback.
```javascript
const arr = [1, 2, 3];
_.each(arr, (element) => { console.log(element);}); // 1 2 3
```

**Filter:**
Receives an array or an object and a callback function. It will loop on each element and the callback will receive the current object being looped, the index, and the entire list.
The callback must return true or false
Will return an array with the objects that returned true from the callback.
```javascript
const arr = [1, 2, 3];
const arrayLowerThanTwo = _.filter(arr, (element) => { if(element<=2) { return true; } else { return falses;}}); 
//  returns [1, 2]
```

**Map:**
Receives an array or an object and a callback function. It will loop on each element and the callback will receive the current object being looped, the index, and the entire list.
Will return an array with the same length that the original array (or object keys) with the value transformed from the callback.
```javascript
const arr = [1, 2, 3];
const arrayElementPlusOne = _.map(arr, (element) => { return element + 1;}); 
//  returns [2, 3, 4]
```
**Reduce:**
Receives an array or an object, a callback function, and an initial value. It will loop on each element and the callback will receive the current object being looped, the index, and the entire list.
Return ONE object that accumulates the result of each iteration of the callback
```javascript
const arr = [1, 2, 3];
const accumulative = _.reduce(arr, (element) => { return element + 1;}, 0); 
//  returns 6
```

<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- CONTACT -->
## Contact

Luis Guanes - [@luisitoguanes](https://twitter.com/luisitoguanes) - luis.guanes10@gmail.com

Project Link: [https://github.com/luisitoguanes/js_utility_library](https://github.com/luisitoguanes/js_utility_library)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [FrontEndMasters - Bianca Gandolfo's JS course](https://frontendmasters.com/courses/js-fundamentals-functional-v2/)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/luisitoguanes/js_utility_library.svg?style=for-the-badge
[contributors-url]: https://github.com/luisitoguanes/js_utility_library/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/luisitoguanes/js_utility_library.svg?style=for-the-badge
[forks-url]: https://github.com/luisitoguanes/js_utility_library/network/members
[stars-shield]: https://img.shields.io/github/stars/luisitoguanes/js_utility_library.svg?style=for-the-badge
[stars-url]: https://github.com/luisitoguanes/js_utility_library/stargazers
[issues-shield]: https://img.shields.io/github/issues/luisitoguanes/js_utility_library.svg?style=for-the-badge
[issues-url]: https://github.com/luisitoguanes/js_utility_library/issues
[license-shield]: https://img.shields.io/github/license/luisitoguanes/js_utility_library.svg?style=for-the-badge
[license-url]: https://github.com/luisitoguanes/js_utility_library/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/luis-guanes-73a11160/
