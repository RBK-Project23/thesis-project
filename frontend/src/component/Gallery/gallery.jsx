import React, {useState} from "react";
import data from "../../constants/data";
import images from "../../constants/images";
import "./gallery.css";
import {FaTimesCircle} from "react-icons/fa";

const Gallery = () => {

    const [imageModal, setImageModal] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const setImageOnModal = (src) => {
        setImageSrc(src);
        setImageModal(true);
    }

    return (
        <div className="work">
            <div className={imageModal ? "image__modal image__modal__show" : "image__modal"}>
                <div className="image__modal--content">
                    <FaTimesCircle className="modal__close--btn text__light bg__blue" size = {30} onClick = {() => setImageModal(false)} />
                    <img src = {imageSrc} alt = "" />
                </div>
            </div>

            <div className="work__content grid">
                {
                    data.pics.map((pic, index) => {
                        return (
                            <div className="work__content--item" key = {index} onClick = {() => setImageOnModal(pic.img)}>
                                <img src = {pic.img} alt = "" className="img" />
                                <div className="icon">
                                    <img src = {images.icon_eye} alt = "" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery;