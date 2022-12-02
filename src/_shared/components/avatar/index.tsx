import classnames from "classnames";

import Image, { ImageProps } from "react-bootstrap/Image";

import { AvatarBorder, AvatarSize } from "./types";

import styles from "./s.module.scss";

type Props = ImageProps & {
  border?: AvatarBorder;
  size?: AvatarSize;
}

const Avatar = ({ border, className, size, ...restProps}: Props) => {
  let sizeClass = styles.avatarMedium;
  switch(size) {
    case AvatarSize.Small:
      sizeClass = styles.avatarSmall;
      break;
  }

  let borderClass = "";
  switch(border) {
    case AvatarBorder.Green:
      borderClass = styles.avatarBorderGreen;
      break;
    case AvatarBorder.Yellow:
      borderClass = styles.avatarBorderYellow;
      break;
  }

  return (
    <Image className={classnames(sizeClass, borderClass, className)} {...restProps} />
  )
}

export default Avatar;
