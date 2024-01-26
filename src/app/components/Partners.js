import numGouv from '../assets/Logo-min-num-charted.png'
import epstGouv from '../assets/Logo-gouv_EPST.png'
import Image from 'next/image'

import imgPatern1 from "../assets/logo-drk-1.png";
import imgPatern2 from "../assets/logo-drk-footer.png";

const partnersImgs = [numGouv, epstGouv]

export default function Partners() {
    return (
        <div className="bg-[#eeeff3] md:p-16 p-5 md:bg-[rgb(246,247,248)]">
            <h3 className="md:text-[27px] text-center font-bold text-[25px]">Ils travaillent avec nous</h3>
            <div className='flex justify-center items-center gap-10 pt-10'>
                <div>
                    <Image alt='' src={imgPatern1} className="h-[15vh] w-[30vw] object-contain" />
                </div>
                <div>
                    <Image alt='' src={imgPatern2} className="h-[15vh] w-[30vw] object-contain" />
                </div>
            </div>
        </div>
    )
}