<template lang="html">
    <div id="editor" v-html="inputContent" @input="outputContent"></div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
    props: ['inputContent', 'uploadUrl'],
    data() {
        return {
            content: ''
        }
    },
    computed: {
    },
    mounted() {
        this.createEditor()
    },
    methods: {
        createEditor() {
            const self = this
            const editor = new WangEditor('editor')
            editor.config.menus = [ 'bold', 'underline', 'italic', 'forecolor', 'fontsize', 'alignleft', 'aligncenter', 'alignright',
                'img', 'undo', 'redo'
            ]
            editor.config.uploadImgUrl = this.uploadUrl
            editor.onchange = function() {
                self.formatContent(this.$txt.html())
            }
            editor.create()
        },
        formatContent(content) {
            // handle
            // ...
            this.content = content
            this.outputContent()
        },
        outputContent() {
            this.$emit('input', this.content)
        }
    },
    components: {}
}
</script>

<style lang="css" scoped>
    #editor{
        margin-top: 20px
        height: 500px;
    }
    .wangEditor-container{
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
    }
</style>