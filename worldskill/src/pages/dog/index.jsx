import style from './style.module.css'
import ImgButton from '../../asset/images/1-search/chevron-left.svg'
import menu from '../../asset/images/1-search/menu-open.svg'
import search from '../../asset/images/1-search/search.svg'
import cat from '../../asset/images/1-search/fa-solid_cat.svg'
import catw from '../../asset/images/1-search/fa-solid_cat_white.svg'
import home from '../../asset/images/1-search//fa-solid_home.svg'
import dog from '../../asset/images/1-search/fa-solid_dog_white.svg'
import beeji from '../../asset/images/1-search/dogs/benji.png'
import Alban from '../../asset/images/1-search/dogs/alvan.png'
import Karsten from '../../asset/images/1-search/dogs/karsten.png'
import reigner from '../../asset/images/1-search/dogs/reigner.png'
import close from '../../asset/images/1-search/menu-close.svg'
import dogw from '../../asset/images/1-search/fa-solid_dog_white.svg'


import { useState } from 'react'

export default function Dog() {
    const [ModelOpen, setModalOpen] = useState(false)

    return (
        <div className={style.doby}>
            <div className={style.Main}>
                <div className={style.Header}>
                    <div className={style.ContSelect} onClick={() => (window.location.href = '/')}>
                        <img className={style.imgeButton} src={ImgButton} alt="" />


                    </div>
                    <div className={style.ContSelect}>
                        <div className={style.Title}>
                            Search
                        </div>
                    </div>
                    {ModelOpen ? (
                        <div className={style.ContSelect1} onClick={() => (setModalOpen(!ModelOpen), console.log(ModelOpen))}>
                            <img className={style.imgeButton1} src={close} alt="" />

                        </div>
                    ) : (
                        <div className={style.ContSelect1} onClick={() => (setModalOpen(!ModelOpen), console.log(ModelOpen))}>
                            <img className={style.imgeButton1} src={menu} alt="" />

                        </div>
                    )}
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
                    <div className={style.ButtonOp1} onClick={() => (window.location.href = '/Cats')}>
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
                                    <div className={style.ImgeOp2} />

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
                                    <div className={style.ImgeOp2} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.center}>
                        <div className={style.card} onClick={() => (window.location.href = '/oneDogs')} >
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
                                    <div className={style.ImgeOp2} />

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
                                    <div className={style.ImgeOp2}></div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.Main4} style={{ transform: ModelOpen ? 'translateX(0px)' : 'translateX(414px)' }}>
                    <div className={style.ContAll}>
                        <div className={style.Titlee}>
                            Menu
                        </div>
                        <div className={style.Button1} onClick={() => (window.location.href = '/')}>
                            <div className={style.Itens}>
                                <img src={home} alt="" className={style.ImgeOp1} />
                                Home

                            </div>
                        </div>
                        <div className={style.Button2} onClick={() => (window.location.href = '/Dogs')}>
                            <div className={style.Itens}>
                                <img src={dogw} alt="" className={style.ImgeOp1} />
                                Dogs

                            </div>
                        </div>
                        <div className={style.Button3} onClick={() => (window.location.href = '/Cats')}>
                            <div className={style.Itens}>
                                <img src={catw} alt="" className={style.ImgeOp1} />
                                Cats

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}