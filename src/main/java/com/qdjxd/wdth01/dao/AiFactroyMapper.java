package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.AiFactroy;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AiFactroyMapper {
    List<AiFactroy> getAiFactroyText();
}
