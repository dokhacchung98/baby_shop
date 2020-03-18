package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Feedback;
import com.khacchung.babyshop.repository.FeedbackRepository;
import com.khacchung.babyshop.service.FeedbackService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    private Logger logger = Logger.getLogger(FeedbackServiceImpl.class);

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback) {
        try {
            Feedback tmp = feedbackRepository.save(feedback);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Feedback> getFeedbacks(Pageable pageable) {
        try {
            Page<Feedback> tmp = feedbackRepository.getAllFeedback(pageable);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Feedback getById(int id) {
        try {
            Feedback tmp = feedbackRepository.findById(id).get();
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
