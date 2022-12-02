export enum UserStatus {
  Online = "online",
}

export enum UserSexualOrientation {
  Heterosexual = "heterosexual"
}

export type UserPackage = {
  duration: number;
  price: number;
}

export type UserMeetupPreference = {
  activities: string;
  availability: string;
  foodPreferences: string;
  other: string;
  recentUpdates: string;
}

export type UserProfile = {
  avatar: string;
  birthday: number;
  description: string;
  education: string;
  firstName: string;
  height: number;
  images: string[];
  languages: string[];
  lastName?: string;
  occupancy: string;
  race: string;
  rating: number;
  responsiveness: string;
  totalReview: number;
  sexualOrientation: UserSexualOrientation;
  preferences: UserMeetupPreference;
};

export type User = {
  meta: {
    description: string;
    lastOnline: number;
    isFollowed: boolean;
    isVerified: boolean;
    status: UserStatus;
    username: string;
  }
  package: {
    chat?: UserPackage;
    meetup?: UserPackage;
  };
  profile: UserProfile;
};
