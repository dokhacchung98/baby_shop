package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Notification;
import com.khacchung.babyshop.repository.NotificationRepository;
import com.khacchung.babyshop.service.NotificationService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl implements NotificationService {
    private Logger logger = Logger.getLogger(NotificationServiceImpl.class);

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification createNotification(Notification notification) {
        try {
            Notification tmp = notificationRepository.save(notification);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Notification> getNotification(Pageable pageable, int userId) {
        try {
            Page<Notification> tmp = notificationRepository.findNotification(pageable, userId);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Notification updateNotification(Notification notification) {
        try {
            notificationRepository.save(notification);
            return notification;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
