import { ccclass, BaseUI, EUILayer, EBlockOnceAdType, EPlatformType, EBottomAdType } from "../../../main/script/Main"

;


//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html

@ccclass("CustomFriendUI")
export class CustomFriendUI extends BaseUI {
    public layerType = EUILayer.ItemUp
    public blockOnceAdType = EBlockOnceAdType.Show

    public _openData: IBattleCustomCacheDataShare = null!

    protected onCreate(): void {
        switch (PlatformMgr.type) {
            case EPlatformType.WECHAT:
                this.bottomAdType = EBottomAdType.Native
                break
            default:
                this.bottomAdType = EBottomAdType.Banner
                break
        }
    }


    private onClickBtn() {
        this.closeUI()
        _battleCustom.run(this._openData, true)
    }

}
