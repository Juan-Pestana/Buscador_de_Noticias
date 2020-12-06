import React, {useState} from 'react'
import PropTypes from 'prop-types'

const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState]= useState('')

    const SelectNoticias = () =>(
        <select className='browser-default' 
        value={state}
        onChange={e => actualizarState( e.target.value )}>
            {opciones.map(elem =>(<option key={elem.value} value={elem.value}>{elem.label}</option>))}
        </select>
    )


    return [state, SelectNoticias]
}

useSelect.propTypes = {

}

export default useSelect
