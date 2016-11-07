<template lang="html">
    <div class="editor-demo">
       <!--  <v-editor
        :input-content="inputContent"
        :upload-url="uploadUrl"
        v-model="outputContent"></v-editor>
        <input type="button" name="name" value="submit" @click="submit">
 -->
        <p>移动端编辑器</p>
        <div class="mobile-editor">
            <textarea id="editorMobile" style="width:100%;height:300px;">
                <p>移动端编辑器</p>
            </textarea>
        </div>
    </div>
    
</template>

<script>
// import Editor from './editor.vue'
export default {
    data() {
        return {
            // input content to editor
            inputContent: 'base on wangeditor',
            // output content from editor
            outputContent: '',
            // set image upload api url
            uploadUrl: '/api/v1/help/upload/wangEditorH5File'
        }
    },
    computed: {},
    mounted() {
        this.initMobile()
    },
    attached() {},
    methods: {
        // submit() {
        //     console.log(this.outputContent)
        // },
        initMobile(){
            // ___E 三个下划线
            var editor_m = new ___E('editorMobile');
            editor_m.config.menus = [
                'bold',
                'color',
                'quote',
                'list',
                'img'
            ];
            editor_m.init();
        }
    },
    components: {
        // 'v-editor': Editor
    }
}
</script>

<style lang="css">
</style>