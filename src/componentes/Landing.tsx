import React from 'react';

interface infoPlan {
    name: string,
    info: String[],
    prices: string
}

const Landing : React.FC = () => {
    return(
        <div>
            <h3 className='text-black mt-4 w-full flex justify-center text-3xl font-semibold'>ImageStore</h3>
            <p className='mt-4 text-center'>El lugar donde tus imágenes encuentran un hogar seguro. Almacena, organiza y comparte tus fotos fácilmente.</p>
            <p className='mt-4 text-blue-900 cursor-pointer text-center font-bold'>Comienza ahora y obtén 5GB gratis.</p>
            <p className='mt-10 ml-4 font-semibold'>Descubre todo lo que podemos ofrecerte:</p>
            <ul className='ml-12 mt-4 list-disc'>
                <li>
                    <p className='font-semibold inline-block mr-2 mt-2'>Seguridad garantizada:</p>Tus imágenes están protegidas con encriptación de extremo a extremo.
                </li>
                <li>
                    <p className='font-semibold inline-block mr-2 mt-2'>Espacio ilimitado:</p>Olvídate de preocuparte por el almacenamiento. Crece a tu ritmo.
                </li>
                <li>
                    <p className='font-semibold inline-block mr-2 mt-2'>Fácil organización:</p>Crea álbumes, agrega etiquetas y encuentra tus fotos al instante.
                </li>
                <li>
                    <p className='font-semibold inline-block mr-2 mt-2'>Acceso global:</p>Mira tus imágenes desde cualquier lugar, en cualquier dispositivo.
                </li>
                <li>
                    <p className='font-semibold inline-block mr-2 mt-2'>Comparte con facilidad:</p>Comparte tus recuerdos con amigos y familiares con enlaces únicos
                </li>
            </ul>
            <p className='font-bold text-center text-red-900 mt-8 text-sm md:text-base'>Encuentra el plan que se adapte mejor con vos</p>
            <div className='flex w-full gap-4 justify-center flex-wrap'>
                <Plan name='Gratis' info={['5GB de almacenamiento', 'Subidas Limitadas', 'Descargas limitadas',  'Compartir imágenes', 'Seguridad Baja']} prices='0.00'/>
                <Plan name='Gratis' info={['100GB de almacenamiento', 'Subidas ilimitadas', 'Descargas ilimitadas',  'Compartir imágenes', 'Seguridad Media']} prices='19.00'/>
                <Plan name='Gratis' info={['1TB de almacenamiento', 'Subidas ilimitadas', 'Descargas ilimitadas',  'Compartir imágenes', 'Seguridad Avanzada']} prices='100.00'/>
            </div>
        </div>
    )
}

const Plan : React.FC<infoPlan> = ({name, info, prices}) => {
    return(
        <div className='flex gap-4 flex-col w-64 items-center mt-4 border p-4 shadow-md shadow-black'>
            <p className='text-blue-500 text-2xl'> { name } </p>
            <ul className='list-none'>
                {
                    info.map((item, index) => {
                        return <li key={index}>{item}</li>;
                        })
                }
            </ul>
            <p className='text-2xl'>$ {prices}</p>
            <button className='bg-blue-500 w-full p-2 text-white'>Subscribirse</button>
        </div>
    )
}

export default Landing;