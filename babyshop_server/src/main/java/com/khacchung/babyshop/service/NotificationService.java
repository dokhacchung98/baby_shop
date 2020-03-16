package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Notification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NotificationService {
    Notification createNotification(Notification notification);

    Page<Notification> getNotification(Pageable pageable, int userId);

    Notification updateNotification(Notification notification);
}
