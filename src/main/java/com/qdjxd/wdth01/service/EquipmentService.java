package com.qdjxd.wdth01.service;

import org.springframework.http.ResponseEntity;

/**
 * @author lhy
 * 设备与安环Service
 */
public interface EquipmentService {
    /**
     * 获取设备构成信息
     * @return
     */
    ResponseEntity getEquipNumList();

    /**
     * 获取设备数量柱状信息
     */
    ResponseEntity getAreaNumList();

    /**
     * 获取巡检统计信息
     * @return
     */
    ResponseEntity getInspectStaList();

    /**
     * 获取预警情况信息
     */
    ResponseEntity getWarningPieInfo();

    /**
     * 获取缺陷级别数据
     * @return
     */
    ResponseEntity getDefectLevelInfo();
    /**
     * 获取作业备案list
     */
    ResponseEntity getJobRecordList();

    /**
     * 获取外排口信息
     */
    ResponseEntity getWasteList();
}
