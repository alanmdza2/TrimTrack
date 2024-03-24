import Servicio from '@/components/Servicio'
import Button from '@/components/Button'

const page = () => {
    /*const getData = async (e) => {
        const api = 'http://localhost:8080/api/turno';
        const data = await fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'bearer': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJpYXQiOjE3MTEyMDU0MDIsImV4cCI6MTcxMTIwNjg0Mn0.pHifingm8l4e5eQJjKQ68bW8GppyDo3oxzad8QzdfEc'
            }
        });
        const res = await data.json();
        console.log(res);
    }

    useEffect(() => {
        getData();
    }, [])
    */
    return (
        <div className='bg-[#303030]'>
            <div>
                <h4 className='text-2xl'>Seleccione un Servicio</h4>
            </div>
            <div><h5>Placeholder barra de progreso</h5></div>
            <div>
                <form action="" className='w-full flex flex-col '>
                    <div className='flex-col justify-center '>
                        <div className='flex flex-row'>
                            <input type="checkbox" name="" id="" />
                            <Servicio legend={'Corte de pelo'} price={'$3800'} time={'15 Minutos'} />
                        </div>
                        <div className='flex flex-row'>
                            <input type="checkbox" name="" id="" />
                            <Servicio legend={'Corte de Pelo + Barba'} price={'$4000'} time={'30 Minutos'} />
                        </div>
                        <div className='flex flex-row'>
                            <input type="checkbox" name="" id="" />
                            <Servicio legend={'Color'} price={'$5500'} time={'60 Minutos'} />
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex flex-row justify-between'>
                <a className='text-xs underline'>¿Tenes alguna duda? Conoce nuestra politica de reservas.</a>
                <Button legend={'Siguiente'} />
            </div>
        </div>
    )
}

export default page