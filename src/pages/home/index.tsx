import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";

import NewMemberSection from "./components/new-member-section";
import UserCanCheckSection from "./components/user-can-check-section";
import UserFeedSection from "./components/user-feed-section";
import UserInfoSection from "./components/user-info-section";

export default function Home() {
  return (
    <Stack gap={3}>
      <UserInfoSection />
      <Row>
        <Col md={8} xs={12}>
          <UserFeedSection />
        </Col>
        <Col className="d-none d-md-block" md={4} xs={12}>
          <Stack gap={3}>
            <NewMemberSection />
            <UserCanCheckSection />
          </Stack>
        </Col>
      </Row>
    </Stack>
  );
}
