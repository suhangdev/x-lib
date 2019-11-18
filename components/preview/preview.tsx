import { Component, Vue } from 'vue-property-decorator'
import './preview.module.less'
@Component({})
export default class Preview extends Vue {
    render() {
        return (
            <div class="preview">
                preview
            </div>
        )
    }
}