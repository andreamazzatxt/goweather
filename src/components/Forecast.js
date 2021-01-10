
import style from './Forecast.module.css'
import Icons from './Icons';

function Forecast(props) {

    function helperDate(num){
        const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return week[num];
    }

    return(
        <div className={style.box}>
       
           { 
            props.foreArr.map((element,index)=>{
                return(
                   <div
                   key={index+element.day} 
                   className={style.tile}>
                    <span className={style.text}>{helperDate(element.day.getDay()) + ' | '}</span>
                    <Icons desc={element.id} size={'2rem'}></Icons>
                    <span className={style.min}>{element.min+'°C '}</span>
                    <span className={style.max}>{element.max+' °C '}</span>
                    {
                       window.innerWidth > 400 &&
                        <span className={style.text}>{element.id}</span>
                    }
                        
                   </div>
                )  
            })
            }
        </div>
    )
}

export default Forecast