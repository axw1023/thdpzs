package com.qdjxd.wdth01.service.impl;

import com.qdjxd.wdth01.dao.AiFactroyMapper;
import com.qdjxd.wdth01.model.AiFactroy;
import com.qdjxd.wdth01.service.AiFactroyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AiFactroyServiceImpl implements AiFactroyService {

    @Autowired
    private AiFactroyMapper  aiFactroyMapper;

    @Override
    public ResponseEntity getAiFactroyText() {
        List<AiFactroy> texts = aiFactroyMapper.getAiFactroyText();
        Map<String,List> textMap = new HashMap<>();
        for (AiFactroy text:
             texts) {
            //文本分组
            String typeStr = text.getTextType();
            if(textMap.containsKey(typeStr)){
                List<String> subTexts = textMap.get(typeStr);
                subTexts.add(text.getAiFactroyText());
            }else {
                //初始化list
                List<String> subTexts = new ArrayList<>(4);
                subTexts.add(text.getAiFactroyText());
                textMap.put(typeStr,subTexts);
            }
        }
        return ResponseEntity.ok(textMap);
    }
}
