const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Reddit']
// console.log(socials.__proto__);

// socials.forEach((item, index) => console.log(`${index} - ${item}`));

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

const getAuto = companies.filter(auto => auto.category === 'Auto');

const getLastLongCompanies = companies.filter(lastLong => lastLong.end >= 2010);
// console.log(getLastLongCompanies);

const companyAndEndedYear = companies.map(company => {
    return {
        name: company.name,
        ended_year: company.end
    }
});
// console.log(companyAndEndedYear.filter(comp => comp.ended_year === 2016));

//Chain map method
const numbers = [1,2,3,4,5,6];
const squareAndDouble = numbers.map( number => Math.sqrt(number)).map( squared => squared * 2);

// console.log(squareAndDouble);

//Reduce Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
const cart = [
    {name: 'product 1', price: 150},
    {name: 'product 2', price: 1890},
    {name: 'product 3', price: 140},
]

const total = cart.reduce((accmulator, currentValue) => accmulator + currentValue.price, 0);
console.log(total);