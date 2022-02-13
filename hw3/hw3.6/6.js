'use strict';
/*for (let i = 'x'; i.lenght <= 20; i += 'x') {
    console.log(i);
} - почему не получается?*/ 

for (let i = 1, x = ''; i <= 20; i++) {
    x += 'x';
    console.log(x);
    };