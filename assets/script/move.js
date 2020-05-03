cc.Class({
    extends: cc.Component,

    properties: {
        land:{
            default:null,
            type:cc.Node,
        },
        tree:
        {
            default:null,
            type:cc.SpriteFrame,
        }
    },

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.on_touch_move,this)
        this.node.on(cc.Node.EventType.TOUCH_END,this.on_touch_end,this)
    },

    on_touch_move(event){
        this.node.opacity = 100;     //半透明
        var delta = event.touch.getDelta();
        this.node.x += delta.x;      //this.x是在父节点坐标系下的坐标
        this.node.y += delta.y;      
    },

    on_touch_end(){
        this.node.opacity = 255;
        var old_vect = this.node.convertToWorldSpace([this.node.x,this.node.y]);    //世界坐标系的坐标
        var new_vect = this.land.convertToNodeSpace(old_vect);                      //土地坐标系的坐标
       
        var blocks = this.land.children;
        console.log(new_vect.x);
        var min=0;
        var distance = [];
        for (let i=0;i<25;i++)
        {
            distance[i]= (new_vect.x - blocks[i].x)*(new_vect.x - blocks[i].x)+(new_vect.y - blocks[i].y)*(new_vect.y - blocks[i].y);
            if (distance[i]<distance[min])
                min = i;
        }
        //console.log(min);
        var target = blocks[min].getComponent(cc.Sprite);
        target.spriteFrame=this.tree;
        this.node.x=142;
        this.node.y=432;
    },

    start () {

    },

    // update (dt) {},
});
