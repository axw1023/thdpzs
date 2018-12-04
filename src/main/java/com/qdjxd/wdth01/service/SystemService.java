package com.qdjxd.wdth01.service;

import org.springframework.http.ResponseEntity;

public interface SystemService {
    ResponseEntity getMenuList();

    ResponseEntity getTableFormatData(String type);
}
