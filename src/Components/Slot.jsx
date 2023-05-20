
import style from './Slot.module.css'

export function Slot({styleIcon ,icons, content, pontuation}){

    console.log(styleIcon);
    const score = () => {
        
            if(pontuation > 100){
                return pontuation = 100
            } else{
                return pontuation
            }
    }

    console.log(pontuation);
    return (
        <div style={styleIcon} className={style.content}>
            <span style={styleIcon}>{icons}</span>
            <h5>{content}</h5>
            <span className={style.score}>{score()} <span className={style.hundred}> / 100</span></span>
        </div>
         
    )
}