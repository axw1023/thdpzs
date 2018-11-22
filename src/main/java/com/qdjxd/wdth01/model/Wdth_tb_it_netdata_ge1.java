package com.qdjxd.wdth01.model;

import java.util.Date;

public class Wdth_tb_it_netdata_ge1 {
    private String id;

    private String trimmeddispname;

    private String intraffic;

    private String outtraffic;

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

    public String getIntraffic() {
        return intraffic;
    }

    public void setIntraffic(String intraffic) {
        this.intraffic = intraffic == null ? null : intraffic.trim();
    }

    public String getOuttraffic() {
        return outtraffic;
    }

    public void setOuttraffic(String outtraffic) {
        this.outtraffic = outtraffic == null ? null : outtraffic.trim();
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}