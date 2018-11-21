package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Mapper
@Repository
public interface EquipmentMapper {
    List<EquipmentComposition> getEquipNumList();

    List<UnitArea> getAreaNumList();

    List<InspectStatistics> getInspectStaList();

    List<Warning> getWarningPieInfo();

    List<DefectLevel> getDefectLevelInfo();

    List<JobRecord> getJobRecordList();

    List<Waste> getWasteList();
}
