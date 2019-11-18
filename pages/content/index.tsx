import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({})
export default class Content extends Vue {
    render() {
        return (
            <div class="content">
                index
            </div>
        )
    }
}