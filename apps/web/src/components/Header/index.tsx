import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Bell } from "lucide-react";
import boy_image from "../../assets/Boy.png";
import { fetchUserProfile } from "@shared/core/services/User";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: #ffffff;
`;

const Clickable = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
`;

const NotificationWrapper = styled(Clickable)`
  position: relative;
  margin-right: 20px;
`;

const NotificationIcon = styled(Bell)`
  font-size: 24px;
  color: #787878;
`;

const RedDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  border: 1px solid white;
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NotificationItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const NotificationTime = styled.span`
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 999;
`;

const HeaderContainer = styled.div`
  padding: 1rem 1rem;
`;

interface Notification {
  message: string;
  time: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [profileImageUrl, setProfileImageUrl] = useState<string>(boy_image);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const notificationRef = useRef<HTMLButtonElement>(null);

  const [notifications, setNotifications] = useState<Notification[]>([
    { message: "A ServiceNow update has been made to your ticketing system..", time: "2025-01-04T09:15:00Z" },
    { message: "The holiday list is now available at the HR department. .", time: "2025-01-03T18:30:00Z" },
  ]);

  useEffect(() => {
    fetchUserProfile()
      .then((res) => {
        if (res.profile_picture_path) {
          setProfileImageUrl(res.profile_picture_path);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (hasUnreadNotifications) {
      setHasUnreadNotifications(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
      setShowNotifications(false);
    }
  };

  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  return (
    <HeaderContainer>
      <Container>
        <NotificationWrapper onClick={handleNotificationClick} ref={notificationRef}>
          <NotificationIcon />
          {hasUnreadNotifications && <RedDot />}
          {showNotifications && (
            <>
              <Backdrop onClick={handleBackdropClick} />
              <NotificationDropdown>
                {sortedNotifications.map((notification, index) => (
                  <NotificationItem key={index}>
                    <NotificationText>{notification.message}</NotificationText>
                    <NotificationTime>
                      {new Date(notification.time).toLocaleString()}
                    </NotificationTime>
                  </NotificationItem>
                ))}
              </NotificationDropdown>
            </>
          )}
        </NotificationWrapper>
        <Clickable>
          <ProfileAvatar src={profileImageUrl} alt="Profile Avatar" />
        </Clickable>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
