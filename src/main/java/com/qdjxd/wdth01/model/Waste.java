package com.qdjxd.wdth01.model;

public class Waste {
    private String wasteId;

    private String wasteName;

    private String wasteTypeId;

    private String wasteTypeName;

    private Float rtConcentration;

    private Float standardValue;

    private Float dischargeNum;

    private Integer controlRates;

    private Integer wasteSort;

    private Boolean wasteEnable;

    public String getWasteId() {
        return wasteId;
    }

    public void setWasteId(String wasteId) {
        this.wasteId = wasteId == null ? null : wasteId.trim();
    }

    public String getWasteName() {
        return wasteName;
    }

    public void setWasteName(String wasteName) {
        this.wasteName = wasteName == null ? null : wasteName.trim();
    }

    public String getWasteTypeId() {
        return wasteTypeId;
    }

    public void setWasteTypeId(String wasteTypeId) {
        this.wasteTypeId = wasteTypeId == null ? null : wasteTypeId.trim();
    }

    public String getWasteTypeName() {
        return wasteTypeName;
    }

    public void setWasteTypeName(String wasteTypeName) {
        this.wasteTypeName = wasteTypeName == null ? null : wasteTypeName.trim();
    }

    public Float getRtConcentration() {
        return rtConcentration;
    }

    public void setRtConcentration(Float rtConcentration) {
        this.rtConcentration = rtConcentration;
    }

    public Float getStandardValue() {
        return standardValue;
    }

    public void setStandardValue(Float standardValue) {
        this.standardValue = standardValue;
    }

    public Float getDischargeNum() {
        return dischargeNum;
    }

    public void setDischargeNum(Float dischargeNum) {
        this.dischargeNum = dischargeNum;
    }

    public Integer getControlRates() {
        return controlRates;
    }

    public void setControlRates(Integer controlRates) {
        this.controlRates = controlRates;
    }

    public Integer getWasteSort() {
        return wasteSort;
    }

    public void setWasteSort(Integer wasteSort) {
        this.wasteSort = wasteSort;
    }

    public Boolean getWasteEnable() {
        return wasteEnable;
    }

    public void setWasteEnable(Boolean wasteEnable) {
        this.wasteEnable = wasteEnable;
    }
}