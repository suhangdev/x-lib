import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({})
export default class Home extends Vue {
    render() {
        return (
            <div class="home">
                index主页
            </div>
        )
    }
}