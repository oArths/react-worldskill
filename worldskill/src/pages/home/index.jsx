import style from './style.module.css'
import image1 from '../../asset/images/0-home/slide1.png'
import image2 from '../../asset/images/0-home/slide2.png'
import ImgButton from '../../asset/images/0-home/chevron-right.svg'
import { useState } from 'react'

export default function Home() {
    const [status, setStatus] = useState(false)
    const [image, setImage] = useState(image1)


    const Image = ({ Children }) => {
            setImage(status ? image1 : image2)
        return  Children

    }

    return (
        <div className={style.doby}>
            <div className={style.Main}>
                <div className={style.texteall}>
                    <div className={style.ContSelect}>
                        {status ? (
                            <>
                                <a onClick={() => (setStatus(!status), console.log(status))} className={style.Op}>
                                </a>
                                <div className={style.OpSelect}>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={style.OpSelect}>
                                </div>
                                    <a onClick={() => (setStatus(!status), console.log(status))} className={style.Op}>
                                </a></>


                        )}

                    </div>
                    <div className={style.cONTtEXT}>
                        <div className={style.Title}>
                            petfinder
                        </div>
                        <div className={style.SubTitle}>
                            Adopt the perfect pet of more <br /> than 700 animal shelters
                        </div>
                    </div>
                </div>
                <Image  Children={
                    <div className={style.Contimage} >
                        <img className={style.image} src={image} alt="" />
                    </div>

                }  />



                <div className={style.ButtonCont}>
                    <div className={style.bUTTON} onClick={() => (window.location.href = '/Dogs')} >
                        <img className={style.imgeButton} src={ImgButton} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}