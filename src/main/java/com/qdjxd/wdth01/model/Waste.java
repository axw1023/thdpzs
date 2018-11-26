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

    private Float so2Concentration;

    private Float so2Standard;

    private Float noConcentration;

    private Float noStandard;

    private Float ycConcentration;

    private Float ycStandard;

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

    public Float getSo2Concentration() {
        return so2Concentration;
    }

    public void setSo2Concentration(Float so2Concentration) {
        this.so2Concentration = so2Concentration;
    }

    public Float getSo2Standard() {
        return so2Standard;
    }

    public void setSo2Standard(Float so2Standard) {
        this.so2Standard = so2Standard;
    }

    public Float getNoConcentration() {
        return noConcentration;
    }

    public void setNoConcentration(Float noConcentration) {
        this.noConcentration = noConcentration;
    }

    public Float getNoStandard() {
        return noStandard;
    }

    public void setNoStandard(Float noStandard) {
        this.noStandard = noStandard;
    }

    public Float getYcConcentration() {
        return ycConcentration;
    }

    public void setYcConcentration(Float ycConcentration) {
        this.ycConcentration = ycConcentration;
    }

    public Float getYcStandard() {
        return ycStandard;
    }

    public void setYcStandard(Float ycStandard) {
        this.ycStandard = ycStandard;
    }
}