import { useSelector } from 'react-redux';
import Popup from 'features/notification/Popup/Popup';

const Notifications = () => {
  const notifications = useSelector((state) => state.notification);

  if (notifications.length === 0) return null;

  return (
    <>
      {notifications.map((notification) => (
        <Popup key={notification.id} {...notification} />
      ))}
    </>
  );
};

export default Notifications;
