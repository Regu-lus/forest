cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    set() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.on_touch_start, this);
        this.node.opacity = 245;
    },

    on_touch_start() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.on_touch_start, this);
        this.node.opacity = 0;
        let score = cc.find('/Canvas/Score').getComponent('score');
        score.onLoad();
        let land = cc.find('/Canvas/New ScrollView/view/content').getComponent('land');
        land.onLoad();
        let plant = cc.find('/Canvas/Plant').getComponent('move');
        plant.onLoad();
    },

    // update (dt) {},
});
