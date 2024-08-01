import style from './style.module.css'
import ImgButton from '../../asset/images/1-search/chevron-left.svg'
import menu from '../../asset/images/1-search/menu-open.svg'
import search from '../../asset/images/1-search/search.svg'
import cat from '../../asset/images/1-search/fa-solid_cat.svg'
import catw from '../../asset/images/1-search/fa-solid_cat_white.svg'
import home from '../../asset/images/1-search//fa-solid_home.svg'
import dog from '../../asset/images/1-search/fa-solid_dog_white.svg'
import hOMEsOLIDF from '../../asset/images/1-search/hearthome.svg'
import beeji from '../../asset/images/1-search/dogs/benji.png'
import Alban from '../../asset/images/1-search/dogs/alvan.png'
import Karsten from '../../asset/images/1-search/dogs/karsten.png'
import reigner from '../../asset/images/1-search/dogs/reigner.png'
import close from '../../asset/images/1-search/menu-close.svg'
import dogw from '../../asset/images/1-search/fa-solid_dog_white.svg'


import { useState } from 'react'

export default function OneDog() {
    const [status, setStatus] = useState(false)
    const [ModelOpen, setModalOpen] = useState(false)

    return (
        <div className={style.doby}>
            <div className={style.Main}>
                <div className={style.Header}>
                    <div className={style.ContSelect} onClick={() => (window.location.href = '/')}>
                        <img className={style.imgeButton} src={ImgButton} alt="" />


                    </div>

                </div>
                <div className={style.card}>
                    <div className={style.imge}>
                        <img src={Karsten} alt="" className={style.ImgeOp} />
                    </div>
                    {/* <div className={style.textCont}>
                        <div className={style.Names}>
                            <div className={style.nameUser}>
                                Karsten
                            </div>
                            <div className={style.nameSubName}>
                                Bulldog
                            </div>
                        </div>

                    </div> */}
                </div>

                <div className={style.centerbutton}>
                    <div className={style.ButtonOp}>

                        Take Home
                    </div>

                </div>
               


            </div>

        </div>
    )
}