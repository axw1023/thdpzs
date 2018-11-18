package com.qdjxd.wdth01.model;

public class Wdth_tb_it_yjszxzy {
    private Integer sheetid;

    private Integer allnum;

    private Integer usenum;

    private String type;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public Integer getAllnum() {
        return allnum;
    }

    public void setAllnum(Integer allnum) {
        this.allnum = allnum;
    }

    public Integer getUsenum() {
        return usenum;
    }

    public void setUsenum(Integer usenum) {
        this.usenum = usenum;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }
}