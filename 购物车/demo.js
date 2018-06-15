var vm = new Vue({
    el: '#outDiv',
    data: {
        //可以自己导入数据，
        contents: [
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 700,
                isdeleted: true,
                isChecked: false
            },
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 900,
                isdeleted: true,
                isChecked: false
            },
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 900,
                isdeleted: true,
                isChecked: false
            },
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 900,
                isdeleted: true,
                isChecked: false
            },
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 900,
                isdeleted: true,
                isChecked: false
            },
            {
                imgUrl: '商品.jpg',
                title: '游戏王',
                local: '日本',
                date: '1989:7/8',
                numtotal: 10,
                price: 900,
                isdeleted: true,
                isChecked: false
            }
        ],
        $allChecked: null,
        $checkBox: null,
        $contentId: null,
        contentDivs:0
    },
    methods: {
        deleteItem: function (item) {
            let con = confirm('are you kid me ?');
            if (con) {
                item.isdeleted = false;
                item.isChecked = false;
            }
            let NoDeleteElems = this.contents.filter((elem) => {
                return elem.isdeleted;
            });
            if (NoDeleteElems.length < 5) {
                this.$contentId.className = '';
            }
        },

        changeChecked: function (item) {
            item.isChecked = !item.isChecked;
            //选出被渲染出的选项，用来判断全选按钮
            let filterArr = this.contents.filter((itm) => {
                return itm.isdeleted;
            });
            //判断是否存在的item 中是否存在没被选中的checkBox
            let isFlag = filterArr.every((element) => {
                return element.isChecked;
            });
            if (isFlag) {
                this.$allChecked.checked = true;
            } else {
                this.$allChecked.checked = false;
            }
        },

        deleteChoice: function () {
            var isFlag = this.contents.some(element => {
                return element.isdeleted;
            });
            if (isFlag) {
                let con = confirm('确定删除所勾选的吗？');
                if (con) {
                    this.contents.forEach(element => {
                        if (element.isChecked) {
                            element.isdeleted = false;
                            element.isChecked = false;
                        }
                    });
                    let flag = this.contents.every(element => {
                        return element.isChecked;
                    });
                    this.$allChecked.checked = flag;

                    let NoDeleteElems = this.contents.filter((elem) => {
                        return elem.isdeleted;
                    })
                    if (NoDeleteElems.length < 5) {
                        this.$contentId.className = '';
                    }
                }
            }
        },

        NoComputed: function () {
            confirm('暂时没有结算窗口');
            confirm('shut up');
        },

        isAllChoice: function () {
            let filterArr = this.contents.filter(itm => {
                return itm.isdeleted;
            });
            if (this.$allChecked.checked) {
                filterArr.forEach(element => {
                    element.isChecked = true;
                });
                for (var i = 0; i < this.$checkBox.length; i++) {
                    this.$checkBox[i].checked = true;
                }
            } else {
                filterArr.forEach(element => {
                    element.isChecked = false;
                });
                for (var i = 0; i < this.$checkBox.length; i++) {
                    this.$checkBox[i].checked = false;
                }
            }
        }
    },
    computed: {
        allMoney: function () {
            var allValue = 0;
            this.contents.forEach(element => {
                if (element.isChecked) {
                    allValue = allValue + element.price * element.numtotal;
                }
            });
            return allValue;
        },
        X: function () {
            var count = 0;
            this.contents.forEach(element => {
                if (element.isChecked) {
                    count++;
                }
            });
            return count;
        },
    },
    watch:{
        $checkBox:function(){
            if(this.$checkBox.length >4)
            {
                this.$contentId.className = 'contentDiv2';
            }
            else{
                this.$contentId.className = '';
            }
        }
    }
});

vm.$allChecked = document.getElementById('allChecked');
vm.$checkBox = document.getElementsByClassName('checkBox');
vm.$contentId = document.getElementById('contentId');
var outElement = vm.$contentId;
if (outElement.offsetHeight > 600) {
    outElement.className = 'contentDiv2';
}
