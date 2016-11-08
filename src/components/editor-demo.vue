<template lang="html">
    <div class="editor-demo">
        <div class="editor-box" v-if="!is_phone">
             <p>PC端编辑器</p>
            <v-editor
            :input-content="inputContent"
            :upload-url="uploadUrl"
            v-model="outputContent"></v-editor>
            <input type="button" name="name" value="submit" @click="submit">
        </div>
                   
        <div class="editor-box" v-if="is_phone">
            <p>移动端编辑器</p>
            <v-mobile-editor
            :input-content="inputContent"
            :upload-url="uploadUrl"
            v-model="outputContent"></v-mobile-editor>
            <input type="button" name="name" value="submit" @click="submit">
        </div>

        <div class="editor-box" style="background:#fff;">
            <p>输入结果</p>
            <div v-html="outputContent"></div>
        </div>
        
    </div>
    
</template>

<script>
import Editor from './editor.vue'
import mobileEditor from './editor-mobile.vue'
import Browser from '../../statics/js/browser.js'
export default {
    data() {
        return {
            // input content to editor
            inputContent: 'base on wangeditor',
            // output content from editor
            outputContent: '',
            // set image upload api url
            uploadUrl: '/api/v1/help/upload/wangEditorH5File',
            is_phone: false
        }
    },
    computed: {},
    mounted() {
        this.is_phone = browser.versions.android || browser.versions.iPhone || browser.versions.iPad;
        if(this.is_phone){
            $('.wangEditor-container').hide();
        }    
    },
    attached() {},
    methods: {
        submit() {
            console.log(this.outputContent)
        }
    },
    components: {
        'v-editor': Editor,
        'v-mobile-editor': mobileEditor
    }
}
</script>

<style lang="css" scoped>
    .editor-box{
        margin-top: 40px;
    }
    
</style>
