package com.qdjxd.wdth01.model;

import java.util.Date;

public class Wdth_tb_it_netdata_all {
    private String id;

    private Date time;

    private String allIntraffic;

    private String allOuttraffic;

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

    public String getAllIntraffic() {
        return allIntraffic;
    }

    public void setAllIntraffic(String allIntraffic) {
        this.allIntraffic = allIntraffic == null ? null : allIntraffic.trim();
    }

    public String getAllOuttraffic() {
        return allOuttraffic;
    }

    public void setAllOuttraffic(String allOuttraffic) {
        this.allOuttraffic = allOuttraffic == null ? null : allOuttraffic.trim();
    }
}