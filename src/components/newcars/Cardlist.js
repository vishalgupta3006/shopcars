import Carcard from "./Carcard";
import Loader from "../reusable/Loader";
import './Cardlist.css';
export default function Cardlist(props) {
  const { carList = [], isCarListLoading, lastCarElement } = props;

  return (
    (carList.length === 0) ? <Loader /> :
      <div className="cardContainer">
        {
          carList.map((carData, index) => {
            if (index + 1 === carList.length) {
              return <div className="carCardWrapper" ref={lastCarElement} key={carData.id}>
                <Carcard car={carData} />
              </div>
            }
            else
              return <div className="carCardWrapper" key={carData.id}>
                <Carcard car={carData} />
              </div>
          })
        }
        {(isCarListLoading) ? <Loader /> : <></>}
      </div>
  )
}