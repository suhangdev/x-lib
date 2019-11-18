import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({})
export default class Comp extends Vue {
    render() {
        return (
            <div class="content">
                _component
            </div>
        )
    }
}