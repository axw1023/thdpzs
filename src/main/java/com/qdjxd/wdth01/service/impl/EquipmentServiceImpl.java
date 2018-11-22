package com.qdjxd.wdth01.service.impl;

import com.qdjxd.wdth01.common.EchartsBarVo;
import com.qdjxd.wdth01.common.EchartsPieVo;
import com.qdjxd.wdth01.dao.EquipmentMapper;
import com.qdjxd.wdth01.model.*;
import com.qdjxd.wdth01.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

/**
 * @author lhy
 * 设备与安环Service实现类
 */
@Service
public class EquipmentServiceImpl implements EquipmentService{

    @Autowired
    private EquipmentMapper equipmentMapper;
    @Override
    public ResponseEntity getEquipNumList() {
        List<EquipmentComposition> equips = equipmentMapper.getEquipNumList();
        return ResponseEntity.ok(equips);
    }

    @Override
    public ResponseEntity getAreaNumList() {
        List<UnitArea> unitAreas = equipmentMapper.getAreaNumList();
        EchartsBarVo barVo = formatToEchartsBarVo(unitAreas);
        return ResponseEntity.ok(barVo);
    }

    @Override
    public ResponseEntity getInspectStaList() {
       List<InspectStatistics> inspects = equipmentMapper.getInspectStaList();
        return ResponseEntity.ok(inspects);
    }

    @Override
    public ResponseEntity getWarningPieInfo() {
        List<Warning> warnings = equipmentMapper.getWarningPieInfo();
        EchartsPieVo pieVo = formatToEchartsPieVo(warnings);
        return ResponseEntity.ok(pieVo);
    }

    @Override
    public ResponseEntity getDefectLevelInfo() {
        List<DefectLevel>  defects = equipmentMapper.getDefectLevelInfo();
        EchartsPieVo pieVo = formatDefectToEchartsPieVo(defects);
        return ResponseEntity.ok(pieVo);
    }

    @Override
    public ResponseEntity getJobRecordList() {
        List<JobRecord> jobRecords = equipmentMapper.getJobRecordList();
        return ResponseEntity.ok(jobRecords);
    }

    @Override
    public ResponseEntity getWasteList() {
        List<Waste> wastes = equipmentMapper.getWasteList();
        return ResponseEntity.ok(wastes);
    }

    private EchartsPieVo formatDefectToEchartsPieVo(List<DefectLevel> defects) {
        EchartsPieVo pieVo = new EchartsPieVo();
        int sum = 0 ;
        List<String> lengData = new LinkedList<>();
        for (DefectLevel defect:
                defects) {
            lengData.add(defect.getDefectName());
            sum+=defect.getDefectNum();
            pieVo.addOne(defect.getDefectName(),defect.getDefectNum());
        }
        pieVo.setSum(sum);
        pieVo.setLegendData(lengData);
        return pieVo;
    }

    private EchartsPieVo formatToEchartsPieVo(List<Warning> warnings) {
        EchartsPieVo pieVo = new EchartsPieVo();
        int sum = 0 ;
        List<String> lengData = new LinkedList<>();
        for (Warning warning:
             warnings) {
            lengData.add(warning.getWarningName());
            sum+=warning.getWarningNum();
            pieVo.addOne(warning.getWarningName(),warning.getWarningNum());
        }
        pieVo.setSum(sum);
        pieVo.setLegendData(lengData);
        return pieVo;
    }

    private EchartsBarVo formatToEchartsBarVo(List<UnitArea> unitAreas) {
        EchartsBarVo barVo = new EchartsBarVo();
        LinkedList<String> xlineList = new LinkedList();
        LinkedList<Integer> ylineList = new LinkedList();
        for (UnitArea area:
             unitAreas) {
            xlineList.add(area.getUnitAreaName());
            ylineList.add(area.getUnitNum());
        }
        barVo.setXlineList(xlineList);
        barVo.setYlineList(ylineList);
        return barVo;
    }
}
