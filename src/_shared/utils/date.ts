import moment, { Moment } from "moment";

export const caluclateDiffNow = (date: number | string | Moment) => {
  let momentDate = moment(date);
  if (typeof date === "number") {
    momentDate = moment.unix(date);
  }
  return momentDate.diff(moment(), "years");
}
