var gWndId = 0;

var bLogin = 0;


function ButtonCreateWnd_onclick_v1()
{
    var obj = document.getElementById("video1");
    var nWndCount = 1;
    obj.DPSDK_SetWndCount(gWndId, nWndCount);
    obj.DPSDK_SetSelWnd(gWndId, 0);
}

function ButtonLogout_onclick_v1()
{
    var obj = document.getElementById("video1");
    if( bLogin == 1)
    {
        ShowCallRetInfo_v1(obj.DPSDK_Logout(), "登出");
        bLogin = 0;
    }
}




function init_v1(ip){
    var obj = document.getElementById("video1");
    gWndId = obj.DPSDK_CreateSmartWnd(0, 0, 100, 100);

    ButtonCreateWnd_onclick_v1();
    // obj.DPSDK_SetLog(2, "D:\\log\\video1_log", false, false); //初始化后设置日志路径
    ShowCallRetInfo_v1(obj.DPSDK_Login("10.0.22.245", 9000, "大屏展示2", "admin123"), "登录");
    var nWndNo = obj.DPSDK_GetSelWnd(gWndId);
    ShowCallRetInfo_v1(obj.DPSDK_DirectRealplayByWndNo(gWndId, nWndNo,ip , 1, 1, 1), "直接实时播放");
    bLogin=1;
}


function ShowCallRetInfo_v1(nRet, strInfo)
{
    var str = "";
    if(nRet == 0)
    {
        str = strInfo + " 成功！";
    }
    else
    {
        str = strInfo + "失败！错误码：" + nRet;
        if(nRet == 19 || nRet == 20)
        {
            str += "，请先加载组织结构！";
        }
    }
}
