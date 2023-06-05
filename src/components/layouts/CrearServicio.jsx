import {collection, addDoc} from 'firebase/firestore'
import {dataBase} from "../config/dataBase.jsx";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
const CrearServicio = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState('')
    const returnListado = useNavigate()


    const agrearServicio = async () => {
        const servicioCollection = collection(dataBase, 'servicios')
        const servicio = {
            nombre, descripcion, valor
        }
        await addDoc(servicioCollection, servicio)
        returnListado('/listar')
    }
  return(
      <section >
        <form >
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre servicio'} type={'text'}/>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion servicio'} type={'text'}/>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor servicio'} type={'text'}/>
            <input onClick={agrearServicio} type={'button'} value={'Agrear servicio'}/>
        </form>
      </section>
  )
}

export default  CrearServicio