import Avatar from "_shared/components/avatar";
import Button from "_shared/components/button";
import Card from "_shared/components/card";
import Text from "_shared/components/text";

import { ReactComponent as VerifiedIcon } from "assets/icons/verified.svg";

import { AvatarBorder } from "_shared/components/avatar/types";
import { FontSize, FontWeight } from "_shared/components/text/types";

import { generateMockUser } from "_shared/data/user";

import styles from "./s.module.scss";

const users = generateMockUser(5);

const UserCanCheckSection = () => {
  return(
    <Card>
      <div>
        <Text size={FontSize.Medium} weight={FontWeight.Bold}>Meet our new members</Text>
      </div>
      {
        users.map((user, idx) => (
          <div className={styles.item} key={idx}>
            <Avatar
              border={AvatarBorder.Green}
              roundedCircle
              src={user.profile.avatar}
            />
            <div className={styles.itemInfo}>
              <div className={styles.itemInfoPersonality}>
                <Text size={FontSize.Medium} weight={FontWeight.Bold}>@{user.meta.username}</Text>
                <VerifiedIcon />
              </div>
              <div className={styles.itemInfoTime}>
                <Text size={FontSize.ExtraSmall}>{user.meta.description}</Text>
              </div>
            </div>
          </div>
        ))
      }
      <Button rounded variant="light">
        <Text inline size={FontSize.Small} weight={FontWeight.Bold}>Load More</Text>
      </Button>
    </Card>
  );
}

export default UserCanCheckSection;
