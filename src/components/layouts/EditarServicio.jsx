import { updateDoc, doc, getDoc } from "firebase/firestore";
/* Borramos addDoc y traigo updateDoc. Adicional, doc para acceder al elemento individual */
import { dataBase } from "../config/dataBase.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; /* Variables por la URL. IDENTIFICA LA INFORMACIÓN QUE VOY A EDITAR */

const EditarServicio = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const returnListado = useNavigate();
  const {id} = useParams()

  const editarServicio = async () => {
    const servicioCollection = doc(dataBase, "servicios", id);
    const servicio = {
      nombre,
      descripcion,
      valor,
    };
    await updateDoc(servicioCollection, servicio, id);
    returnListado("/listar");
  };

  const servicioActualizado = async (id) => {
    const servicio = await getDoc(doc(dataBase, "servicios",id));
    setNombre(servicio.data().nombre);
    setDescripcion(servicio.data().descripcion);
    setValor(servicio.data().valor);

  };

  useEffect(() => {
    servicioActualizado(id);
  }, [id]);

  return (
    <section>
      <form>
        <input
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre servicio"}
          type={"text"}
          value={nombre}
        />
        <input
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder={"Descripcion servicio"}
          type={"text"}
          value={descripcion}
        />
        <input
          onChange={(e) => setValor(e.target.value)}
          placeholder={"Valor servicio"}
          value={valor}
          type={"text"}
        />
        <input
          onClick={editarServicio}
          type={"button"}
          value={"Editar servicio"}
        />
      </form>
    </section>
  );
};

export default EditarServicio;

{
  /* Debo traer lo que tengo en la base de datos y editarlo. Traigo todo lo que tengo en crear servicio y modifico elementos para editar*/
}
