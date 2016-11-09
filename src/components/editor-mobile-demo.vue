<template lang="html">
    <div class="mobile-demo">
        <div class="editor-box" >
            <p>移动端编辑器</p>
            <div class="mobile-editor">
                <link rel="stylesheet" type="text/css" href="./statics/css/wangEditor-mobile.css">
                <textarea id="editorMobile" style="width:100%;height:300px;" >
                    <p>请输入内容...</p>
                </textarea>
            </div>
            <input type="button" name="name" value="submit" @click="submit">
        </div>
        <div class="editor-box" style="background:#fff;">
            <p>输入结果</p>
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
import mobileEditor from '../../statics/js/wangEditor-mobile.js'
export default {
    data() {
        return {
            content: '',
            uploadUrl: 'api/img'
        }
    },
    computed: {
    },
    mounted() {
        this.createEditor()
    },
    methods: {
        submit() {
           console.log(this.content)
        },
        createEditor() {
            const self = this
            ___E.config.happy = [
                'http://www.fuhaodq.com/fhimg/1/bqfh0.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh5.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh9.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh13.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh17.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh22.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh26.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh30.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh34.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh38.png',
                'http://www.fuhaodq.com/fhimg/1/bqfh40.png'
            ]
            var editor_m = new ___E('editorMobile');
            editor_m.config.menus = [
                'head',
                'bold',
                'color',
                'quote',
                'list',
                'img',
                'happy'
            ];

            editor_m.config.uploadImgUrl = self.uploadUrl;
            editor_m.init();

            var $_txt = editor_m.$txt;
            $_txt.on('blur', function(){
                var _current = $_txt.html();
                 if(_current != self.content){
                    self.content = _current;
                 }
            })
        }
    },
    components: {}
}
</script>

<style lang="css" scoped>
    .editor-box{
        margin-top: 40px;
    }
   .mobile-editor{
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
        height: 300px;
    }
</style>