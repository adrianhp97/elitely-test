import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Avatar from "_shared/components/avatar";
import Button from "_shared/components/button";
import Card from "_shared/components/card";
import { Circle } from "_shared/components/shape";
import Tag from "_shared/components/tag";
import Text from "_shared/components/text";

import { ReactComponent as MenuListIcon } from "assets/icons/menu-list.svg";
import { ReactComponent as VerifiedIcon } from "assets/icons/verified.svg";

import { AvatarBorder, AvatarSize } from "_shared/components/avatar/types";
import { FontSize, FontWeight } from "_shared/components/text/types";

import { mockUser } from "_shared/data/user";

import styles from "./s.module.scss";

const UserInfoSection = () => {
  return (
    <Card className={styles.mainInfo}>
      <div className={styles.userInfo}>
        <div className={styles.userInfoValue}>
          <div className={styles.userInfoAvatar}>
            <Avatar
              border={AvatarBorder.Green}
              src={mockUser.profile.avatar}
              roundedCircle size={AvatarSize.Small}
            />
            <Tag>PERSONALITY</Tag>
          </div>
          <div className={styles.userInfoDescription}>
            <div className={styles.userInfoUsername}>
              <Text size={FontSize.Large} weight={FontWeight.Bold}>@{mockUser.meta.username}</Text>
              <VerifiedIcon />
            </div>
            <div className={styles.userInfoOnline}>
              <Circle size={8} />
              <Text weight={FontWeight.Semibold}>Online now</Text>
            </div>
            <Text color="greyDark" weight={FontWeight.Semibold} preline>{mockUser.meta.description}</Text>
          </div>
        </div>
        <Button className="d-none d-md-block" rounded style={{ aspectRatio: 1 }} variant="light">
          <MenuListIcon />
        </Button>
      </div>
      <Row className={styles.infoAction}>
        <Col>
          <Button block rounded variant="secondary">
            <Text color="red" size={FontSize.Medium} weight={FontWeight.Bold}>Chat</Text>
          </Button>
        </Col>
        <Col>
          <Button block rounded variant="secondary">
            <Text color="red" size={FontSize.Medium} weight={FontWeight.Bold}>Meet</Text>
          </Button>
        </Col>
        <Col>
          <Button block rounded>
            <Text size={FontSize.Medium} weight={FontWeight.Bold}>Followed</Text>
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default UserInfoSection;
