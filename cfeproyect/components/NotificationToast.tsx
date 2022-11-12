import { IconCheck, IconX } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';

const Notification = {
    success: (title: string, message: string) => {
        showNotification({
            title: title,
            message: message,
            color: 'teal',
            icon: <IconCheck size={18}/>
        })
    },
    error: (title: string, message: string) => {
        showNotification({
            title: title,
            message: message,
            color: 'red',
            icon: <IconX size={18}/>
        })
    }
}

export default Notification;