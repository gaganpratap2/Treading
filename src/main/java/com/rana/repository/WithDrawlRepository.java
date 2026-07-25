package com.rana.repository;

import com.rana.model.WithDrawl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WithDrawlRepository extends JpaRepository<WithDrawl , Long> {

    List<WithDrawl> findByUserId(Long userId);

}
