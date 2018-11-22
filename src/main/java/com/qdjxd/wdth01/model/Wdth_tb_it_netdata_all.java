package com.qdjxd.wdth01.model;

import java.util.Date;

public class Wdth_tb_it_netdata_all {
    private String id;

    private Date time;

    private Double allIntraffic;

    private Double allOuttraffic;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Double getAllIntraffic() {
        return allIntraffic;
    }

    public void setAllIntraffic(Double allIntraffic) {
        this.allIntraffic = allIntraffic;
    }

    public Double getAllOuttraffic() {
        return allOuttraffic;
    }

    public void setAllOuttraffic(Double allOuttraffic) {
        this.allOuttraffic = allOuttraffic;
    }
}