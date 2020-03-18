package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Feedback;
import com.khacchung.babyshop.repository.FeedbackRepository;
import com.khacchung.babyshop.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return null;
    }

    @Override
    public Page<Feedback> getBlogs(Pageable pageable) {
        return null;
    }

    @Override
    public Feedback getById(int id) {
        return null;
    }
}
