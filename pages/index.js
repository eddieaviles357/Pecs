import {App_container, background, backgroundAnimated} from '../components/index.module.scss';
import Avatar from '../components/avatar/Avatar';
import Categories from '../components/categories/Categories';
import {getCalculatedPoints, categoriesHandler, PEC_OBJECTS} from '../components/constants/pecObj';
import {useState, useEffect} from 'react';


function Home() {
  const [extend, setExtend] = useState(false); // for background animation
  const [avatarCoord, setAvatarCoord] = useState({x: 0, y: 0});
  const [categoryCoord, setCategoryCoord] = useState({x: 0, y: 0});
  
  useEffect(() => {
    if(window !== 'undefined') {
      // center of screen to translate new origin
      let origin = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
      
      // point that is going to be rotated ( x2, y2 )
      let initialPoint = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 4
      }
      
      setCategoryCoord( { 
        x: initialPoint.x, 
        y: initialPoint.y 
      } );

      setAvatarCoord( { 
        x: origin.x, 
        y: origin.y 
      } );
    }
  }, []);
  
  const eventHandler = e => {
    const target = e.target,
          tagName = target.tagName.toUpperCase();

    if(tagName === 'IMG') {
      clickHandler(target);
    }
  };
  
  return (
    <main 
    onDoubleClick={e=>console.log('x: ', e.clientX, 'y:: ', e.clientY)}
    className={App_container}>
      <Avatar setXY={setAvatarCoord}/>
      { 
        PEC_OBJECTS.map(({ id, img, title, radians }) => {
          return (
            <Categories 
              key={id} 
              title={title} 
              img={img} 
              setExtend={setExtend}
              extend={extend}
              coord={getCalculatedPoints(categoryCoord, avatarCoord,radians)}
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

export default Home;