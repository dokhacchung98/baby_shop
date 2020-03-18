package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.dao.Feedback;
import com.khacchung.babyshop.model.dto.FeedbackDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @RequestMapping(value = "/create-feedback", method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE},
            produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponeDataDTO<Feedback> createFeedback(@Valid @RequestBody FeedbackDTO requestDTO) {
        Feedback feedback = new Feedback();
        feedback.setName(requestDTO.getName());
        feedback.setEmail(requestDTO.getEmail());
        feedback.setSubject(requestDTO.getSubject());
        feedback.setValue(requestDTO.getValue());
        try {
            Feedback tmp = feedbackService.createFeedback(feedback);
            return new ResponeDataDTO<>(Constants.SUCCESS_MSG, Constants.SUCCESS_CODE, tmp);
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/get-all-feedback", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Feedback>> getFeedbacks(@Param("page") int page, @Param("size") int size) {
        try {
            Page<Feedback> fb = feedbackService.getFeedbacks(PageRequest.of(page, size));
            return new ResponeDataDTO.Builder<Page<Feedback>>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(fb)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/get-feedback", method = RequestMethod.GET)
    public ResponeDataDTO<Feedback> getById(@Param("id") int id) {
        try {
            Feedback fb = feedbackService.getById(id);
            return new ResponeDataDTO.Builder<Feedback>()
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .withData(fb)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
