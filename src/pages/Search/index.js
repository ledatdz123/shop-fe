import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import UserImage from '@/logo.svg';
import Slidebar from '@/components/Slidebar';
import './search.scss';
function Search() {
    const contentStyle = {
        margin: 0,
        height: '200px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className>
            <Carousel>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <div className="head_content">
                <Slidebar />
                <div className="render_content"></div>
            </div>
        </div>
    );
}

export default Search;
