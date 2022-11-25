import {MainHeading, GalleryCard} from '../../components/index';
import {BtnPrimary} from '../../components/index';
import {gallery} from "../../data/dataInfo.jsx";
import {getImg} from '../../utils/Helper';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className='gallery section'>
            <MainHeading title='gallery'>
            </MainHeading>
            <div className='gallery-data'>
                <div className='gallery-menu d-grid'>
                    {gallery.map((item, index) => {
                        return (
                            <GalleryCard key={index}>
                                <h3>{item.name}</h3>
                                {getImg(item.path)}
                            </GalleryCard>
                        )
                    })
                    }
                </div>
                <BtnPrimary title='view all'>
                </BtnPrimary>
            </div>
        </section>
    )
}

export default Gallery;