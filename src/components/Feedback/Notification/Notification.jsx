import React from 'react';
import NotificationMess from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationMess>{message}</NotificationMess>;
};

export default Notification;
