<template>
    <div id="editor">
        <link rel="stylesheet" href="../../statics/css/solarized_light.min.css">
        <textarea :value="input" v-model="input"></textarea>
        <div class="weui-panel">
            <div class="weui-panel__hd">markdown预览</div>
            <div class="box"  v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>

    import marked from '../../statics/js/marked@0.3.6.js'
    import hljs from '../../statics/js/highlight.min'

    export default{
        name:'editor',
        data(){
            return {
                input: '# input markdown'
            }
        },
        created() { 
            $('.loading').hide();
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, {
                    sanitize: true,
                    breaks: true,
                    highlight: function(code, lang) {
                        return hljs.highlightAuto(code, [lang]).value;
                    }
                })
            }
        }
    }
</script>
<style>
    html, body, #editor {
        margin: 0;
        height: 100%;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        color: #333;
    }

    textarea, .box {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    textarea {
        border: none;
        resize: vertical;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
        height: 200px;
    }

    #editor pre{
        background: #eee;
        border: 1px solid #ddd;
        margin-top: 15px;
        padding: 7px 15px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        text-shadow: 0 0 1px #fff;
        line-height: 1.6;
        overflow: auto;
        position: relative;
        font-size: 0.9em;
        overflow-x: scroll;
    }
</style>