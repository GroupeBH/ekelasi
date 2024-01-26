import numGouv from '../assets/Logo-min-num-charted.png'
import epstGouv from '../assets/Logo-gouv_EPST.png'
import Image from 'next/image'
const partnersImgs = [numGouv, epstGouv]

export default function Partners() {
    return (
        <div className="bg-[#eeeff3] md:p-16 p-5">
            <h3 className="md:text-[27px] text-center font-bold text-[25px]">Ils travaillent avec nous</h3>
            <div className='flex justify-center items-center gap-10 pt-10'>
                <div>
                    <Image alt='' src={numGouv} className="h-[20vh] w-[22.5vw]" />
                </div>
                <div>
                    <Image alt='' src={epstGouv} className="h-[20vh] w-[37.5vw]" />
                </div>
            </div>
        </div>
    )
}