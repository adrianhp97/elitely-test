import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import styles from "./s.module.scss";

type Props = {
  images: string[];
}

const ImageViewer = ({ images }: Props) => {
  return (
    <div className={styles.imageViewer}>
      <Carousel controls={false}>
        {
          images.map(image => (
            <Carousel.Item key={image}>
              <Image
                className="d-block w-100"
                src={image}
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
      <div className={styles.indicator}></div>
    </div>
  );
}

export default ImageViewer;
