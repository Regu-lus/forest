// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
        number:{
            default: 0,
            type: cc.Integer
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let label = this.getComponent(cc.Label);
        label.string = "Score: "+ this.number;
    },

    add (num) {
        let label = this.getComponent(cc.Label);
        this.number += num;
        label.string = "Score: "+ this.number;
    },

    // update (dt) {},
});
