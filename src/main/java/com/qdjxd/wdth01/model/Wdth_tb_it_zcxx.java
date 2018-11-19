package com.qdjxd.wdth01.model;

public class Wdth_tb_it_zcxx {
    private Integer sheetid;

    private Integer num;

    private String name;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }
}