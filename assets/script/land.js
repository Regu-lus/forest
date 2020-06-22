cc.Class({
    extends: cc.Component,

    properties: {
        size: {
            default: null,
        },
        length: {
            default: null,
        },
    },

    generate(id, spriteFrame) {
        let size = this.size;
        let length = this.length;
        let target = this.node.children[id];
        target.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        target.width = target.height = length;
        target.x = parseInt(id / size) * length + length / 2 + 10;
        target.y = parseInt(id % size) * length + length / 2 + 10;
    },

    onLoad() {
        this.node.width = this.node.height = this.size * this.length + 20;
        cc.loader.loadRes('space', cc.SpriteFrame, (err, spriteFrame) => {
            for (let i = 0; i < this.size; ++i) {
                for (let j = 0; j < this.size; ++j) {
                    var node = new cc.Node('Sprite');
                    node.addComponent(cc.Sprite);
                    node.parent = this.node;
                    this.generate(i * this.size + j, spriteFrame);
                }
            }
        });
    },

    start() {

    },

    // update (dt) {},
});
