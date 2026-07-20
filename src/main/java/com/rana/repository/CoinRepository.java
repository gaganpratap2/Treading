package com.rana.repository;

import com.rana.model.Coin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoinRepository extends JpaRepository<Coin , String> {
}
