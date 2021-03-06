import { Component, Vue } from 'vue-property-decorator'
import './preview.module.less'

@Component({
})
export default class Preview extends Vue {
    render() {
        return (
            <div class="preview">
                <iframe
                    class="preview-iframe"
                    src={this.getIframeSrc()}
                    width="375"
                    frameborder="0"
                >
                </iframe>
            </div>
        )
    }
    // get iframe src
    private getIframeSrc() {
        if (this.$route.path === '/home') {
            return `/demo`
        } else {
            return `/demo/${this.$route.params.component}`
        }
    }
}