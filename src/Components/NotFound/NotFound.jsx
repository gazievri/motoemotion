import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import './NotFound.sass'


export const NotFound = () => {

    let navigate = useNavigate()


    const goBack = () => navigate('/')

    return(
        <div className='notFound'>
            <h2 className="notFound__title">Упс... Такой страницы не существует</h2> 
            <Button lable='Вернуться назад' fn={goBack}/>
            </div>
    )
}