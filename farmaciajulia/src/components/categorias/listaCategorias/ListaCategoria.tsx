/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategorias/CardCategorias';
import { DNA } from 'react-loader-spinner';


function ListaCategoria() {
  //local de armazenar os temas
  const [categoria, setCategoria] = useState<Categoria[]>([]);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  //busca os temas no backend
  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
      }
    }
  }

  useEffect(() => {
    buscarCategoria()
  }, [categoria.length])
    return (
    <>
      {categoria.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />)
      }
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mr-8 ml-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default ListaCategoria;