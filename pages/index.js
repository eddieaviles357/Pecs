import {App_container, background, backgroundAnimated} from '../components/index.module.scss';
import Avatar from '../components/avatar/Avatar';
import Categories from '../components/categories/Categories';
import {getCalculatedPoints, PEC_OBJECTS} from '../components/constants/pecObj';
import {useState, useEffect} from 'react';


function Home() {
  const [extend, setExtend] = useState(false); // for background animation
  const [xy, setXY] = useState({x: 0, y: 0});
  const [xy2, setXY2] = useState({x: 0, y: 0});
  // const [categoriesXY, setCategoriesXY] = useState({x: 0, y: 0});

  const eventHandler = e => {
    const target = e.target,
          tagName = target.tagName.toUpperCase();

    if(tagName === 'IMG') {
      clickHandler(target);
    }
  };

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    if(window !== 'undefined') {

      // center of screen to translate new origin
      let origin = {
        x: window.innerWidth / 2, y: window.innerHeight / 2
      };

      // point that is going to be rotated ( x2, y2 )
      let initialPoint = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 4
      }

      setXY2( { x: initialPoint.x, y: initialPoint.y } );
      setXY( { x: origin.x, y: origin.y } );
    }
  }, []);

  return (
    <main 
    onDoubleClick={e=>console.log('x: ', e.clientX, 'y:: ', e.clientY)}
    className={App_container}>
      <Avatar setXY={setXY}/>
      {
        PEC_OBJECTS.map(({ id, img, title, radians }) => {
          return (
            <Categories 
              key={id} 
              title={title} 
              img={img} 
              x={getCalculatedPoints(xy2, xy,radians).x}
              y={getCalculatedPoints(xy2, xy,radians).y} 
              />
          )
        })
      }
        <div 
          onClick={e=>setExtend(!extend)}
          className={ 
            extend ? background : backgroundAnimated
          }
          >&nbsp;
        </div>
    </main>
  )
};


function clickHandler(elementTarget) {
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

export default Home;