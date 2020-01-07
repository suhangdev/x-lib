import { Component, Vue } from 'vue-property-decorator'
import './sidebar.module.less'
@Component({})
export default class Sidebar extends Vue {
    private component1params = {
        a: 1,
        b: 2
    }
    render() {
        return (
            <div class="sidebar">
                <div>
                    <n-link to={{path: '/home/component1', params: this.component1params}}>component1</n-link>
                </div>
                <div>
                    <n-link to={{path: '/home/component2', params: this.component1params}}>component2</n-link>
                </div>
                <div>
                    <n-link to={{path: '/home/component3', params: this.component1params}}>component3</n-link>
                </div>
            </div>
        )
    }
}