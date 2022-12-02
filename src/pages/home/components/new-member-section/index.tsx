import Avatar from "_shared/components/avatar";
import Button from "_shared/components/button";
import Card from "_shared/components/card";
import Text from "_shared/components/text";

import { FontSize, FontWeight } from "_shared/components/text/types";

import { generateMockUser } from "_shared/data/user";

import styles from "./s.module.scss";

const users = generateMockUser(5);

const NewMemberSection = () => {
  return(
    <Card>
      <div>
        <Text size={FontSize.Medium} weight={FontWeight.Bold}>Meet our new members</Text>
      </div>
      {
        users.map((user, idx) => (
          <div className={styles.item} key={idx}>
            <Avatar src={user.profile.avatar} rounded />
            <div className={styles.itemInfo}>
              <div className={styles.itemInfoPersonality}>
                <Text color="green" size={FontSize.Medium} weight={FontWeight.Bold}>PERSONALITY</Text>
                <Text size={FontSize.Medium}>@{user.meta.username}</Text>
              </div>
              <div className={styles.itemInfoTime}>
                <Text size={FontSize.Small}>Online 3 min ago</Text>
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

export default NewMemberSection;
