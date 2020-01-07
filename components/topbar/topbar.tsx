import { Component, Vue } from 'vue-property-decorator'
import './topbar.module.less'
@Component({})
export default class Topbar extends Vue {
    render() {
        return (
            <div class="topbar">
                <span>topbar</span>
                <span>github</span>
            </div>
        )
    }
}