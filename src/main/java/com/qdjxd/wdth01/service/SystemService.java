package com.qdjxd.wdth01.service;

import com.qdjxd.wdth01.common.TableInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface SystemService {
    ResponseEntity getMenuList();

    ResponseEntity getTableFormatData(String type);

    ResponseEntity getTableList(String type);

    ResponseEntity updateTableInfo(TableInfo table);

    ResponseEntity welcomeImg();

    ResponseEntity getImgList();

    ResponseEntity uploadImg(String name, MultipartFile file) throws IOException;

    ResponseEntity useImg(String id);

    ResponseEntity delImg(String id);
}
