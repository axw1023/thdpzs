package com.qdjxd.wdth01.service;

import com.qdjxd.wdth01.common.TableInfo;
import org.springframework.http.ResponseEntity;

public interface SystemService {
    ResponseEntity getMenuList();

    ResponseEntity getTableFormatData(String type);

    ResponseEntity getTableList(String type);

    ResponseEntity updateTableInfo(TableInfo table);
}
