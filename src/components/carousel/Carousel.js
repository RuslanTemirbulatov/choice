import React, { Children, cloneElement, useEffect, useState } from 'react';
import './style.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


const PAGE_WIDTH = 300;
const Carousel = ( {children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}vh`,
                        maxWidth: `${PAGE_WIDTH}vh`
                    },
                })
            })
        );
    }, [])

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            // return Math.min(newOffset, 0);
            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            // return Math.min(newOffset, 0);
            return newOffset;
        })
    }

    return (
        <div>
            <div className="main-container">
                <FaChevronLeft className='arrow' onClick={handleLeftArrowClick} />
                    <div className="window">
                        <div className="all-pages-container"
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}>
                            {pages}
                        </div>
                    </div>
                <FaChevronRight className='arrow' onClick={handleRightArrowClick} />
            </div>
        </div>
    );
};

export default Carousel;