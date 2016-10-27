<template>
    <div class="new">
        <div class="weui-form-preview" v-for="list in lists">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">付款金额</label>
                    <em class="weui-form-preview__value">¥{{ list.num }}</em>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">商品</label>
                    <span class="weui-form-preview__value">{{ list.name }}</span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <router-link to="/detail" class="weui-form-preview__btn weui-form-preview__btn_primary">详情</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                lists: [
                    {
                        num: 2400.00,
                        name: '电动打印机'
                    },
                    {
                        num: 12.00,
                        name: '数据线'
                    },
                    {
                        num: 14.00,
                        name: '西红柿炒鸡蛋'
                    },
                    {
                        num: 199.00,
                        name: '转账'
                    },
                    {
                        num: 130.00,
                        name: '马丁靴'
                    },
                    {
                        num: 200.00,
                        name: '印花裙'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .weui-form-preview{
        margin-bottom: 10px;
    }
</style>