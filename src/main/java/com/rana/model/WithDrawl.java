package com.rana.model;

import com.rana.domain.WithDrawlStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Locale;

@Entity
@Data
public class WithDrawl {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private WithDrawlStatus status;
    private Long amount;

    @ManyToOne
    private User user;

    private LocalDateTime date = LocalDateTime.now();

}
