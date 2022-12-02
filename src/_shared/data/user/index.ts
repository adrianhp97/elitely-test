import moment from "moment";

import { UserSexualOrientation, UserStatus } from "./types";

import type { User } from "./types";

import userImage1 from "assets/images/user-1.jpg";
import userAvatar1 from "assets/images/user-avatar-1.jpg";

export const mockUser: User = {
  meta: {
    description: `İ'm your manic pixie dream girl ~
      Design student and anime weeb. Coffee addict. Anime fan and games. Come say hi!`,
    lastOnline: +moment(),
    isFollowed: false,
    isVerified: true,
    status: UserStatus.Online,
    username: "xuixian_98",
  },
  package: {
    chat: {
      price: 30,
      duration: 30,
    },
    meetup: {
      price: 200,
      duration: 120,
    },
  },
  profile: {
    avatar: userAvatar1,
    birthday: +moment().subtract("years", 17),
    description: `Gemini. Art student and tall.
      Coffee, cold showers and early morning walks!`,
    education: "Student at University",
    firstName: "Xiuxuan",
    height: 158,
    images: [userImage1, userImage1],
    languages: ["English", "Mandarin"],
    lastName: "",
    occupancy: "SIM-UOL",
    race: "Chinese",
    rating: 4.5,
    responsiveness: "Usually response in 30 minutes",
    totalReview: 193,
    sexualOrientation: UserSexualOrientation.Heterosexual,
    preferences: {
      activities: "Cafe, bar, picnic, anything easy going!",
      availability: "Flexi but preferably weekdays! Please arrange at least two days in advance.",
      foodPreferences: "Pasta and sushi",
      other: "Lorem ipsum dolor sit amet consectetur. Diam feugiat auctor proin at elementum duis. Donec quis lectus mollis viverra risus donec non nisl.",
      recentUpdates: "I’m free today 10:30 am - 3 pm, coming from West. Open to try any area and place!",
    },
  }
}

export const generateMockUser = (total: number): User[] => {
  return (new Array(total)).fill({ ...mockUser });
}
