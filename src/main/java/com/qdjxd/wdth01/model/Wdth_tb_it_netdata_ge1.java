package com.qdjxd.wdth01.model;

import java.util.Date;

public class Wdth_tb_it_netdata_ge1 {
    private String id;

    private String trimmeddispname;

    private Double intraffic;

    private Double outtraffic;

    private Date time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTrimmeddispname() {
        return trimmeddispname;
    }

    public void setTrimmeddispname(String trimmeddispname) {
        this.trimmeddispname = trimmeddispname == null ? null : trimmeddispname.trim();
    }

    public Double getIntraffic() {
        return intraffic;
    }

    public void setIntraffic(Double intraffic) {
        this.intraffic = intraffic;
    }

    public Double getOuttraffic() {
        return outtraffic;
    }

    public void setOuttraffic(Double outtraffic) {
        this.outtraffic = outtraffic;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}