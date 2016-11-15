<template>
    <div class="detail">
        <h1>商品详情</h1>
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">付款金额</label>
                    <em class="weui-form-preview__value">¥2400.00</em>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">商品</label>
                    <span class="weui-form-preview__value">电动打蛋机</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">名字名字名字</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">标题标题</label>
                    <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                </div>
            </div>
        </div>
        <my_footer></my_footer>
    </div>
</template>

<script>
    import my_footer from './footer.vue'
    export default{
        components: {
            'my_footer' : my_footer
        },
        mouted(){
             $('.loading').hide();
        }
    }
</script>