package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.Feedback;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {

    @Query("SELECT e FROM Feedback e")
    Page<Feedback> getAllFeedback(Pageable pageable);
}
