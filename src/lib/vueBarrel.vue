<template>
    <div ref="barrel">

        <slot></slot>

    </div>
</template>

<script>

const dealWidth = (items, width, maxWidth) => {

    let remain = maxWidth - width;

    let num = items.length;

    let remains = remain % num;

    let residue = Math.floor(remain / num);

    items.forEach((item, index) => {

        if (index === num - 1) {

            item.style.width = item.realWidth + residue + remains + 'px';

        } else {

            item.style.width = item.realWidth + residue + 'px';

        }


    })

}

export default {
    name: 'vueBarrel',
    data() {

        return {
            barrelWidth: 0,
            brandBox: null,
            margin: 0,
        }

    },
    props: {
        ele: {
            type: String,
            default: 'vue-barrel'
        },
    },
    methods:{

        setWidth(){
            let ele = '.' + this.ele.replace('.', '');

            let items = this.barrelBox.querySelectorAll(ele);

            let widths = 0;

            let rowWidth = 0;

            let rowList = [];

            let marginLeft = 0;

            let marginRight = 0;

            let paddingLeft = 0;

            let paddingRight = 0;

            let barrelWidth = this.barrelWidth;

            Array.prototype.forEach.call(items, (item) => {
                
                paddingRight = 0;

                paddingLeft = 0;

                marginLeft = parseInt(window.getComputedStyle(item, "").getPropertyValue('margin-left'));

                marginRight = parseInt(window.getComputedStyle(item, "").getPropertyValue('margin-right'));

                let boxSizing = window.getComputedStyle(item, "").getPropertyValue('box-sizing');

                if( boxSizing !== 'border-box' ){

                    paddingRight = parseInt(window.getComputedStyle(item, "").getPropertyValue('padding-right'));

                    paddingLeft = parseInt(window.getComputedStyle(item, "").getPropertyValue('padding-left'));

                }

                widths = item.offsetWidth + marginLeft + marginRight + 1;

                item.realWidth = item.offsetWidth - paddingLeft - paddingRight + 1;

                let tempWidth = rowWidth + widths;

                if (tempWidth > barrelWidth) {

                    dealWidth(rowList, rowWidth, barrelWidth);

                    rowList = [item];

                    rowWidth = item.offsetWidth + marginLeft + marginRight + 1;

                } else {
                    rowWidth = tempWidth;

                    rowList.push(item);

                }

            })
        }
        
    },
    updated() {

        this.setWidth();

    },
    mounted() {

        this.barrelBox = this.$refs.barrel;

        this.barrelWidth = this.barrelBox.offsetWidth;

        this.setWidth()

    }

}
</script>