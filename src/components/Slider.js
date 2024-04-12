import { useEffect, useState } from "react";

const images = [{link: "/", alt: "1"}, {link: "/", alt: "2"} ,{link: "/", alt: "3"}];

const Slider = () => {

    const [img,setImage] = useState(0);

    const imageList = images.map((val,idx) => {
        return(
            <li key={idx}><img src={val.link} alt={val.alt}></img></li>
        );
    })

    useEffect(() => {
        let id = setInterval(() => {
            setImage(img => (img+1)%3);
        },5000);
        
        return () => clearInterval(id);
    },[img]);

    const handleControl = (action) => {
        setImage(action)
    };

    return(
        <div>
            <ol>
                {imageList[img]}
            </ol>
            <button onClick={() => handleControl(0)}>P</button>
            <button onClick={() => handleControl(1)}>C</button>
            <button onClick={() => handleControl(2)}>N</button>
        </div>
    )
};

export default Slider;
