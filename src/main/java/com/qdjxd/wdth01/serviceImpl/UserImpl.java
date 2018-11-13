package com.qdjxd.wdth01.serviceImpl;

import com.qdjxd.wdth01.dao.UserMapper;
import com.qdjxd.wdth01.model.User;

import java.util.List;

public class UserImpl implements UserMapper {
    @Override
    public int deleteByPrimaryKey(String userid) {
        return 0;
    }

    @Override
    public int insert(User record) {
        return 0;
    }

    @Override
    public int insertSelective(User record) {
        return 0;
    }

    @Override
    public List<User> selectByPrimaryKey(String userid) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return 0;
    }
}
