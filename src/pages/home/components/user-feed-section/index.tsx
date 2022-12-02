import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "_shared/components/button";
import Card from "_shared/components/card";
import Divider from "_shared/components/divider";
import ImageViewer from "_shared/components/image-viewer";
import Tabs from "_shared/components/tab";
import Text from "_shared/components/text";

import { ReactComponent as CheckedCalendarIcon } from "assets/icons/checked-calendar.svg";
import { ReactComponent as DrinkIcon } from "assets/icons/drink.svg";
import { ReactComponent as EducationIcon } from "assets/icons/education.svg";
import { ReactComponent as FoodIcon } from "assets/icons/food.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music.svg";
import { ReactComponent as OccupancyIcon } from "assets/icons/occupancy.svg";
import { ReactComponent as RocketIcon } from "assets/icons/rocket.svg";
import { ReactComponent as StarActiveIcon } from "assets/icons/star-active.svg";
import { ReactComponent as StarInactiveIcon } from "assets/icons/star-inactive.svg";

import { FontSize, FontWeight } from "_shared/components/text/types";

import { generateMockUser, mockUser } from "_shared/data/user";
import { caluclateDiffNow } from "_shared/utils/date";

import styles from "./s.module.scss";

const users = generateMockUser(5);

const UserMain = () => {
  return (
    <div className={styles.userMain}>
      {
        users.map((user, idx) => (
          <Card className={styles.userCard} key={idx}>
            <ImageViewer images={user.profile.images} />
            <div className={styles.userCardBody}>
              <Text size={FontSize.ExtraLarge} weight={FontWeight.Bold}>
                {[user.profile.firstName, user.profile.lastName].filter(Boolean).join(' ')}, {caluclateDiffNow(user.profile.birthday)}
              </Text>
              <div className={styles.userMainItemWrapper}>
                <div className={styles.userMainItem}>
                  <div className={styles.userMainIcon}>
                    <OccupancyIcon />
                  </div>
                  <Text weight={FontWeight.Semibold}>{user.profile.occupancy}</Text>
                </div>
                <div className={styles.userMainItem}>
                  <div className={styles.userMainIcon}>
                    <EducationIcon />
                  </div>
                  <Text weight={FontWeight.Semibold}>{user.profile.education}</Text>
                </div>
              </div>

              <Divider />
              <Text preline>{user.profile.description}</Text>
            </div>
          </Card>
        ))
      }
    </div>
  );
}

const userInfoList = [
  {
    key: "age",
    label: "Age",
    value: 22,
  },
  {
    key: "race",
    label: "Race",
    value: mockUser.profile.race,
  },
  {
    key: "languates",
    label: "Languages",
    value: mockUser.profile.languages.join(", "),
  },
  {
    key: "Height",
    label: "Height",
    value: `${mockUser.profile.height}cm`,
  },
  {
    key: "sexual_orientation",
    label: "Sexual Orientation",
    value: mockUser.profile.sexualOrientation,
  },
  {
    key: "meetups",
    label: "Meetups",
    value: `$${mockUser.package.meetup?.price} / 2h`,
  },
  {
    key: "responsiveness",
    label: "Responsiveness (chats)",
    value: mockUser.profile.responsiveness,
  },
]

const userMeetupInfo = [
  {
    key: "recent_updates",
    label: "Recent Updates",
    description: mockUser.profile.preferences.recentUpdates,
    icon: <RocketIcon />
  },
  {
    key: "availability",
    label: "Availability",
    description: mockUser.profile.preferences.availability,
    icon: <CheckedCalendarIcon />
  },
  {
    key: "activities",
    label: "Activities",
    description: mockUser.profile.preferences.activities,
    icon: <MusicIcon />
  },
  {
    key: "food_preferences",
    label: "Food Preferences",
    description: mockUser.profile.preferences.foodPreferences,
    icon: <FoodIcon />
  },
  {
    key: "other",
    label: "Lorem Ipsum",
    description: mockUser.profile.preferences.other,
    icon: <DrinkIcon />
  },
]

const UserAbout = () => {
  return (
    <div className={styles.userAbout}>
      <Card>
        <div className={styles.userAboutBody}>
          <Text size={FontSize.ExtraLarge} weight={FontWeight.Bold}>
            {[mockUser.profile.firstName, mockUser.profile.lastName].filter(Boolean).join(' ')}, {caluclateDiffNow(mockUser.profile.birthday)}
          </Text>
          <div className={styles.userMainItemWrapper}>
            <div className={styles.userMainItem}>
              <div className={styles.userMainIcon}>
                <OccupancyIcon />
              </div>
              <Text weight={FontWeight.Semibold}>{mockUser.profile.occupancy}</Text>
            </div>
            <div className={styles.userMainItem}>
              <div className={styles.userMainIcon}>
                <EducationIcon />
              </div>
              <Text weight={FontWeight.Semibold}>{mockUser.profile.education}</Text>
            </div>
          </div>
          <Divider />
          <div className={styles.userAboutInfo}>
            {
              userInfoList.map(({ key, label, value }) => (
                <Row key={key}>
                  <Col xs={4}>
                    <Text weight={FontWeight.Bold}>{label}</Text>
                  </Col>
                  <Col xs={8}>
                    <Text>{value}</Text>
                  </Col>
                </Row>
              ))
            }
          </div>
          <Divider />
          <div className={styles.userAboutFooter}>
            <div className={styles.userAboutRating}>
              <div className={styles.ratingWrapper}>
                <Text inline weight={FontWeight.Semibold}>Rating</Text>
                <div className={styles.ratingStar}>
                  <StarActiveIcon />
                  <StarActiveIcon />
                  <StarActiveIcon />
                  <StarActiveIcon />
                  <StarInactiveIcon />
                </div>
              </div>
              <Text inline>{mockUser.profile.rating} of {mockUser.profile.totalReview} reviews</Text>
            </div>
            <Button className={styles.reviewButton} rounded variant="light">
              <Text inline weight={FontWeight.Bold}>Reviews</Text>
            </Button>
          </div>
        </div>
      </Card>

      <div>
        <Text size={FontSize.Large} weight={FontWeight.Bold}>Meetup</Text>
        <Divider />
        <div className={styles.meetupInfo}>
          {
            userMeetupInfo.map(({ key, label, description, icon }) => (
              <div className={styles.meetupInfoItem} key={key}>
                <div className={styles.meetupInfoIcon}>
                  {icon}
                </div>
                <div className={styles.meetupInfoDescription}>
                  <Text weight={FontWeight.Bold}>{label}</Text>
                  <Text color="greyDark">{description}</Text>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const UserFeedSection = () => {
  return (
    <Tabs
      items={[
        {
          key: "main",
          label: "Main",
          children: <UserMain />
        },
        {
          key: "about",
          label: "About",
          children: <UserAbout />
        },
        {
          disabled: true,
          key: "posts",
          label: "Posts",
        },
      ]}
    />
  );
}

export default UserFeedSection;
