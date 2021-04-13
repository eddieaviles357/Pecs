export const getCalculatedPoints = (initialPoint, origin, radians) => {
  // radians = degrees * pie / 180
  let iX = initialPoint.x,
      iY = initialPoint.y,
      oX = origin.x,
      oY = origin.y;
  return {
    x: ( ( iX - oX ) * Math.cos( radians ) - ( ( iY - oY ) * Math.sin( radians ) ) ) + oX, 
    y: ( ( iY - oY ) * Math.cos( radians ) + ( ( iX - oX ) * Math.sin( radians ) ) ) + oY
  };
};

export const categoriesHandler = (elementTarget) => {
  const text = elementTarget.parentElement.parentElement.innerText.toUpperCase();
  switch(text) {
    case 'SHIRT': 
      // setExtend(!extend);
      console.log('SHIRT element');
      break;
    case 'FEELINGS':
      console.log('FEELINGS element');
      break;
    case 'ENTERTAINMENT':
      console.log("ENTERTAINMENT element");
      break;
    case 'HELP':
      console.log("HELP element");
      break;
    case 'HYGIENE':
      console.log("HYGIENE element");
      break;
    case 'FUN':
      console.log("FUN element");
      break;
    case 'SPORTS':
      console.log("SPORTS element");
      break;
    case 'VEGGIES':
      console.log("VEGGIES element");
      break;
    case 'VEGGIES':
      console.log("VEGGIES element");
      break;
    default: 
      console.log('default hit')
  }
};

export const PEC_OBJECTS = [{
  id: 1,
  img: '/img/SHIRT_640x587.png',
  title: 'Shirt',
  radians: 0.785
},
{
  id: 2,
  img: '/img/FEELINGS_640x380.png',
  title: 'Feelings',
  radians: 1.571
},
{
  id: 3,
  img: '/img/ENTERTAINMENT_640x508.png',
  title: 'Entertainment',
  radians: 2.356
},
{
  id: 4,
  img: '/img/HELP_640x518.png',
  title: 'Help',
  radians: 3.142
},
{
  id: 5,
  img: '/img/HYGIENE_640x502.png',
  title: 'Hygiene',
  radians: 3.927
},
{
  id: 6,
  img: '/img/KIDS_FUN_640x630.png',
  title: 'Fun',
  radians: 4.712
},
{
  id: 7,
  img: '/img/SPORTS_640x635.png',
  title: 'Sports',
  radians: 5.498
},
{
  id: 8,
  img: '/img/VEGGIES_640x471.png',
  title: 'Veggies',
  radians: 6.283
}];

