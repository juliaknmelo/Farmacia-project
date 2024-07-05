// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia da Julis</Link>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/produto' className='hover:underline'>Produtos</Link>
        
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar