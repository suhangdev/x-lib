import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({})
export default class Demo extends Vue {
    render() {
        return (
            <div class="demo">
                demo主页
            </div>
        )
    }
}