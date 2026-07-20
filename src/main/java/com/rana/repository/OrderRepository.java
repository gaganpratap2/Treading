package com.rana.repository;

import com.rana.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> FindByUserId(Long userId);

}
