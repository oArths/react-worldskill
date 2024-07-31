import style from './style.module.css'
import ImgButton from '../../asset/images/1-search/chevron-left.svg'
import menu from '../../asset/images/1-search/menu-open.svg'
import search from '../../asset/images/1-search/search.svg'
import cat from '../../asset/images/1-search/fa-solid_cat.svg'
import dog from '../../asset/images/1-search/fa-solid_dog_white.svg'
import hOMEsOLIDF from '../../asset/images/1-search/hearthome.svg'
import beeji from '../../asset/images/1-search/dogs/benji.png'
import Alban from '../../asset/images/1-search/dogs/alvan.png'
import Karsten from '../../asset/images/1-search/dogs/karsten.png'
import reigner from '../../asset/images/1-search/dogs/reigner.png'
import { useState } from 'react'

export default function Dog() {
    const [status, setStatus] = useState(false)
    return (
        <div className={style.doby}>
            <div className={style.Main}>
                <div className={style.Header}>
                    <div className={style.ContSelect}>
                        <img className={style.imgeButton} src={ImgButton} alt="" />


                    </div>
                    <div className={style.Title}>
                        Search
                    </div>
                    <div className={style.ContSelect}>
                        <img className={style.imgeButton} src={menu} alt="" />


                    </div>
                </div>
                <div className={style.SearchCont}>
                    <div className={style.contimgesearch}>
                        <img className={style.imgesearch} src={search} alt="" />
                    </div>
                    <input type="text" className={style.input} />

                </div>
                    <div className={style.centerbutton}>
                        <div className={style.ButtonOp}>
                            <img src={dog} alt="" className={style.ImgdeOp} />

                            Dogs
                        </div>
                        <div className={style.ButtonOp1}>
                            <img src={cat} alt="" className={style.ImgdeOp} />

                            Cats
                        </div>
                    </div>
                <div className={style.Grid}>

                    <div className={style.center}>
                        <div className={style.card}>
                            <div className={style.imge}>
                                <img src={beeji} alt="" className={style.ImgeOp} />
                            </div>
                            <div className={style.textCont}>
                                <div className={style.Names}>
                                    <div className={style.nameUser}>
                                        Benji
                                    </div>
                                    <div className={style.nameSubName}>
                                        Golden
                                    </div>
                                </div>
                                <div className={style.Icon}>
                                    <img src={hOMEsOLIDF} alt="" className={style.ImgeOp2} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.card}>
                            <div className={style.imge}>
                                <img src={Alban} alt="" className={style.ImgeOp} />
                            </div>
                            <div className={style.textCont}>
                                <div className={style.Names}>
                                    <div className={style.nameUser}>
                                        Alban
                                    </div>
                                    <div className={style.nameSubName}>
                                        Corgi
                                    </div>
                                </div>
                                <div className={style.Icon}>
                                    <img src={hOMEsOLIDF} alt="" className={style.ImgeOp2} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.card}>
                            <div className={style.imge}>
                                <img src={Karsten} alt="" className={style.ImgeOp} />
                            </div>
                            <div className={style.textCont}>
                                <div className={style.Names}>
                                    <div className={style.nameUser}>
                                        Karsten
                                    </div>
                                    <div className={style.nameSubName}>
                                        Bulldog
                                    </div>
                                </div>
                                <div className={style.Icon}>
                                    <img src={hOMEsOLIDF} alt="" className={style.ImgeOp2} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.card}>
                            <div className={style.imge}>
                                <img src={reigner} alt="" className={style.ImgeOp} />
                            </div>
                            <div className={style.textCont}>
                                <div className={style.Names}>
                                    <div className={style.nameUser}>
                                        Reigner
                                    </div>
                                    <div className={style.nameSubName}>
                                        Pug
                                    </div>
                                </div>
                                <div className={style.Icon}>
                                    <img src={hOMEsOLIDF} alt="" className={style.ImgeOp2} />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}