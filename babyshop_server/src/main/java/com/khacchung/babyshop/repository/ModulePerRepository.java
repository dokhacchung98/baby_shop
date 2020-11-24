package com.khacchung.babyshop.repository;

import com.khacchung.babyshop.model.dao.ModulePer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModulePerRepository extends CrudRepository<ModulePer, Integer> {
    @Query("SELECT e FROM ModulePer e")
    List<ModulePer> getAll();
}
