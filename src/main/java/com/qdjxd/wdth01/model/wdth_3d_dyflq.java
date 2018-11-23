package com.qdjxd.wdth01.model;

public class wdth_3d_dyflq {
    private Integer sheetid;

    private String diesel;

    private double num;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public String getDiesel() {
        return diesel;
    }

    public void setDiesel(String diesel) {
        this.diesel = diesel == null ? null : diesel.trim();
    }

    public double getNum() {
        
        return num;
    }

    public void setNum(double num) {
        this.num = num;
    }
}