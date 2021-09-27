import './ImageCaousel.css'
import { Carousel } from 'react-carousel-minimal'
import { useSelector } from 'react-redux';
const ImageCarousel = () => {

    const car_details = useSelector(state => state.fetchCarDetails?.carDetails?.productDetail?.mobileImage?.allImages);
    const carImages = [];
    //eslint-disable-next-line
    car_details?.map((item) => {
        carImages.push({ "image": item?.tabPath, "caption": item?.label })
    })
    console.log(carImages)

    return (
        <div className="carouselCom">
            <Carousel data={carImages} width="100%" radius="8px" slideNumber={true} />
            <div id="thumbnailContainer">
                <div className="carouselThumbnails">
                    {carImages.map((item, index) => {
                        return (<div key={index} className="thumbnailImageWrapper">
                            <img alt={item.caption} className="thumbnailImage" src={item.image} />
                        </div>)
                    })
                    }

                </div>
            </div>
            <div>THis is dummy text and willl be deleted bfehsid ewfuidxcdsfb /.n dhbx</div>
        </div>
    )
}
export default ImageCarousel;