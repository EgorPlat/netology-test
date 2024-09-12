import { useRef, useState } from "react";
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

    const [scrollStartPos, setScrollStartPos] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [params, setParams] = useState({ width, height });
    const ref = useRef<HTMLDivElement>(null);
    
    const handleSwipeNext = (e: any) => {
        e.stopPropagation();
        if (ref.current) {
            ref.current.scrollLeft += 100;
        }
    };

    const handleSwipePrev = (e: any) => {
        e.stopPropagation();
        if (ref.current) {
            ref.current.scrollLeft -= 100;
        }
    };

    const handleMouseDown = (e: any) => {   
        setIsScrolling(true);
        setScrollStartPos(e.clientX);
    };
    
    const handleMouseUp = (e: any) => {
        setIsScrolling(false);
    };

    const handleMouseMove = (e: any) => {
        if (isScrolling) {
            if (ref.current) {
                ref.current.scrollLeft += (scrollStartPos - e.clientX) / 10;
            }
        }
    };

    return (
        <div 
            className="customSlider" 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="title">{title}</div>
            <div className="actions">
                <div className="round" onClick={handleSwipePrev}>{'<'}</div>
                <div className="round" onClick={handleSwipeNext}>{'>'}</div>
            </div>
            <div className="customSliderSlides" ref={ref}>
                {
                    data.map(el => (
                        <div
                            className="customSliderCurrentImage"
                            style={{
                                transform: `translateX(180px)`,
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
                            <div className="slide-title">{el.title}</div>
                            <div className="sub-title">{el.subTitle}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}