import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({})
export default class DemoItem extends Vue {
    render() {
        console.log(this.$route)
        return (
            <div class="demo">
                {this.$route.params.demoitem}
            </div>
        )
    }
}