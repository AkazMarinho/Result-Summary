import { Brain, ChatCircleDots, Eye, Lightning } from '@phosphor-icons/react'
import { Slot } from './Slot'
import style from './Summary.module.css'

export function Summary(){

    const reaction = {backgroundColor: '#fff6f5', color: '#db6567'}
    const memoryi = {backgroundColor: '#fffbf2',  color:'#f7b738'}
    const verbal = {backgroundColor: '#f2fbfa',  color:'#34af90'}
    const visual = {backgroundColor: '#f3f3fd',  color:'#3a4399'}

    return (
        <div className={style.content}>
            <h1>Summary</h1>

            <div className={style.slots}>
                <Slot styleIcon={reaction} icons={<Lightning/> } content='Reaction' pontuation='130'/>
                <Slot styleIcon={memoryi} icons={<Brain/> } content='Memory' pontuation='90'/>
                <Slot styleIcon={verbal} icons={<ChatCircleDots/> } content='Verbal' pontuation='60'/>
                <Slot styleIcon={visual} icons={<Eye/> } content='Visual' pontuation='15'/>
            </div>
            <button>Continue</button>
        </div>
    )
}