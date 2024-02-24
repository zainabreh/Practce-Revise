import style from "./DisplayContainer.module.css";
import ItemsList from './ItemsList';
const DisplayContainer = ({ items,Del }) => {
  return (
    <>
      <div>
        <ul className={style.data}>

          {items.map((item,i)=>(
                       <ItemsList key={i} singleitem={item} Del={Del}/>
                       ))}

          {/* <li className={style.item}>{items}</li> */}
        </ul>
      </div>
    </>
  );
};

export default DisplayContainer;
