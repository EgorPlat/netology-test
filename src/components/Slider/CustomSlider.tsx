import { useState } from "react";
import "./CustomSlider.css";

interface ICustomSliderProps {
    data: {
        img: string,
        title: string,
        subTitle: string
    }[],
    title: string,
    width: string,
    height: string
}

export default function CustomSlider({ data, width, height, title }: ICustomSliderProps) {

    const [touchXData, setTouchXData] = useState<number>(0);
    const [moveXData, setMoveXData] = useState<number>(0);
    const [newTransformX, setNewTransformX] = useState<number>(0);
    const [params, setParams] = useState({ width, height });


    const handleMouseDown = (e: any) => {   
        setTouchXData(e.clientX);
    };

    const handleSwipeNext = (e: any) => {
        e.stopPropagation();
        setNewTransformX(prev => prev - 200);
    };

    const handleSwipePrev = (e: any) => {
        e.stopPropagation();
        setNewTransformX(prev => prev + 200);
    };

    const handleMouseUp = (e: any) => {
        const difference = moveXData - touchXData;
        const imageWidth = +width.split("px")[0];
        const maxDifference = (data.length+1 - (window.innerWidth / imageWidth)) * imageWidth;
        setNewTransformX(prev => {
            if (prev + difference <= -maxDifference) {
                return prev;
            }          
            if (prev + difference > 0) {
                return 0;
            }
            return prev + difference;
        }); 
        setTouchXData(0);
    };

    const handleMouseMove = (e: any) => {
        if (touchXData !== 0) {
            setMoveXData(e.clientX);
        }
    };

    return (
        <div 
            className="customSlider" 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="title">Рандомные стили</div>
            <div className="actions">
                <div className="round" onClick={handleSwipePrev}>{'<'}</div>
                <div className="round" onClick={handleSwipeNext}>{'>'}</div>
            </div>
            <div className="customSliderSlides">
                {
                    data.map(el => (
                        <div
                            className="customSliderCurrentImage"
                            style={{
                                transform: `translateX(${newTransformX}px)`,
                                transition: "0.5s"
                            }}
                            key={el.img}
                        >
                            <img
                                src={el.img}
                                width={params.width}
                                height={height}
                                alt="Главное изображение"
                                onClick={(e) => e.preventDefault()}
                                draggable={false}
                            />
                            <div className="title">{el.title}</div>
                            <div className="sub-title">{el.subTitle}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}