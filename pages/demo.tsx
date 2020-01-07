import { Component, Vue } from 'vue-property-decorator'
import './demo.module.less'
@Component({})
export default class Demo extends Vue {
    render() {
        return (
            <div class="demo">
                <nuxt-child/>
            </div>
        )
    }
}