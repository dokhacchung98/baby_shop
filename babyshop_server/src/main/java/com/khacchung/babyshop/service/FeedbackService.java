package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Feedback;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FeedbackService {
    Feedback createFeedback(Feedback feedback);

    Page<Feedback> getFeedbacks(Pageable pageable);

    Feedback getById(int id);
}
