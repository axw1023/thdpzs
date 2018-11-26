package com.qdjxd.wdth01.model;

public class Wdth_tb_itjf {
    private Integer sheetid;

    private Integer num;

    private String types;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getTypes() {
        return types;
    }

    public void setTypes(String types) {
        this.types = types == null ? null : types.trim();
    }
}