var student1 ={id: 110,
     name:'Siam khan',
      marks: 84, 
      Phone: 0177125125
    };


var student2 ={id: 1200,
     name:'Riam khan', 
     marks: 74,
      Phone: 015525125
    };


var mobile ={color: 'Golden', 
price:5000, 
screenSize:5, 
storage: '64gg'
};


var book ={ title:'Amar ace jol',
 author:'humayun ahamed', 
 price: 200, 
 pages: 246, 
 publiser:'Dolphin'
};

console.log(student1);
console.log(student2);
console.log(mobile);
console.log(book);
console.log(book.pages);


//1st way.................

// var bookPages =book.pages;
// book.pages = 300;
// console.log(book);


//2nd way ..................
book["pages"]= 400;
console.log(book);


//3rd way.................
var pagesProperty ='pages';
book[pagesProperty]= 500;
console.log(book);